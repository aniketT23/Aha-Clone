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

const images = [
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(1)%201.svg",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(11)%201.svg",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(13)%201.svg",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(12)%201.svg",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(10)%201.svg",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(8)%201.svg",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(2)%201.svg",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(3)%201.svg",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(4)%201.svg",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(9)%201.svg",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(7)%201.svg",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(6)%201.svg",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/aniketT23/Aha-Clone/2949deb07520d5b7ee5b7380f428e47f8f2e66a4/landing_page/public/Aha%20Orignals/0-2x3%20(5)%201.svg",
  },
  //
];

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

  /* redux */
  /* const dispatch = useDispatch();
  const { loading, data, err } = useSelector(
    (state) => state.image_data,
    shallowEqual
  );
  const [imgD, setImgD] = useState();

  useEffect(async () => {
    AhaO();
  }, []);

  const AhaO = async () => {
    dispatch(getData());
    try {
      const { data } = await axios.get(
        "http://localhost:2233/aha/ahaOriginals"
      );
      dispatch(DataSucess(data));
    } catch (err) {
      console.log(err);
      dispatch(DataErr(err));
    }
  }; */
  /* rreuqest */

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

        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 5 ? (
              <Box
                className="home"
                component="img"
                sx={{
                  display: "block",
                  maxHeight: "400px",
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}

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
      </AhaDiv>
    </div>
  );
};

/*
 */
