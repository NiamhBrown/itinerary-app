import express from "express";
import { systemPrompt, buildUserPrompt } from "../utils/prompts.js";
import { fetchPlaceDetails } from "../utils/googlePlacesApi.js";
import { openai } from "../utils/openAiClient.js";
const router = express.Router();
router.post("/generate-itinerary", async (req, res) => {
    console.log("🔥 Received POST /generate-itinerary");
    const { destination, startDate, endDate, interests = [] } = req.body;
    try {
        const userPrompt = buildUserPrompt(destination, startDate, endDate, interests);
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
        });
        const itinerary = JSON.parse(response.choices[0].message.content);
        const enrichedItinerary = await Promise.all(itinerary.map(async (day) => {
            const enrichBlock = async (activities) => {
                if (!activities)
                    return undefined;
                return Promise.all(activities.map(async (item) => {
                    const place = await fetchPlaceDetails(item.name, item.location);
                    console.log("🔍 Google result:", place);
                    return {
                        ...item,
                        googleAddress: place?.address || null,
                        coordinates: place?.location || null,
                        photoUrl: place?.photoUrl || null,
                        googlePlaceId: place?.placeId || null,
                        url: place?.url || null,
                    };
                }));
            };
            return {
                day: day.day,
                morning: await enrichBlock(day.morning),
                afternoon: await enrichBlock(day.afternoon),
                evening: await enrichBlock(day.evening),
            };
        }));
        res.json({ enrichedItinerary });
    }
    catch (err) {
        console.error("OpenAI API error:", err);
        res.status(500).json({ error: "Failed to generate itinerary." });
    }
});
export default router;
//# sourceMappingURL=itinerary.js.map