import { cn } from "@/utils";
import { useState, FC, useRef, lazy, Suspense } from "react";
import iconMap from "@/utils/constants/root.constants";
import { Typography } from "./typography";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const BlogEditor = lazy(() => import("../blogs/blog-editor"));

interface _InputWithErrors {
  id: string;
  prependComponent?: React.ReactNode;
  errors: Record<string, string[] | undefined>;
}

export const InputErrors = ({
  errors,
  id,
  prependComponent = <ExclamationCircleIcon className="w-5 text-red-500" />,
}: _InputWithErrors) => {
  return (
    <>
      {errors && errors[id] ? (
        <div id={`${id}-error`} className="mt-2 text-sm text-red-500">
          {errors[id]?.map((error: string) => (
            <div className="flex space-x-2" key={error}>
              {prependComponent}
              <Typography variant="span" className="">
                {error}
              </Typography>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};
const Input: FC<_IDetail> = ({
  id,
  className,
  value,
  options,
  onChange,
  radio,
  // disabled,
  placeholder,
  label,
  icon,
  errors,
  type,
  tooltip,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const quillRef = useRef(null);
  const LinkIcon = icon ? iconMap[icon] : undefined;
  const err_bool = errors && (errors[id]!! as unknown as boolean);

  const renderSelect = () => {
    if (!options) {
      return null;
    }
    return (
      <div className="relative">
        <select
          id={id}
          name={id}
          // icon={TagIcon}
          aria-describedby={`${id}-error`}
          aria-labelledby={`${id}`}
          defaultValue={value}
          className={cn(
            "block w-full bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-2",
            icon ? "px-3 pl-8" : "px-3",
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
        {icon && LinkIcon && (
          <LinkIcon className="pointer-events-none absolute left-3 top-[20px]  h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        )}
      </div>
    );
  };

  const renderRadio = () => {
    if (!radio) {
      return null;
    }
    return (
      <div className="relative">
        <div className="flex gap-4">
          {radio.map((item) => (
            <div
              key={`${item.id}-${item.value}`}
              className="flex items-center gap-2"
            >
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
                  `flex  text-black dark:text-white py-2 text-sm 
            focus-visible:outline-none transition duration-300 ease-in-out
            disabled:cursor-not-allowed disabled:opacity-50`,
                  err_bool
                    ? "border-2 border-red-500 focus-visible:ring-red-500 dark:focus-visible:ring-red-500"
                    : "focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600",
                  className
                )}
              />
              <label
                htmlFor={id}
                className={`text-sm font-medium ${
                  tooltip ? "flex items-center" : "block"
                } ${id === "email" ? "mt-1" : ""} `}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
        {icon && LinkIcon && (
          <LinkIcon className="pointer-events-none absolute left-3 top-[20px]  h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        )}
      </div>
    );
  };

  const renderTextarea = () => (
    <div className="relative">
      <textarea
        id={id}
        className={cn(
          "block w-full bg-gray-50 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-2",
          icon ? "px-3 pl-8" : "px-3",
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
        rows={4}
      />
      {icon && LinkIcon && (
        <LinkIcon className="pointer-events-none absolute left-3 top-[20px]  h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
          `flex h-10 w-full bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md  py-2 text-sm
            file:border-0 file:bg-transparent file:text-sm file:font-medium 
            placeholder:text-neutral-400 dark:placeholder:text-neutral-600 
            focus-visible:outline-none transition duration-300 ease-in-out
            disabled:cursor-not-allowed disabled:opacity-50`,
          icon ? "px-3 pl-8" : "px-3",
          err_bool
            ? "border-2 border-red-500 focus-visible:ring-red-500 dark:focus-visible:ring-red-500"
            : "focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600",
          className
        )}
      />
      {icon && LinkIcon && (
        <LinkIcon className="pointer-events-none absolute left-3 top-[20px]  h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
      )}
    </div>
  );

  const renderQuill = () => (
    <div className="relative">
      <Typography variant="p" className="mb-2 text-sm font-medium ">
        Blog Content
      </Typography>
      <Suspense fallback={<p>Loading quilll component...</p>}>
        <BlogEditor
          quillRef={quillRef}
          defaultValue={placeholder}
          onTextChange={(delta) => {
            if (onChange) onChange(delta);
          }}
          readOnly={false}
        />
      </Suspense>
    </div>
  );

  const renderDifferentInputs = () => {
    switch (type) {
      case "select":
        return renderSelect();
      case "textarea":
        return renderTextarea();
      case "radio":
        return renderRadio();
      case "quill":
        return renderQuill();
      default:
        return renderInput();
    }
  };

  return (
    <div className="">
      {label && (
        <label
          htmlFor={id}
          className={`mb-2 text-sm font-medium ${
            tooltip ? "flex items-center" : "block"
          } ${id === "email" ? "mt-1" : ""} `}
        >
          {label}
        </label>
      )}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative p-[2px] rounded-lg transition-all duration-300 ${
          (radio || type) === "quill"
            ? ""
            : isHovered
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
