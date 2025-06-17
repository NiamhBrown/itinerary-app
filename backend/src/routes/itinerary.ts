import express, { Request, Response } from "express";
import { systemPrompt, buildUserPrompt } from "../utils/prompts.js";
import { EnrichedItineraryDay, ItineraryDay } from "../types/types.js";
import { openai } from "../utils/openAiClient.js";
import { enrichActivity } from "../utils/enrichActivity.js";
import { itineraryRequestSchema } from "../itineraryRequestSchema.js";
import { ItineraryRequest } from "../types/types.js";
const router = express.Router();

router.get("/ping", (_req, res) => {
  res.send("pong");
});

router.post(
  "/generate-itinerary",
  async (req: Request, res: Response): Promise<void> => {
    console.log("🔥 Received POST /generate-itinerary");
    const parseResult = itineraryRequestSchema.safeParse(req.body);

    if (!parseResult.success) {
      res.status(400).json({
        error: "Invalid request body",
        details: parseResult.error.format(),
      });
      return;
    }

    const {
      destination,
      startDate,
      endDate,
      interests = [],
    }: ItineraryRequest = parseResult.data;
    try {
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

      res.json({ enrichedItinerary });
    } catch (err) {
      console.error("OpenAI API error:", err);
      res.status(500).json({ error: "Failed to generate itinerary." });
    }
  }
);

export default router;
