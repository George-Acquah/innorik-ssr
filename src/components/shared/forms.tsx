import { createAction } from "@/lib/server-actions";
import Forms from "./commonForm";
import { addProjectFields, addTeamFields } from "@/services/data/forms.data";

interface _ITableFormProps {
  type: "create" | "update";
  data?: any;
  id?: string;
}

export const ProjectsForm: React.FC<_ITableFormProps> = ({ type, data, id }) => {
  return (
    <Forms
      action={createAction}
      actionType={type}
      data={data}
      id={type === "create" ? undefined : id}
      type="Project"
      formType="single"
      fieldConfigs={addProjectFields(["Member 1", "Member 2", "Member 3"])}
    />
  );
};


export const TeamsForm: React.FC<_ITableFormProps> = ({
  type,
  data,
  id,
}) => {
  return (
    <Forms
      action={createAction}
      actionType={type}
      data={data}
      id={type === "create" ? undefined : id}
      type="Team"
      formType="single"
      fieldConfigs={addTeamFields(["Project 1", "Project 2", "Project 3"])}
    />
  );
};