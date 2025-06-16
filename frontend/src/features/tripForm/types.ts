import type z from "zod";
import type { tripFormSchema } from "./tripFormSchema";

export type TripFormInputs = z.infer<typeof tripFormSchema>;

export interface ItineraryItem {
  day: string;
  name: string;
  description: string;
  location: string;
  startTime: string;
  link: string | null;
  imageUrl: string;
}
