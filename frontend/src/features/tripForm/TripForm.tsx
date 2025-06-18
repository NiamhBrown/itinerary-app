import { useForm } from "react-hook-form";
import { itineraryRequestSchema } from "./tripFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Itinerary } from "../itineraryPlanner/Itinerary";
// import { dummyItinerary } from "../../assets/dummyData";
import type { ItineraryResponse, TripFormInputs } from "./types";
import LoadingSpinner from "../../components/LoadingSpinner";
import { FormField } from "../../components/FormField";
import { InterestsFormField } from "../../components/InterestsFormField";

export const TripForm = () => {
  // const [itinerary, setItinerary] = useState<ItineraryResponse>(dummyItinerary);
  const [itinerary, setItinerary] = useState<ItineraryResponse>();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<TripFormInputs>({
    resolver: zodResolver(itineraryRequestSchema),
  });

  const onSubmit = async (data: TripFormInputs) => {
    console.log("📝 Form data:", data);
    try {
      const res = await fetch("http://localhost:3000/generate-itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      console.log("✅ Response data:", resData);
      setItinerary(resData);
    } catch (error) {
      console.error("❌ Submission error:", error);
    }
  };
  return (
    <>
      <section
        id="plan-trip"
        className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 sm:p-8 mb-12 border border-stone-200"
      >
        <h2
          className="text-3xl font-bold text-center text-stone-800 mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Plan Your Next Adventure
        </h2>
        <p className="text-center text-stone-600 mb-8">
          Tell us about your dream trip, and we'll craft a personalized
          itinerary just for you!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Destination"
              name="destination"
              type="text"
              register={register}
              error={errors.destination?.message}
              placeholder="e.g., Paris, France"
              required
            />
            <InterestsFormField
              placeholder="e.g, Food, Partying, Walking"
              setValue={setValue}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Start Date"
              name="startDate"
              type="date"
              register={register}
              error={errors.startDate?.message}
              required
            />
            <FormField
              label="End Date"
              name="endDate"
              type="date"
              register={register}
              error={errors.endDate?.message}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center bg-[#E94E1B] hover:bg-[#d04518] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:ring-opacity-50"
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner className="w-5 h-5 mr-2 animate-spin" />
                Generating Itinerary...
              </>
            ) : (
              <>Generate My Itinerary</>
            )}
          </button>
        </form>
      </section>
      {isLoading && !itinerary && (
        <div className="text-center py-10">
          <LoadingSpinner className="w-12 h-12 mx-auto text-[#E94E1B]" />
          <p className="mt-4 text-lg text-stone-600">
            Creating your itinerary... this might take a moment!
          </p>
        </div>
      )}
      {itinerary && <Itinerary itinerary={itinerary} />}

      {/* this section isnt showing up currently */}
      {!isLoading && !itinerary && !errors && (
        <div className="text-center py-10 text-stone-500">
          <p className="text-xl">Your adventure awaits!</p>
          <p>Fill out the form above to get started.</p>
        </div>
      )}
    </>
  );
};
