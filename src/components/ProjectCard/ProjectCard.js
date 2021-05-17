import Container from "components/Container/Container";
import LinkBtn from "components/LinkBtn/LinkBtn";
import React from "react";

import { ReactComponent as PageIcon } from "images/sm-icons/landing-page.svg";

import { ReactComponent as GitHub } from "images/sm-icons/011-github.svg";

import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { default: img } = require(`images/${project.img}`);

  return (
    <section className="project-card">
      <Container>
        <div className="project-card_wrapper">
          <figure className="project-card__figure">
            <img src={img} alt={project.name} className="project-card__img" />
          </figure>

          <article className="project-card__data">
            <h2 className="project-card__title">{project.name}</h2>

            <p className="project-card__descr">{project.description}</p>
            <div className="project-card__links">
              <div className="btn-wrapper">
                <LinkBtn
                  bg="#1DA1F2"
                  text="See page"
                  color="#fff"
                  Icon={PageIcon}
                  link={project.link}
                />
              </div>
              <div className="btn-wrapper">
                <LinkBtn
                  bg="black"
                  text="GitHub"
                  color="#fff"
                  Icon={GitHub}
                  link={project.github}
                />
              </div>
            </div>
          </article>
        </div>
        <article className="project-card__info">
          <div className="project-card__hurdles hurdles">
            <h4 className="project-card__list-title">Stacked 🤖</h4>
            <ul className="project-card__list">
              {project.hurdles.map((issue) => (
                <li key={issue}>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="project-card__upgrades upgrades">
            <h4 className="project-card__list-title">Learned 💪</h4>
            <ul className="project-card__list">
              {project.upgrades.map((up) => (
                <li key={up}>
                  <span>{up}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default ProjectCard;
