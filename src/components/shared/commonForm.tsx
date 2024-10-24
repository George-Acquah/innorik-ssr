// import { extractImagesFromData, groupFieldConfigs } from "@/utils/root.utils";
// import { Input } from "../ui/input";
// import React, { useActionState, useState } from "react";
// import { Typography } from "../ui";
// import { FormButton, FormSuccess } from "../ui/form";
// import { FileUpload } from "./fileUpload";

// export default function Forms<R>({
//   id,
//   type,
//   action,
//   actionType = "create",
//   formType,
//   fieldConfigs,
//   includeFiles,
//   data,
// }: _IForms) {
//   const initialState: _TActionResult<R> = {
//     type: undefined,
//     message: null,
//     errors: null,
//   };

//   const resolvedAction =
//     actionType === "create" ? action : action.bind(null, id);

//   const [state, dispatch, isPending] = useActionState(
//     resolvedAction,
//     initialState
//   );

//   const imageUrls = data ? extractImagesFromData(data) : [];

//   const [files, setFiles] = includeFiles
//     ? useState<File[]>([])
//     : [[], () => {}];

//   const handleFileUpload = (newFiles: File[]) => {
//     if (includeFiles) {
//       setFiles(newFiles);
//     }
//   };

//   const groupedFieldConfigs = groupFieldConfigs(fieldConfigs);

//   const label = actionType === "create" ? "Create" : "Update";
//   const text = actionType === "create" ? "Creating" : "Updating";

//   const renderSingleFields = (fields: _IDetail[]) => (
//     <>
//       {fields.map((field) => {
//         return (
//           <Input
//             key={field.id}
//             value={actionType === "update" && data ? data[field.id] : ""}
//             {...field}
//             errors={state?.type === "error" ? state?.errors : null}
//           />
//         );
//       })}
//     </>
//   );

//   const renderGroupedFields = () => (
//     <>
//       {Object.entries(groupedFieldConfigs).map(([title, fields]) => (
//         <React.Fragment key={title}>
//           <Typography variant="h3" className="mb-4">
//             {title}
//           </Typography>
//           <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
//             {renderSingleFields(fields)}
//           </div>
//         </React.Fragment>
//       ))}
//     </>
//   );

//   return (
//     <form action={dispatch} className={`rounded-md p-4 md:p-6`}>
//       {state?.type === "success" && <FormSuccess message={state?.message!} />}
//       <div className="">
//         {formType === "single"
//           ? renderSingleFields(fieldConfigs)
//           : renderGroupedFields()}
//       </div>

//       {includeFiles && (
//         <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg mt-4">
//           <FileUpload onChange={handleFileUpload} initialUrls={imageUrls} />
//         </div>
//       )}

//       <FormButton
//         text={`${text} ${type}`}
//         label={`${label} ${type}`}
//         pending={isPending}
//       />
//     </form>
//   );
// }
