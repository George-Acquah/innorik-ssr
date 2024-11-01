import FormModal from "../shared/form-modal";

interface _IBlogAction<T = _IBaseSignature> {
  type: "create" | "update" | "delete";
  trigger?: React.ReactNode;
  id?: string;
  data?: T;
  action?: any;
}
const BlogActions = ({
  type,
  trigger,
  id,
  data,
}: _IBlogAction) => {
  return (
    <div className="flex justify-center items-center">
      <FormModal
        type={type}
        data={data}
        id={id}
        // schema={CreateItemSchema}
        // className="rounded-md w-fit h-fit "
        trigger={trigger}
      />
    </div>
  );
};

export default BlogActions;
