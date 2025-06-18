import type { ItineraryResponse } from "../tripForm/types";

interface Props {
  itinerary: ItineraryResponse;
}
export const Itinerary = ({ itinerary }: Props) => {
  console.log("❤️INSIDE ITINERARY COMP!!! Itinerary data:", itinerary);
  return (
    <>
      <p>{itinerary?.enrichedItinerary[0].day}</p>
      <p>{itinerary.enrichedItinerary[0]?.morning?.[0]?.name}</p>
      <p>{itinerary.enrichedItinerary[0]?.morning?.[0]?.description}</p>
      <p>{itinerary.enrichedItinerary[0]?.afternoon?.[0]?.website}</p>
    </>
  );
};
