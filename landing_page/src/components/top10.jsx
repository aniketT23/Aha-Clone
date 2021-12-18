import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./ahaOrignal.css";
import { maxHeight } from "@mui/system";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import axios from "axios";

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

export const Top10 = ({ heading }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [image, setImage] = useState();

  useEffect(async () => {
    AhaO();
  }, []);

  const AhaO = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:2233/aha/ahaOriginals"
      );
      setImage(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 style={{ color: "#fff" }}>{heading}</h1>
      <AhaDiv>
        {image?.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 10 ? (
              <>
                <Box
                  className="home"
                  component="img"
                  sx={{
                    display: "block",
                    maxHeight: "182px",
                    maxWidth: "122px",
                    overflow: "hidden",
                  }}
                  src={step.imageurl}
                ></Box>
                <h3 style={{ color: "white" }}>{step.title}</h3>
              </>
            ) : null}
          </div>
        ))}
      </AhaDiv>
    </div>
  );
};

/*     <Button
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

<Button
          id="leftBTN"
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button> */
