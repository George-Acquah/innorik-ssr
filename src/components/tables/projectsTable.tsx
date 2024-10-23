import { deleteEntity } from "@/lib/server-actions";
import { _IDummyProjects } from "@/services/data/dummy-data";
import TableComponent from "./tableComponent";
import { use } from "react";
import Pagination from "../shared/pagination";

const ProjectsTable = ({
  projectsPromise,
  pageSize
} : { projectsPromise: Promise<_IDummyProjects[]>, pageSize: number }) => {
  const projects = use(projectsPromise);

  const totalPages = Math.ceil(projects.length / pageSize);

  const columns = ["title", "description", "teamMembers", "isActive"]; // Specify columns to display
  return (
    <>
      <TableComponent
        data={projects}
        columnData={columns}
        entityType="project"
        deleteAction={deleteEntity}
      />
      <div className="mt-5 w-full">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
};

export default ProjectsTable;
