export interface Activity {
  name: string;
  description: string;
  location: string;
  link: string | null;
}

export interface EnrichedActivity extends Activity {
  googleAddress: string | null;
  coordinates: { lat: number; lng: number } | null;
  photoReference: string | null;
  googlePlaceId: string | null;
}

export interface ItineraryDay {
  day: string;
  morning?: Activity[];
  afternoon?: Activity[];
  evening?: Activity[];
}

export interface PlaceResult {
  name: string;
  url: string;
  address: string;
  directionsUrl: string;
  location: { lat: number; lng: number };
  placeId: string;
  photoUrl?: string | null;
}
