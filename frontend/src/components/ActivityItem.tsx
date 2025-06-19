import type { EnrichedActivity } from "../features/tripForm/types";
import { GlobeAltIcon } from "./icons/GlobeAltIcon";
import { MapPinIcon } from "./icons/MapPinIcon";

interface ActivityItemProps {
  activity: EnrichedActivity;
}

export const ActivityItem = ({ activity }: ActivityItemProps) => {
  return (
    <div className="px-4 sm:px-6 py-3 bg-stone-50/50 rounded-lg mx-2 sm:mx-4 border border-stone-200/70 shadow-sm">
      <h5 className="text-md font-semibold text-[#f48db4]">{activity.title}</h5>
      <p className="text-lg font-medium text-[#007944] mb-1">{activity.name}</p>
      {activity.photoUrl && activity.photoUrl !== "null" && (
        <img
          src={activity.photoUrl}
          alt={activity.name}
          className="w-full h-48 object-cover rounded-md my-2 shadow-sm"
          onError={(e) => (e.currentTarget.style.display = "none")} // Hide if image fails to load
        />
      )}
      <p className="text-sm text-[#007944] mb-2">{activity.description}</p>

      {activity.location && activity.location !== "null" && (
        <div className="flex items-start text-xs text-[#007944] mb-1">
          <MapPinIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#f48db4]" />
          <span>
            {activity.location}{" "}
            {activity.googleAddress &&
              activity.googleAddress !== "null" &&
              `(${activity.googleAddress})`}
          </span>
        </div>
      )}
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
        {activity.googleMapsUrl && activity.googleMapsUrl !== "null" && (
          <a
            href={activity.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#f48db4] hover:text-[#d04518] font-medium flex items-center transition-colors"
          >
            <MapPinIcon className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#f48db4]" />{" "}
            Directions
          </a>
        )}
        {activity.website && activity.website !== "null" && (
          <a
            href={activity.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#f48db4] hover:text-[#d04518] font-medium flex items-center transition-colors"
          >
            <GlobeAltIcon className="w-3.5 h-3.5 mr-1" /> Website
          </a>
        )}
      </div>
    </div>
  );
};
