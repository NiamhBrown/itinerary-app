import { useForm } from "react-hook-form";
import type { ItineraryItem, TripFormInputs } from "./types";
import { tripFormSchema } from "./tripFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Itinerary } from "../itineraryPlanner/Itinerary";
import { dummyItinerary } from "../../assets/dummyData";

export const TripForm = () => {
  // update type once i know the repsonse better
  const [itinerary, setItinerary] = useState<ItineraryItem[] | null>(
    dummyItinerary
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TripFormInputs>({
    resolver: zodResolver(tripFormSchema),
  });

  //move this to file later
  const onSubmit = async (data: TripFormInputs) => {
    const res = await fetch("http://localhost:3000/generate-itinerary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        interests: data.interests
          ?.split(",")
          .map((i) => i.trim())
          .filter(Boolean),
      }),
    });

    const resData = await res.json();
    console.log("resdata:", resData);
    console.log("Itinerary:", resData.itinerary);
    console.log("Itinerary raw:", resData.itinerary);
    console.log("Type of itinerary:", typeof resData.itinerary);
    console.log("Is array?", Array.isArray(resData.itinerary));
    setItinerary(resData.itinerary);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-xl shadow"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Destination
          </label>
          <input
            {...register("destination")}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
          {errors.destination && (
            <p className="text-red-500 text-sm">{errors.destination.message}</p>
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              {...register("startDate")}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm">{errors.startDate.message}</p>
            )}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              {...register("endDate")}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
            {errors.endDate && (
              <p className="text-red-500 text-sm">{errors.endDate.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of People
          </label>
          <input
            type="number"
            {...register("peopleCount")}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
          {errors.peopleCount && (
            <p className="text-red-500 text-sm">{errors.peopleCount.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Interests (optional, comma-separated)
          </label>
          <input
            {...register("interests")}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isSubmitting ? "Generating..." : "Generate Itinerary"}
        </button>
      </form>
      {itinerary && <Itinerary itinerary={itinerary} />}
    </>
  );
};
