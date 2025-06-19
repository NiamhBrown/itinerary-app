import { ItineraryDayCard } from "../../components/ItineraryDayCard";
import type { ItineraryResponse } from "../tripForm/types";

interface Props {
  itinerary: ItineraryResponse;
}
export const Itinerary = ({ itinerary }: Props) => {
  console.log("❤️ INSIDE ITINERARY COMP!!! Itinerary data:", itinerary);
  return (
    <section id="itinerary-results" className="space-y-8">
      <h2
        className="text-3xl font-bold text-center text-[#007944] mb-8"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Your Custom Itinerary
      </h2>
      {itinerary.enrichedItinerary.map((dailyItinerary, index) => (
        <ItineraryDayCard key={index} dailyItinerary={dailyItinerary} />
      ))}
    </section>
  );
};
