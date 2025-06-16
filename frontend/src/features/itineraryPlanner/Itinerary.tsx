import type { ItineraryItem } from "../tripForm/types";

interface Props {
  itinerary: ItineraryItem[];
}
export const Itinerary = ({ itinerary }: Props) => {
  return (
    <div className="space-y-6">
      {itinerary.map((item, index) => (
        <div
          key={index}
          className="p-4 rounded-lg border border-gray-300 shadow-sm"
        >
          <h2 className="text-xl font-bold mb-2">{item.day}</h2>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-500">📍 {item.location}</p>
          <p className="text-sm text-gray-500">🕒 {item.startTime}</p>

          {item.link && (
            <p className="mt-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Learn more
              </a>
            </p>
          )}

          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt={item.name}
              className="mt-3 rounded-lg w-full max-w-md"
            />
          )}
        </div>
      ))}
    </div>
  );
};
