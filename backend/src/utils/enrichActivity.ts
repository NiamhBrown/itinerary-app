import {
  Activity,
  EnrichedActivity,
  GooglePlaceDetails,
} from "../types/types.js";
import {
  constructDirectionsUrl,
  constructPhotoUrl,
  fetchPlaceDetailsById,
  fetchPlaceId,
} from "./googlePlacesApi.js";

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
