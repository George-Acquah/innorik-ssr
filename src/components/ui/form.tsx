import { cn } from "@/utils";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

type _TFormButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  text: string;
  label: string;
  pending: boolean;
  className?: string;
};

const FormButton = React.forwardRef<HTMLButtonElement, _TFormButtonProps>(
  ({ className, text, pending, label, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-disabled={pending}
        type="submit"
        className={cn(
          "aria-disabled:pointer-events-none rounded w-full bg-blue-500 text-white py-2 mt-4 aria-disabled:bg-opacity-70",
          className
        )}
        {...props}
      >
        {pending ? (
          <div className="flex items-center justify-between capitalize">
            <p className="">{text}...</p>
            {/* <SvgSpinner className="text-white" color="white" /> */}
          </div>
        ) : (
          `${label}`
        )}
      </button>
    );
  }
);
FormButton.displayName = "FormButton";

const FormSuccess = ({ message }: { message: string }) => {
  if (!message) return;
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export { FormButton, FormSuccess };
