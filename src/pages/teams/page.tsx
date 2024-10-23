import TeamsTable from "@/components/tables/teamsTable";
import { mockFetchData } from "@/lib/fetcher";
import { teamsData } from "@/services/data/dummy-data";
import { Suspense } from "react";

export default function TeamsPage({ searchParams }: _ISearchQuery) {
  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = Number(searchParams?.size) || 5;

  const teamsDataPromise = mockFetchData(
    teamsData,
    100
  );

  return (
    <div className="">
      <Suspense key={query + currentPage} fallback={<p>loading ...</p>}>
        <TeamsTable teamsPromise={teamsDataPromise} pageSize={pageSize} />
      </Suspense>
    </div>
  );
}
