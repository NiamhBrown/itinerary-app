import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const testFetch = async () => {
    // const placeName = "La Pedrera Barcelona";
    const placeName = "Sky Garden";
    const location = "20 Fenchurch Street, London";
    const url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";
    const params = {
        input: placeName,
        location,
        inputtype: "textquery",
        fields: "formatted_address,name,geometry,photos,place_id",
        key: GOOGLE_PLACES_API_KEY,
    };
    const response = await axios.get(url, { params });
    console.log("Raw result:", JSON.stringify(response.data, null, 2));
};
testFetch().catch(console.error);
//# sourceMappingURL=test-google.js.map