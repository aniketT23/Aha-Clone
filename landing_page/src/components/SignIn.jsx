import React from "react";
import Box from "@mui/material/Box";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import TextField from "@mui/material/TextField";
import "./signin.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  borderRadius: 34,
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
function Login() {
  return (
    <div>
      <div className="backgroundlogin">
        <nav className="nav">
          <img src="../signinaha.png" alt="" />
        </nav>
        <Box className="loginbox">
          <div className="loginboxnavbar">
            <KeyboardArrowLeftIcon className="leftarrow" />
            <span className="lets">
              <p>LET'S GET Started</p>
            </span>
          </div>
          <Box>
            <form>
              <label className="mobile">Mobile number</label>

              <Box className="mobilefield">
                <div className="country">
                  <img src="../india.png" alt="" />
                  <span>+91</span>
                </div>

                <div className="line"></div>
                <TextField className="mobilenum" />
              </Box>
              <ColorButton className="btn" variant="contained">
                Contained
              </ColorButton>

              <div className="otheropt">
                <div className="option">Or, Use one of the following options</div>
                <div className="optionbtn">
                <div className="email">
                 <img className="emailimg" src="../email.png" alt="" />
                 <div className="emailtxt">Email</div>
                </div>
                <div className="email">
                 <img className="emailimg" src="../facebooklogin.png" alt="" />
                 <div className="emailtxt">Facebook</div>
                </div>
                <div className="email">
                 <img className="emailimg" src="../googlelogin.png" alt="" />
                 <div className="emailtxt">Google</div>
                </div>

                </div>
              </div>
            </form>
          </Box>
        </Box>
      </div>
    </div>
  );
}
export default Login;
