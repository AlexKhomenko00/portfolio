import React from "react";
import { A } from "hookrouter";
import { routesNames } from "routes";
import Container from "components/Container/Container";
import ErrorSVG from "components/Error/ErrorSVG/ErrorSVG";
import ErrorMessage from "components/Error/ErrorMessage/ErrorMessage";

const sectionStyles = {
  textAlign: "center",
  height: "84vh",
  paddingTop: "50px",
};

const linkStyles = {
  color: "var(--secondary-text-color)",
  textDecoration: "none",
  fontSize: "28px",
  fontWeight: "700",
};

const ErrorPage = () => {
  return (
    <section className="error-page" style={sectionStyles}>
      <Container>
        <ErrorSVG />
        <ErrorMessage />
        <A href={routesNames.MAIN_PAGE} style={linkStyles}>
          Go back
        </A>
      </Container>
    </section>
  );
};

export default ErrorPage;
