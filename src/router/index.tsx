import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/page";
import ExtendedError from "../components/extended-error";
import { RootLayout } from "../layout";
import { DashboardPage } from "@/pages";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="projects" element={<HomePage />}>
            <Route path="projects/:projectId" element={<HomePage />} />
          </Route>
          <Route path="teams" element={<HomePage />} />
          <Route path="tasks" element={<HomePage />} />
      </Route>
      <Route path="*" element={<ExtendedError statusCode={404} />} />
    </Routes>
  );
}
