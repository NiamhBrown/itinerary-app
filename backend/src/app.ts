import cors from "cors";
import express from "express";
import itineraryRoutes from "./routes/itineraryRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} ${req.url}`);
  next();
});
app.use("/itinerary", itineraryRoutes);

export default app;
