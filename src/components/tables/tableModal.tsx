"use client";

import { lazy, Suspense, useCallback } from "react";
import {
  ClipboardDocumentIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { ModalBody, ModalContent, ModalTrigger } from "../ui/modal";
import { Typography } from "../ui/typography";
import { DeleteBtn } from "./buttons";
import { cn } from "@/utils";

interface _ITableModal<T = _TableRowType, R = _TEntityType>
  extends _ITableBase<R> {
  type: "create" | "update" | "delete";
  id?: string;
  trigger?: React.ReactNode;
  data?: T;
  deleteAction?: (id: string, path: string) => Promise<any>;
}

// Loading component for lazy-loaded forms
const Loading = () => (
  <div className="min-h-[30vh] flex flex-col justify-center items-center">
    <Typography variant="h2">Loading...</Typography>
    <Typography variant="p">Please wait</Typography>
  </div>
);

const ProjectsForm = lazy(() =>
  import("../shared/forms").then((mod) => ({ default: mod.ProjectsForm }))
);
const TeamsForm = lazy(
  () => import("../shared/forms").then((mod) => ({ default: mod.TeamsForm })),
);

const forms: {
  [key: string]: (
    type: "create" | "update",
    data?: any,
    id?: string
  ) => JSX.Element;
} = {
  project: (type, data, id) => <ProjectsForm type={type} data={data} id={id} />,
  team: (type, data, id) => <TeamsForm type={type} data={data} id={id} />,
};

// FormModal Component with generic typing
const FormModal = ({
  entityType,
  type,
  data,
  trigger,
  id,
  deleteAction,
}: _ITableModal<_TableRowType, keyof typeof forms>) => {
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
            All data will be lost. Are you sure you want to delete this{" "}
            {entityType}?
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
      const FormComponent = forms[entityType]; // Get the correct form component dynamically
      if (FormComponent) {
        return (
          <Suspense key={`${entityType}-${type}-${id}`} fallback={<Loading />}>
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
  }, [entityType, type, data, id]);

  return (
    <>
      <ModalTrigger
        modalKey={`${String(entityType)}-${type}-${id}`}
        className={cn(
          `${
            trigger ? "" : `${bgColor} ${size}`
          }  p-2 flex items-center justify-center rounded-full`,
        )}
      >
        {trigger ?? renderIcon()}
      </ModalTrigger>
      <ModalBody
        modalKey={`${String(entityType)}-${type}-${id}`}
        className={`md:max-w-[50%] 2xl:max-w-[40%] ${
          type === "delete" ? "md:min-h-[20%] h-10rem" : ""
        }`}
      >
        <ModalContent className="md:px-1">{renderForm()}</ModalContent>
      </ModalBody>
    </>
  );
};

export default FormModal;
