import z from "zod";
import { itineraryRequestSchema } from "../schemas/itineraryRequestSchema.js";

export interface Activity {
  title: string;
  name: string;
  description: string;
  location: string;
}

export interface EnrichedActivity extends Activity {
  googleAddress: string;
  url: string | null;
  photoUrl: string | null;
  website: string | null;
  googleMapsUrl: string | null;
  googlePlaceId: string | null;
}

export interface GooglePlaceDetails {
  name: string;
  formatted_address: string | null;
  url: string | null;
  photos?: { photo_reference: string }[];
  website: string | null;
}

export interface ItineraryDay {
  day: string;
  morning?: Activity[];
  afternoon?: Activity[];
  evening?: Activity[];
}

export interface EnrichedItineraryDay {
  day: string;
  morning?: EnrichedActivity[];
  afternoon?: EnrichedActivity[];
  evening?: EnrichedActivity[];
}

export type ItineraryRequest = z.infer<typeof itineraryRequestSchema>;
