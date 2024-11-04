import { lazy, Suspense, useCallback } from "react";
import {
  ClipboardDocumentIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { ModalBody, ModalContent, ModalTrigger } from "../ui/modal";
import { Typography } from "../ui/typography";
import { cn } from "@/utils";
import { DeleteBtn } from "./buttons";

interface _ITableModal<T = _IBaseSignature> {
  type: "create" | "update" | "delete";
  id?: string;
  trigger?: React.ReactNode;
  data?: T;
  deleteAction?: (id: string, path: string) => Promise<any>;
}

const BlogsForm = lazy(() =>
  import("../blogs/blog-form").then((mod) => ({ default: mod.BlogsForm }))
);

const Loading = () => (
  <div className="min-h-[30vh] flex flex-col justify-center items-center">
    <Typography variant="h2">Loading...</Typography>
    <Typography variant="p">Please wait</Typography>
  </div>
);

const forms: {
  [key: string]: (
    type: "create" | "update",
    data?: any,
    id?: string
  ) => JSX.Element;
} = {
  blog: (type, data, id) => <BlogsForm type={type} data={data} id={id} />,
};

const FormModal = ({
  type,
  data,
  trigger,
  id,
  deleteAction,
}: _ITableModal) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-blue-200 dark:bg-blue-300"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-neutral-400 dark:bg-zinc-500";

  // Icon rendering logic
  const renderIcon = () => {
    switch (type) {
      case "create":
        return <PlusIcon className="w-6 h-6 text-white" />;
      case "update":
        return <PencilSquareIcon className="w-6 h-6 text-white" />;
      case "delete":
        return <TrashIcon className="w-6 h-6 text-white" />;
      default:
        return null;
    }
  };

  // Form rendering logic
  const renderForm = useCallback(() => {
    if (type === "delete" && id && deleteAction) {
      return (
        <div className="p-4 flex flex-col gap-4">
          <span className="text-center font-medium">
            All data will be lost. Are you sure you want to delete this blog?
          </span>
          <DeleteBtn
            action={deleteAction}
            label="Delete"
            id={id}
            className="flex justify-center items-center"
          />
        </div>
      );
    }

    if (type === "create" || type === "update") {
      const FormComponent = forms["blog"]; // Get the correct form component dynamically
      if (FormComponent) {
        return (
          <Suspense key={`blog-${type}-${id}`} fallback={<Loading />}>
            {FormComponent(type, data, id)}
          </Suspense>
        );
      }
      return (
        <div className="min-h-[30vh] flex flex-col justify-center items-center">
          <Typography variant="h2">Form not found!</Typography>
          <Typography variant="p">
            Please close this form and try again
          </Typography>
          <ClipboardDocumentIcon className="w-12 h-12 mt-8" />
        </div>
      );
    }

    return <h1>Invalid Action</h1>;
  }, [type, data, id]);

  return (
    <>
      <ModalTrigger
        modalKey={`blog-${type}-${id}`}
        className={cn(
          `${
            trigger ? "" : `${bgColor} ${size}`
          }  p-2 flex items-center justify-center rounded-full`
        )}
      >
        {trigger ?? renderIcon()}
      </ModalTrigger>
      <ModalBody
        modalKey={`blog-${type}-${id}`}
        className={`md:max-w-[35%] ${
          type === "delete" ? "md:min-h-[20%] h-10rem" : ""
        }`}
      >
        <ModalContent className="md:px-1">{renderForm()}</ModalContent>
      </ModalBody>
    </>
  );
};

export default FormModal;
