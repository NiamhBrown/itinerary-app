import { Request, Response } from "express";
import { itineraryRequestSchema } from "../schemas/itineraryRequestSchema.js";
import { generateAndEnrichItinerary } from "../services/itineraryServices.js";

const generateItinerary = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("🔥 Received POST itinerary/generate-itinerary");
  const parseResult = itineraryRequestSchema.safeParse(req.body);

  if (!parseResult.success) {
    res.status(400).json({
      error: "Invalid request body",
      details: parseResult.error.format(),
    });
    return;
  }
  try {
    const enrichedItinerary = await generateAndEnrichItinerary(
      parseResult.data
    );
    res.json({ enrichedItinerary });
  } catch (err) {
    console.error("Itinerary generation failed:", err);
    res.status(500).json({ error: "Failed to generate itinerary." });
  }
};

const ItineraryController = {
  generateItinerary: generateItinerary,
};

export default ItineraryController;
