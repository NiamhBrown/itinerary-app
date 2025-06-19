## Table of Contents

- [About the Project](#ai-travel-planner)
- [Built with](#built-with)
- [Features & screenshots](#features)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Future improvements](#future-improvements)

# ⭐️ AI Travel Planner ⭐️

This is a full-stack travel itinerary generator that uses OpenAI to generate personalized travel plans based on your destination, dates, and interests. It enriches results using the Google Places API for real-world data like links and map locations, and displays the response as a user friendly itinerary.

## Built with

- OpenAI API
- Google Places API
- Node.js + Express + TypeScript (backend)
- React + TypeScript + Tailwind CSS (frontend)

---

## Features

- Generates a multi-day itinerary using [OpenAI API](https://platform.openai.com/docs/api-reference/chat)

- Enriches itinerary activities using [Google Maps Place Details API](https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place?utm_source=chatgpt.com)

- Responsive UI built with Tailwind CSS (Used Google Gemini to generare basic MVP design and layout)

![Form screenshot](/frontend/public/form_screenshot.png)
![Itinerary screenshot](/frontend/public/itinerary_screenshot.png)

## Project Structure

itinerary_app/

├── frontend/ # React app (UI)

├── backend/ # Express server (API + AI logic)

└── README.md

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/itinerary_app.git
cd itinerary_app
```

### 2. Install dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
```

### 3. Set up environment variables

This project uses external APIs, so you’ll need your own API keys for Google Places and OpenAI. Go to the /backend folder, create a .env file and add the following

```bash
# backend/.env
OPENAI_API_KEY=your-openai-key-here
GOOGLE_MAPS_API_KEY=your-google-maps-key-here
```

### 4. Run the app locally

```bash
cd backend
npm run dev
cd ../frontend
npm run dev
```

## Future Improvements

This is my MVP and a work in progress. I will be implementing:

- Secure login/sign up process for profile creation
- Ability to save itineraries
- Further API integrations (weather forecast for trip)
- Ability to export itinerary as pdf
