import React from "react";

import BackdropText from "components/BackdropText/BackdropText";
import Container from "components/Container/Container";
import TechnologiesList from "components/TechologiesList/TechnologiesList";

import "./ToolsSection.css";

const ToolsSection = () => {
  return (
    // TODO:исправить верстку технологической секции
    <Container>
      <section className="technologies" id="tools">
        <BackdropText upperText="tools" lowerText="that I use" />

        <TechnologiesList />

        <div className="technologies-description">
          <h2 className="technologies-description__title section-header">
            technologies
          </h2>
          <p className="technologies-description__text">
            I am the Full-stack (MERN-stack) developer, with solid knowledge in
            Redux, Mongoose and Router-dom. Staying open for the new
            technologies and experience, I am permanently improving already
            aquired skills.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default ToolsSection;
