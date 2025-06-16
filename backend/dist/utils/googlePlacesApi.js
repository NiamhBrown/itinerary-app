import axios from "axios";
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
export const fetchPlaceDetails = async (placeName, location) => {
    const url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";
    try {
        const params = {
            input: `${placeName} ${location}`,
            inputtype: "textquery",
            fields: "formatted_address,name,geometry,photos,place_id",
            key: GOOGLE_PLACES_API_KEY,
        };
        const response = await axios.get(url, { params });
        console.log("⭐️ HERE IS THE fetchPlaceDetails repsone:", response);
        // were assuming here that the 1st one returned is the correct one, mgiht need refining if not accurate
        const candidate = response.data.candidates?.[0];
        if (!candidate)
            return null;
        // if i wanna return more than 1 photo later for eg a carousel will have to update photoRef
        const photoRef = candidate.photos?.[0]?.photo_reference;
        const address = candidate.formatted_address;
        return {
            name: candidate.name,
            url: candidate.url,
            address: address,
            location: candidate.geometry?.location,
            directionsUrl: constructDirectionsUrl(address),
            placeId: candidate.place_id,
            photoUrl: photoRef
                ? constructPhotoUrl(photoRef, GOOGLE_PLACES_API_KEY)
                : null,
        };
    }
    catch (error) {
        console.error("Error fetching place details:", error.message);
        return null;
    }
};
export const constructPhotoUrl = (photoRef, apiKey, maxWidth = 400) => {
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photo_reference=${photoRef}&key=${apiKey}`;
};
export const constructDirectionsUrl = (address) => {
    const encodedAddress = encodeURIComponent(address || "");
    return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
};
//# sourceMappingURL=googlePlacesApi.js.map