import { cn } from "@/utils";
import iconMap from "@/utils/constants/root.constants";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { Typography } from "./typography";

interface _InputWithErrors {
  id: string;
  prependComponent?: React.ReactNode;
  errors: Record<string, string[] | undefined>;
}

export const InputErrors = ({
  errors,
  id,
  prependComponent = <ExclamationCircleIcon className="h-5 w-5 text-red-500" />,
}: _InputWithErrors) => {
  return (
    <>
      {errors && errors[id] ? (
        <div id={`${id}-error`} className="mt-2 text-sm text-red-500">
          {errors[id]?.map((error: string) => (
            <div className="flex space-x-2" key={error}>
              {prependComponent}
              <Typography variant="span" className="">{error}</Typography>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};


// Input Component
const Input : React.FC<
   _IDetail
  > = 
  ({
    id,
    className,
    value,
    options,
    disabled,
    placeholder,
    label,
    icon,
    errors,
    type,
    tooltip,
  }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const LinkIcon = icon ? iconMap[icon] : undefined;
    const err_bool = errors && (errors[id]!! as unknown as boolean);

    const renderSelect = () => {
      if (!options) {
        return null;
      }
      return (
        <select
          id={id}
          name={id}
          // icon={TagIcon}
          aria-describedby={`${id}-error`}
          aria-labelledby={`${id}`}
          defaultValue={value}
          className={cn(
            "block w-full bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-2",
            err_bool
              ? "border-2 border-red-500 focus-visible:ring-red-500 dark:focus-visible:ring-red-500"
              : "focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600",
            className
          )}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    };

    const renderTextarea = () => (
      <div className="relative">
        <textarea
          id={id}
          className={cn(
            "block w-full bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-2",
            err_bool
              ? "border-2 border-red-500 focus-visible:ring-red-500 dark:focus-visible:ring-red-500"
              : "focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600",
            className
          )}
          name={id}
          defaultValue={value}
          placeholder={placeholder}
          aria-describedby={`${id}-error`}
          aria-labelledby={`${id}`}
          autoComplete={"on"}
          disabled={disabled}
          rows={4}
        />
        {icon && LinkIcon && (
          <LinkIcon className="pointer-events-none absolute left-3 top-[26px]  h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        )}
      </div>
    );

    const renderInput = () => (
      <div className="relative">
        <input
          type={type}
          id={id}
          autoComplete="on"
          aria-label={id}
          name={id}
          defaultValue={value}
          placeholder={placeholder}
          aria-describedby={`${id}-error`}
          aria-labelledby={`${id}`}
          className={cn(
            `flex h-10 w-full bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm
            file:border-0 file:bg-transparent file:text-sm file:font-medium 
            placeholder:text-neutral-400 dark:placeholder:text-neutral-600 
            focus-visible:outline-none transition duration-300 ease-in-out
            disabled:cursor-not-allowed disabled:opacity-50`,
            err_bool
              ? "border-2 border-red-500 focus-visible:ring-red-500 dark:focus-visible:ring-red-500"
              : "focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600",
            className
          )}
        />
        {icon && LinkIcon && (
          <LinkIcon className="pointer-events-none absolute left-3 top-[26px]  h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        )}
      </div>
    );

    const renderDifferentInputs = () => {
      // Render input field based on type
      switch (type) {
        case "select":
          return renderSelect();
        case "textarea":
          return renderTextarea();
        default:
          return renderInput();
      }
    };

    return (
      <div className="">
        <label
          htmlFor={id}
          className={`mb-2 text-sm font-medium ${
            tooltip ? "flex items-center" : "block"
          } ${id === "email" ? "mt-1" : ""} `}
        >
          {label}
        </label>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative p-[2px] rounded-lg transition-all duration-300 ${
            isHovered
              ? err_bool
                ? "bg-red-500"
                : "bg-blue-500"
              : "bg-transparent"
          }`}
        >
          {renderDifferentInputs()}
        </div>
        {errors && (
          <InputErrors
            id={id}
            errors={errors}
            prependComponent={
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            }
          />
        )}
      </div>
    );
  };

Input.displayName = "Input";

export { Input };
