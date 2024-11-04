import { addBlogFields } from "@/services/data/blogs.data";
import Forms from "../shared/commonForm";
import { createBlog } from "@/lib/server-actions";

interface _ITableFormProps {
  type: "create" | "update";
  data?: any;
  id?: string;
}

export const BlogsForm: React.FC<_ITableFormProps> = ({ type, data, id }) => {
  return (
    <Forms
      action={type === 'create' ? createBlog : undefined}
      actionType={type}
      data={data}
      id={type === "create" ? undefined : id}
      type="Blog"
      formType="single"
      fieldConfigs={addBlogFields()}
    />
  );
};
