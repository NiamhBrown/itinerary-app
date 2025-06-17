import "./utils/loadEnv.js";
import express from "express";
import cors from "cors";
import itineraryRoutes from "./routes/itinerary.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/", itineraryRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
