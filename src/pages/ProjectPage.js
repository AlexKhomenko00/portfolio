import React from "react";

import projects from "projects.json";

import ProjectCard from "components/ProjectCard/ProjectCard";

const ProjectPage = ({ projectName }) => {
  const project = projects.find(({ name }) => name === projectName);

  return <ProjectCard project={project} />;
};

export default ProjectPage;
