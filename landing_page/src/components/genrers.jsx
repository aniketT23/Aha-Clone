import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Box from "@mui/material/Box";

import "./ahaOrignal.css";

import styled from "styled-components";

const images = [
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/geners/0-16x9%20(1)%201.png?raw=true",
    title: "Action",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/geners/0-16x9%20(2)%201.png?raw=true",
    title: "Romance",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/geners/0-16x9%20(3)%201.png?raw=true",
    title: "Comedy",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/geners/0-16x9%20(4)%201.png?raw=true",
    title: "Thriller",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/geners/0-16x9%20(5)%201.png?raw=true",
    title: "Sci-Fi",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/geners/0-16x9%20(6)%201.png?raw=true",
    title: "Family Show",
  },

  //
];

const AhaDiv = styled.div`
  display: flex;
  gap: 1%;
  position: relative;
  margin:auto;
  max-width:97%;

  &:hover #rightBTN {
    display: block;
    cursor:pointer;
    transform: translateX(50px);
  }

  &:hover #leftBTN {
    display: block;
    cursor:pointer;
    transform: translateX(-50px);

`;

export const Geners = ({ heading }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <h1 style={{ color: "#fff" }}>{heading}</h1>

      <AhaDiv>
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 10 ? (
              <div className="Gcont">
                <Box
                  className="home"
                  id="gBox"
                  component="img"
                  sx={{
                    display: "block",
                    maxHeight: "214px",
                    maxWidth: "214px",
                    overflow: "hidden",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <p style={{ color: "white" }}>{step.title}</p>
              </div>
            ) : null}
          </div>
        ))}
      </AhaDiv>
    </div>
  );
};

/*
 */
