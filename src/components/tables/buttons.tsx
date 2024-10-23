import { cn } from "@/utils";
import { EyeIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useFormStatus } from "react-dom";
import { NavLink } from "react-router-dom";
import { SvgSpinner } from "../ui/icons";
import { Button, Typography } from "../ui";

export function EditBtn({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  return (
    <NavLink to={href} aria-label={href}>
      <button
        aria-label={href}
        className={cn(
          "w-7 h-7 flex items-center justify-center rounded-full text-primary-foreground bg-blue-200 dark:bg-blue-300",
          className
        )}
      >
        <EyeIcon className="w-4 h-4 font-black" />
      </button>
    </NavLink>
  );
}

export function DeleteBtn({ id, label, action, className, path }: _IActionBtn & { className?: string }) {
  const deleteAction = action.bind(null, id, path ?? "");

  return (
    <form action={deleteAction} className={cn("", className)}>
      <DeleteClientBtn label={label} />
    </form>
  );
}

export function DeleteClientBtn({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="destructive"
      size="lg"
      aria-disabled={pending}
      className="rounded-full"
      type="submit"
    >
      {pending ? (
        <div className="flex items-center">
          <SvgSpinner className=" text-white w-4 h-4" fill="white" />
        </div>
      ) : (
        <>
          <Typography variant="span" className="text-white">{label}</Typography>
        </>
      )}
    </Button>
  );
}
