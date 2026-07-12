import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../hoc/Layout.jsx";
import { HomePage } from "../components/modules/pages/HomePage.jsx";
import { ProjectDetailsPage } from "../components/modules/pages/ProjectDetailsPage.jsx";
import { ProjectsPage } from "../components/modules/pages/ProjectsPage.jsx";
import { NotFoundPage } from "../components/modules/pages/NotFoundPage.jsx";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
