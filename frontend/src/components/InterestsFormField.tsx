import { useState } from "react";
import { type UseFormSetValue } from "react-hook-form";
import type { TripFormInputs } from "../features/tripForm/types";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

interface InterestsInputProps {
  setValue: UseFormSetValue<TripFormInputs>;
  error?: string;
  placeholder?: string;
}

export const InterestsFormField = ({
  setValue,
  error,
  placeholder,
}: InterestsInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setInputValue(raw);

    const parsedArray = raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    setValue("interests", parsedArray);
  };

  return (
    <div>
      <label
        htmlFor="interests"
        className="block text-sm font-medium text-stone-700 mb-1"
      >
        Interests{" "}
        <span className="text-xs text-stone-500">(comma-separated)</span>
      </label>
      <div className="mt-1 relative rounded-lg shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <LoyaltyIcon />
        </div>
        <input
          type="text"
          name="interests"
          id="interests"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="block w-full px-4 py-2.5 pl-10 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-[#E94E1B] sm:text-sm placeholder-stone-400"
        />
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
};
