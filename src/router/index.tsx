import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/page";
import ExtendedError from "../components/extended-error";
import { RootLayout } from "../layout";
import { DashboardPage, ProjectsPage, TeamsPage } from "@/pages";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsPage />}>
            <Route path="projects/:projectId" element={<HomePage />} />
          </Route>
          <Route path="teams" element={<TeamsPage />} />
          <Route path="tasks" element={<HomePage />} />
      </Route>
      <Route path="*" element={<ExtendedError statusCode={404} />} />
    </Routes>
  );
}
