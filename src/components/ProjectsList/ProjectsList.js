import React from "react";

import projects from "projects.json";

import "./ProjectsList.css";
import { A } from "hookrouter";

const ProjectsList = () => {
  return (
    <ul className="project-list">
      {projects.map((project) => {
        const { default: img } = require(`images/${project.img}`);

        return (
          <li key={project.id} className="project-list__item">
            <A
              href={`/projects/${project.name}`}
              className="project-list__link"
            >
              <div className="project-list__backdrop backdrop">
                {" "}
                <h3 className="backdrop__header">{project.name}</h3>
                <p className="backdrop__descr">{project.description}</p>
              </div>
              <img
                src={img}
                className="project-list__img"
                alt="aviasales project"
              />
            </A>
          </li>
        );
      })}
      <li className="project-list__item project-list__item--white">
        <div className="project-list__coomming-soon">
          <p>More</p>
          <p>coming</p>
          <p>soon :)</p>
        </div>
      </li>
    </ul>
  );
};

export default ProjectsList;
