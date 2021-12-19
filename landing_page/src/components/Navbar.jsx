import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple, red } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import "./navbar.css";
import { positions } from "@mui/system";
import { useHistory } from "react-router-dom";

function Navbar() {
  const offset = 70;
  const history = useHistory();

  const [navbar, setNavbar] = React.useState(false);
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: red[500],
    borderRadius: "34px",
    " &:hover": {
      backgroundColor: red[500],
    },
  }));

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 75) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="left">
          <Link to="/" className="lNav">
            {" "}
            <img className="logo" src="../aha_logo1.svg" alt="aha_logo" />
          </Link>

          <ul style={{ listStyle: "none", display: "inline-flex" }}>
            <Link to="/" className="lNav">
              <li>Home</li>
            </Link>
            <li>Movie</li>
            <li>Shows </li>
            <li> Kids </li>
            <li> Aha </li>
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
            <Button
              onClick={() => {
                history.push("/login");
              }}
              variant="text"
            >
              Sign In
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
