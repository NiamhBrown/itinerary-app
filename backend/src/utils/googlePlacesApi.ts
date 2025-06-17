import axios from "axios";
import { EnrichedActivity } from "../types/types.js";

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
