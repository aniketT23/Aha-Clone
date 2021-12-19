import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./ahaOrignal.css";
import { maxHeight } from "@mui/system";
import styled from "styled-components";

import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

export const AhaOrignal = ({ heading }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [image, setImage] = useState();
  const history = useHistory();

  console.log("active", activeStep);

  useEffect(async () => {
    AhaO();
  }, []);

  const AhaO = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:2233/aha/ahaOriginals"
      );
      setImage(data);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const filterFuc = () => {};

  return (
    <div>
      <h1 style={{ color: "#fff" }}>{heading}</h1>

      <AhaDiv>
        <Button
          id="rightBTN"
          size="large"
          onClick={handleBack}
          disabled={activeStep == 0}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
        {image?.map((step, index) => (
          <div
            key={step.id}
            className="demo"
            onClick={() => {
              history.push({ pathname: "/watchpage", state: { id: step.id } });
            }}
          >
            {Math.abs(activeStep - index) <= 4 ? (
              <>
                <Box
                  className="home"
                  component="img"
                  sx={{
                    display: "block",
                    Height: "300px",
                    Width: "56px",
                    overflow: "hidden",
                  }}
                  src={step.imageurl}
                ></Box>
                <h3 style={{ color: "white" }}>{step.title}</h3>
              </>
            ) : null}
          </div>
        ))}

        <Button
          id="leftBTN"
          size="small"
          onClick={handleNext}
          disabled={activeStep === 14 - 3}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      </AhaDiv>
    </div>
  );
};

/*
 */
