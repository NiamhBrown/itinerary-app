import type {
  EnrichedActivity,
  EnrichedItineraryDay,
} from "../features/tripForm/types";
import { ActivityItem } from "./ActivityItem";

interface ItineraryDayCardProps {
  dailyItinerary: EnrichedItineraryDay;
}

const TimeOfDayEmoji: React.FC<{ time: string }> = ({ time }) => {
  if (time.toLowerCase() === "morning")
    return (
      <span role="img" aria-label="Morning">
        ☀️
      </span>
    );
  if (time.toLowerCase() === "afternoon")
    return (
      <span role="img" aria-label="Afternoon">
        🌤️
      </span>
    );
  if (time.toLowerCase() === "evening")
    return (
      <span role="img" aria-label="Evening">
        🌙
      </span>
    );
  return null;
};

const renderActivities = (
  activities: EnrichedActivity[],
  timeOfDay: string
) => {
  if (!activities || activities.length === 0) {
    return (
      <p className="text-sm text-stone-500 italic px-4">
        No specific activities planned. Time for spontaneous adventures!
      </p>
    );
  }
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <ActivityItem key={`${timeOfDay}-${index}`} activity={activity} />
      ))}
    </div>
  );
};
export const ItineraryDayCard = ({ dailyItinerary }: ItineraryDayCardProps) => {
  const { day, morning, afternoon, evening } = dailyItinerary;

  return (
    <>
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-stone-200/80 transition-all duration-300 hover:shadow-xl">
        <div className="p-5 sm:p-6 bg-[#f48db4] bg-opacity-10">
          <h3
            className="text-2xl font-semibold text-[#007944] flex items-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {day}
          </h3>
        </div>
        <div className="divide-y divide-stone-200">
          {(morning && morning.length > 0) ||
          (afternoon && afternoon.length > 0) ||
          (evening && evening.length > 0) ? (
            <>
              {morning && morning.length > 0 && (
                <div className="py-4 sm:py-5">
                  <h4 className="text-lg font-medium text-stone-700 px-4 sm:px-6 mb-3 flex items-center">
                    <TimeOfDayEmoji time="Morning" />{" "}
                    <span className="ml-2">Morning</span>
                  </h4>
                  {renderActivities(morning, "morning")}
                </div>
              )}
              {afternoon && afternoon.length > 0 && (
                <div className="py-4 sm:py-5">
                  <h4 className="text-lg font-medium text-stone-700 px-4 sm:px-6 mb-3 flex items-center">
                    <TimeOfDayEmoji time="Afternoon" />{" "}
                    <span className="ml-2">Afternoon</span>
                  </h4>
                  {renderActivities(afternoon, "afternoon")}
                </div>
              )}
              {evening && evening.length > 0 && (
                <div className="py-4 sm:py-5">
                  <h4 className="text-lg font-medium text-stone-700 px-4 sm:px-6 mb-3 flex items-center">
                    <TimeOfDayEmoji time="Evening" />{" "}
                    <span className="ml-2">Evening</span>
                  </h4>
                  {renderActivities(evening, "evening")}
                </div>
              )}
            </>
          ) : (
            <p className="text-sm text-stone-500 italic p-4 sm:p-6">
              Looks like a free day! Enjoy the spontaneity or add some
              activities.
            </p>
          )}
        </div>
      </div>
    </>
  );
};
