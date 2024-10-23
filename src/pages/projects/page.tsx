import ProjectsTable from "@/components/tables/projectsTable";
import { mockFetchData } from "@/lib/fetcher";
import { projectsData } from "@/services/data/dummy-data";
import { Suspense } from "react";

export default function ProjectsPage({ searchParams }: _ISearchQuery) {
  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = Number(searchParams?.size) || 5;

  const projectDataPromise = mockFetchData(projectsData, 100);

  return (
    <div className="">
      <Suspense key={query + currentPage} fallback={<p>loading ...</p>}>
        <ProjectsTable
          projectsPromise={projectDataPromise}
          pageSize={pageSize}
        />
      </Suspense>
    </div>
  );
}
