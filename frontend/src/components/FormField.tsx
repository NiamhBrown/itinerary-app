import React from "react";
import type { UseFormRegister } from "react-hook-form";

interface FormFieldProps {
  required?: boolean;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  type?: string;
  placeholder?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  register,
  error,
  placeholder,
  required,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-stone-700 mb-1"
      >
        {label} {required && <span className="text-[#E94E1B]">*</span>}
      </label>
      <input
        {...register(name)}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className="mt-1 block w-full px-4 py-2.5 bg-white border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-[#E94E1B] sm:text-sm placeholder-stone-400"
      />
      {/* make sure errs not dislayed somehwere else too */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

// export default FormField;
