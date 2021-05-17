import { lazy } from "react";

const { default: MainPage } = require("pages/MainPage");
const ProjectPage = lazy(() => import("pages/ProjectPage"));

export const routesNames = {
  MAIN_PAGE: "/",
  PROJECT_PAGE: "/projects/:projectName",
};

const routes = {
  [routesNames.MAIN_PAGE]: () => <MainPage />,
  [routesNames.PROJECT_PAGE]: ({ projectName }) => (
    <ProjectPage projectName={projectName} />
  ),
};

export default routes;
