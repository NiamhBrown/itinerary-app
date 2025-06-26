import express from "express";
import ItineraryController from "../controllers/itineraryController.js";
const router = express.Router();

router.post("/generate-itinerary", ItineraryController.generateItinerary);

export default router;
