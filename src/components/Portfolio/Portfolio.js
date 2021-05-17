import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import useIntersection from "hooks/useIntersection";

import Container from "components/Container/Container";

import "./Portfolio.css";
import ProjectsList from "components/ProjectsList/ProjectsList";
import BackdropText from "components/BackdropText/BackdropText";

const Portfolio = () => {
  const ref = useRef();
  const isListVisible = useIntersection(ref, "0px");

  return (
    <section className="portfolio" id="portfolio">
      <Container>
        <div
          className="projects-wraper
        "
        >
          <BackdropText upperText="my" lowerText="portfolio" left />
          <h2 ref={ref} className="section-header portfolio-header">
            portfolio
          </h2>

          <CSSTransition
            in={isListVisible}
            appear={true}
            timeout={500}
            classNames="projectAnimation"
            mountOnEnter
          >
            <ProjectsList />
          </CSSTransition>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
