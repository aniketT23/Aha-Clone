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
import { DataErr, DataLoading, DataSucess, getData } from "./store/action";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

export const Top10 = ({ heading }) => {
  return (
    <div>
      <h1 style={{ color: "#fff" }}>{heading}</h1>
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
