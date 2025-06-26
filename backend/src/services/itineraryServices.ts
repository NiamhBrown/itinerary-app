import {
  EnrichedItineraryDay,
  ItineraryDay,
  ItineraryRequest,
} from "../types/types.js";
import { buildUserPrompt, systemPrompt } from "../utils/prompts.js";
import { openai } from "../utils/openAiClient.js";
import { enrichActivity } from "../utils/googlePlacesApi.js";

export const generateAndEnrichItinerary = async (
  request: ItineraryRequest
): Promise<EnrichedItineraryDay[]> => {
  const { destination, startDate, endDate, interests = [] } = request;
  const userPrompt = buildUserPrompt(
    destination,
    startDate,
    endDate,
    interests
  );

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
  });
  console.log("🔎 Raw OpenAI response:", response.choices[0].message.content);
  const itinerary: ItineraryDay[] = JSON.parse(
    response.choices[0].message.content
  );

  const enrichedItinerary: EnrichedItineraryDay[] = await Promise.all(
    itinerary.map(async (day) => {
      return {
        day: day.day,
        morning: await enrichActivity(day.morning),
        afternoon: await enrichActivity(day.afternoon),
        evening: await enrichActivity(day.evening),
      };
    })
  );
  return enrichedItinerary;
};
