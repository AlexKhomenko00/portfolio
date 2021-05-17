import Container from "components/Container/Container";
import React from "react";
import { CSSTransition } from "react-transition-group";

import MainImg from "../../images/avatar-web.png";

import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <section className="profile main-profile">
      <Container>
        <CSSTransition
          in={true}
          timeout={600}
          appear={true}
          classNames="animation"
        >
          <article id="main" className="profile-card">
            <div className="main-img__container">
              <img
                className="main-img"
                width="828"
                height="1497"
                src={MainImg}
                alt="Oleksandr Khomenko"
              />
            </div>
            <article className="profile-info">
              <p className="title profile-info__title">Full-stack Developer</p>
              <h2 className="greeting profile-info__greeting">
                hi, my name is Oleksandr Khomenko
              </h2>
              <p className="about">
                I am a young and ambitious person, fond of coding and creating
                beautiful modern web-applications.
              </p>
            </article>
          </article>
        </CSSTransition>
      </Container>
    </section>
  );
};

export default ProfileCard;
