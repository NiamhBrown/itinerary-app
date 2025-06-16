// import dotenv from "dotenv";
// dotenv.config(); // Load .env file
import "./utils/loadEnv.js";
import express from "express";
import cors from "cors";
// import { OpenAI } from "openai";
// import { Activity, ItineraryDay } from "./types/types.js";
// import { fetchPlaceDetails } from "./utils/googlePlacesApi.js";
// import { buildUserPrompt, systemPrompt } from "./utils/prompts.js";
import itineraryRoutes from "./routes/itinerary.js";
const app = express();
const PORT = 3000;
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });
app.use(cors());
app.use(express.json());
app.use("/", itineraryRoutes);
// POST endpoint for itinerary generation
// app.post("/generate-itinerary", async (req, res) => {
//   console.log("🔥 Received POST /generate-itinerary");
//   const { destination, startDate, endDate, interests = [] } = req.body;
//   try {
//     const userPrompt = buildUserPrompt(
//       destination,
//       startDate,
//       endDate,
//       interests
//     );
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         { role: "system", content: systemPrompt },
//         { role: "user", content: userPrompt },
//       ],
//     });
//     const itinerary: ItineraryDay[] = JSON.parse(
//       response.choices[0].message.content
//     );
//     const enrichedItinerary: ItineraryDay[] = await Promise.all(
//       itinerary.map(async (day) => {
//         const enrichBlock = async (activities?: Activity[]) => {
//           if (!activities) return undefined;
//           return Promise.all(
//             activities.map(async (item) => {
//               const place = await fetchPlaceDetails(item.name, item.location);
//               console.log("🔍 Google result:", place);
//               return {
//                 ...item,
//                 googleAddress: place?.address || null,
//                 coordinates: place?.location || null,
//                 photoUrl: place?.photoUrl || null,
//                 googlePlaceId: place?.placeId || null,
//                 url: place?.url || null,
//               };
//             })
//           );
//         };
//         return {
//           day: day.day,
//           morning: await enrichBlock(day.morning),
//           afternoon: await enrichBlock(day.afternoon),
//           evening: await enrichBlock(day.evening),
//         };
//       })
//     );
//     res.json({ enrichedItinerary });
//   } catch (err) {
//     console.error("OpenAI API error:", err);
//     res.status(500).json({ error: "Failed to generate itinerary." });
//   }
// });
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map