import axios from "axios";
import {
  Activity,
  EnrichedActivity,
  GooglePlaceDetails,
} from "../types/types.js";

export const constructPhotoUrl = (
  photoRef: string,
  apiKey: string,
  maxWidth = 400
): string => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photo_reference=${photoRef}&key=${apiKey}`;
};

export const constructDirectionsUrl = (address: string) => {
  const encodedAddress = encodeURIComponent(address || "");
  return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
};

//add error handling
export const fetchPlaceId = async (
  placeName: string,
  location: string
): Promise<string | null> => {
  const params = {
    input: `${placeName} ${location}`,
    inputtype: "textquery",
    fields: "place_id",
    key: process.env.GOOGLE_PLACES_API_KEY,
  };
  const url =
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";
  const response = await axios.get(url, { params });
  console.log("⭐️ HERE IS THE fetchPlaceId repsone:", response);

  const candidate = response.data.candidates?.[0];
  return candidate?.place_id || null;
};

// add error handling and return type
export const fetchPlaceDetailsById = async (placeId: string) => {
  const params = {
    place_id: placeId,
    fields: "name,formatted_address,url,photo,website",
    key: process.env.GOOGLE_PLACES_API_KEY,
  };
  const url = "https://maps.googleapis.com/maps/api/place/details/json";
  const response = await axios.get(url, { params });
  console.log("⭐️ HERE IS THE fetchPlaceDetailsById repsone:", response);
  return response.data.result;
};

export const enrichActivity = async (
  activities?: Activity[]
): Promise<EnrichedActivity[]> => {
  if (!activities) return [];
  return Promise.all(
    activities.map(async (item) => {
      try {
        console.log("🔍 Enriching activity:", item.name, item.location);
        const placeId = await fetchPlaceId(item.name, item.location);

        if (placeId) {
          const place: GooglePlaceDetails = await fetchPlaceDetailsById(
            placeId
          );

          console.log("🔍 Google result:", place);
          return {
            ...item,
            googleAddress: place?.formatted_address || null,
            photoUrl: place?.photos?.[0]?.photo_reference
              ? constructPhotoUrl(
                  place.photos[0].photo_reference,
                  process.env.GOOGLE_PLACES_API_KEY!
                )
              : null,
            googlePlaceId: placeId,
            url: place?.url || null,
            website: place?.website || null,
            googleMapsUrl: constructDirectionsUrl(place?.formatted_address),
          };
        }
      } catch (err) {
        console.error(`❌ Failed to enrich activity: ${item.name}`, err);
      }
      // Returns fallback object if error occurs or no placeId that matches the expected return type
      return {
        ...item,
        googleAddress: null,
        coordinates: null,
        photoUrl: null,
        googlePlaceId: null,
        url: null,
        website: null,
        rating: null,
        totalRatings: null,
        googleMapsUrl: null,
      };
    })
  );
};
