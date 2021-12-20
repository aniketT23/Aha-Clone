import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./ahaOrignal.css";
import styled from "styled-components";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const AhaDiv = styled.div`
  display: flex;
  gap: 1%;
  position: relative;
  margin:auto;
  max-width:96%;

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

export const MostWatched = ({ heading }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [image, setImage] = useState();
  const history = useHistory();

  useEffect(async () => {
    AhaO();
  }, []);

  const AhaO = async () => {
    try {
      const { data } = await axios.get(
        "https://mighty-dawn-13827.herokuapp.com/aha/most_watched"
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
          <div
            key={step._id}
            onClick={() => {
              history.push({ pathname: "/watchpage", state: { id: step._id } });
            }}
          >
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
