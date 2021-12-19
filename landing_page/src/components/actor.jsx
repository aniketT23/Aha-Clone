import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import "./ahaOrignal.css";

import styled from "styled-components";

const images = [
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2046.png?raw=true",
    title: "Action",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2047.png?raw=true",
    title: "Romance",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2049.png?raw=true",
    title: "Comedy",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2050.png?raw=true",
    title: "Comedy",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2051.png?raw=true",
    title: "Comedy",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2052.png?raw=true",
    title: "Comedy",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2053.png?raw=true",
    title: "Comedy",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2054.png?raw=true",
    title: "Comedy",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2055.png?raw=true",
    title: "Comedy",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2056.png?raw=true",
    title: "Comedy",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2057.png?raw=true",
    title: "Comedy",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2058.png?raw=true",
    title: "Comedy",
  },
  {
    imgPath:
      "https://github.com/aniketT23/Aha-Clone/blob/Aniket/landing_page/public/actors/Frame%2059.png?raw=true",
    title: "Comedy",
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

export const Actors = ({ heading }) => {
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
              <Box
                className="home"
                component="img"
                id="actors"
                sx={{
                  display: "block",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AhaDiv>
    </div>
  );
};

/*
 */
