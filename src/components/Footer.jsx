import React from "react";
import "./footer.css";

import Box from "@mui/material/Box";

function Footer() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#222123",
          color: "#fff",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <div className="boxfooter">
          <div className="footerapp">
            <img
              className="footerlogo"
              src="../ahafooter.png"
              alt="ahavecorlogo"
            />
            <div>
              <div className="textfooter">Connect With Us</div>
              <div className="socialmedia">
                <a href="https://www.instagram.com/ahavideoin/">
                  <img className="social-icons" src="../instagram.svg" alt="" />
                </a>
                <a href="https://www.facebook.com/ahavideoIN">
                  <img
                    className="social-icons"
                    src="../Facebookicon.png"
                    alt=""
                  />
                </a>
                <a href="https://twitter.com/AhavideoIN">
                  <img
                    className="social-icons"
                    src="../twitter-icon.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="appcontain">
              <div className="textfooter">Download aha mobile app</div>
              <div className="appbtn">
                <a
                  className="playstore"
                  href="https://play.google.com/store/apps/details?id=ahaflix.tv"
                >
                  <img
                    loading="lazy"
                    src="../googlePlaybanner.svg"
                    alt="Android icon"
                  />
                </a>
                <a
                  className="playstore"
                  href="https://apps.apple.com/in/app/aha-ott-movies-webseries/id1488739001"
                  aria-label="ios-icon"
                  class="ios-icon"
                >
                  <img loading="lazy" src="../iosbanner.svg" alt="IOS icon" />
                </a>
              </div>
              <div className="textfooter">
                <a href="mailto:support@aha.video">
                  Contact us: support@aha.video
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="watchmovie">
              Must Watch Movies
              <a
                className="moviename"
                href="https://www.aha.video/movie/krack/"
              >
                {" "}
                Krack
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/movie/naandi/"
              >
                {" "}
                Naandhi
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/movie/chaavu-kaburu-challaga/"
              >
                Chaavu Kaburu Challaga
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/movie/kanulu-kanulanu-dochayante/"
              >
                Kanulu Kanulanu Dochayante
              </a>
            </div>
          </div>
          <div>
            <div className="watchmovie">
              Popular Telugu Movies
              <a
                className="moviename"
                href="https://www.aha.video/movie/sulthan/"
              >
                {" "}
                Sulthan
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/movie/gaali-sampath/"
              >
                Gaali Sampath
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/movie/thellavarithe-guruvaram/"
              >
                Thellavarithe Guruvaram
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/movie/super-over/"
              >
                {" "}
                Super Over
              </a>
              <a className="moviename" href="https://www.aha.video/movie/mail/">
                {" "}
                Mail
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/movie/anagana-o-athidhi/"
              >
                Anaganaga O Athidhi
              </a>
            </div>
          </div>
          <div>
            <div className="watchmovie">
              {" "}
              Aha Originals
              <a
                className="moviename"
                href="https://www.aha.video/webseries/sin/"
              >
                Sin
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/webseries/mastis/"
              >
                Masti's
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/webseries/11th-hour/"
              >
                11th Hour
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/webseries/gs-2/"
              >
                Geetha Subramanyam 2020
              </a>
            </div>
          </div>
          <div>
            <div className="watchmovie">
              Genres{" "}
              <a
                className="moviename"
                href="https://www.aha.video/genre/drama/"
              >
                Drama
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/genre/comedy/"
              >
                Comedy
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/genre/action/"
              >
                Action
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/genre/romance/"
              >
                Romance
              </a>
            </div>
          </div>
          <div>
            <div className="watchmovie">
              Learn More
              <a
                className="moviename"
                href="https://www.aha.video/subscription/viewplans/"
              >
                View Plans
              </a>
              <a className="moviename" href="https://www.aha.video/about-us/">
                About Us
              </a>
              <a className="moviename" href="https://www.aha.video/faq/">
                FAQs / Help
              </a>
              <a
                className="moviename"
                href="https://www.aha.video/privacy-policy/"
              >
                Privacy Policy
              </a>
              <a className="moviename" href="https://www.aha.video/tc/">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <hr className="footerline" />

        <div className="footermetadata">
          <div className="metadataleft">
            {" "}
            © Copyright 2021 Arha Media and Broadcasting Pvt Ltd. All rights
            reserved.{" "}
          </div>
          <div className="metadataright">
            <a
              className="metadatarightcontainer"
              href="https://firstlight.ai/"
              aria-label="Firstlight"
            >
              <h5>Powered by</h5>
              <div>
                <img
                  className="firstflight"
                  loading="lazy"
                  src="../firstflightbanner1.svg"
                  alt="Firstlight icon"
                />
              </div>
            </a>
          </div>
        </div>
      </Box>
    </div>
  );
}
export default Footer;
