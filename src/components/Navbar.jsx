import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple, red } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";

import "./navbar.css";

function Navbar() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: red[500],
    
  }));
  return (
    <div>
      <nav className="nav">
        <div className="left">
          <img className="logo" src="../aha_logo1.svg" alt="aha_logo" />

          <ul style={{ listStyle: "none", display: "inline-flex" }}>
            <li> Home </li>
            <li>Movie</li>
            <li>Shows </li>
            <li> Kids </li>
            <li> My aha </li>
          </ul>
        </div>
        <div className="right">
          <SearchIcon />
          <GTranslateIcon />
          <ColorButton>
            <b>Subscribe Now</b>
          </ColorButton>
          <div>
            <PersonIcon />
            <Button variant="text">Sign In</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
