import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./landing.css";
import "./GlobalCssMobileStepper.css";
import { maxHeight } from "@mui/system";
import styled from "styled-components";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://image-resizer-cloud-api.akamaized.net/image/4C9B1580-1200-43C3-B3A6-CEA64843BA04/0-3x1.jpg?width=1536",
  },
  {
    imgPath:
      "https://image-resizer-cloud-api.akamaized.net/image/BB669245-176F-44ED-960E-6253FB9EEBD8/0-3x1.jpg?width=1536",
  },
  {
    imgPath:
      "https://image-resizer-cloud-api.akamaized.net/image/AC6A19D6-7C8A-43B7-9EDE-2C58B514EBD8/0-3x1.jpg?width=1536",
  },
  {
    imgPath:
      "https://image-resizer-cloud-api.akamaized.net/image/5A8AAB23-17F7-4E49-A299-8D422EA8117B/0-3x1.jpg?width=1536",
  },
  {
    imgPath:
      "https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-3x1.jpg?width=1536",
  },
  {
    imgPath:
      "https://image-resizer-cloud-api.akamaized.net/image/2BDDC2F4-DD53-4879-A3B3-A69DAE5800F1/0-3x1.jpg?width=1536",
  },
  {
    imgPath:
      "https://image-resizer-cloud-api.akamaized.net/image/6B0D8C15-6BF9-4B85-A5B9-511462B75BA3/0-3x1.jpg?width=1536",
  },
  {
    imgPath:
      "https://image-resizer-cloud-api.akamaized.net/image/312DE66B-1E81-411B-A02C-5DAA12EB9BA5/0-3x1.jpg?width=1536",
  },
  {
    imgPath:
      "https://image-resizer-cloud-api.akamaized.net/image/4B436E0D-B442-4647-9014-5D46B0B3DF37/0-3x1.jpg?width=1536",
  },
  {
    imgPath:
      "https://image-resizer-cloud-api.akamaized.net/image/CFC5AEB9-EC19-4835-87D5-272F81456467/0-3x1.jpg?width=1536",
  },
  {
    imgPath:
      "https://image-resizer-cloud-api.akamaized.net/image/4B3B52DC-0B29-4C28-A0AB-1819FEB3B27C/0-3x1.jpg?width=1536",
  },
  {
    imgPath:
      "https://image-resizer-cloud-api.akamaized.net/image/AFF3C4B0-B088-494D-865E-3ED37E433DAF/0-3x1.jpg?width=1536",
  },
];

const BtnAnimation = styled.div`
  min-width: 100%;
  display: flex;
  position: relative;

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

function Landing() {
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
    <Box sx={{ maxWidth: "100%", maxHeight: 480, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <BtnAnimation className="home_top">
                <Button
                  id="rightBTN"
                  size="large"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>

                <Box
                  component="img"
                  sx={{
                    height: 480,
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",

                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}

                  // ---

                  // ----
                />
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
                </Button>
              </BtnAnimation>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className="go"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  );
}

export default Landing;
