import Container from "components/Container/Container";
import socialMedias from "helpers/SM-list";
import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <Container>
        <div className="footer-wrapper">
          <span className="footer-logo logo">OK</span>
          <ul className="social-medias">
            {socialMedias.map((media) => {
              const img = require(`images/${media.img}`);

              return (
                <li key={media.name} className="social-medias__item">
                  <a
                    href={media.link}
                    target="_blank"
                    rel="noreferrer"
                    className="social-medias__link"
                  >
                    <img
                      src={img.default}
                      alt={media.name}
                      className="social-medias__img"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
