import React from "react";
import { Container, Title, Description, Button } from "./start";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/catalog");
  };

  return (
    <Container>
      <Title>Welcome.</Title>
      <Description>
        This application will help you quickly choose a car for your trip.{" "}
        <br />
        Click next to continue.
      </Description>
      <Button onClick={handleContinue}>
        <span>Continue</span>
      </Button>
    </Container>
  );
};
export default Start;
