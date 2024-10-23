import { deleteEntity } from "@/lib/server-actions";
import { _IDummyProjects, _IDummyTeam } from "@/services/data/dummy-data";
import TableComponent from "./tableComponent";
import { use } from "react";
import Pagination from "../shared/pagination";

const TeamsTable = ({
  teamsPromise,
  pageSize,
}: {
  teamsPromise: Promise<_IDummyTeam[]>;
  pageSize: number;
}) => {
  const teams = use(teamsPromise);

  const totalPages = Math.ceil(teams.length / pageSize);

  const columns = ["projects", "isActive"];
  const specialColumns: [string, string, string] = ["image", "name", "email"];
  return (
    <>
      <TableComponent
        data={teams}
        columnData={columns}
        specialColumns={specialColumns}
        specialFieldHeader="Team Info"
        entityType="team"
        deleteAction={deleteEntity}
      />
      <div className="mt-5 w-full">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
};

export default TeamsTable;

