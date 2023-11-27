import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import profileLogo from "./assets/images/profile.jpg";
import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InfoIcon from "@mui/icons-material/Info";
import DehazeIcon from "@mui/icons-material/Dehaze";
import {
  GameController,
  Headphones,
  AirplaneTilt,
  LinuxLogo,
  Coffee,
  SoccerBall,
  FilmReel,
  Money,
} from "@phosphor-icons/react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={profileLogo} className="profile" alt="Vite logo" />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          mt={-22}
          sx={{
            backgroundColor: "#242424",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignSelf: "flex-end",
            borderRadius: 4,
            height: 400,
            width: 500,
          }}
        >
          <Box>
            <h1>Kevlan Betto</h1>
          </Box>
          <Box mt={-6}>
            <h4>Software Engineer</h4>
          </Box>
          <Box
            mt={2}
            mb={4}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <GitHubIcon sx={{ fontSize: 40 }} />
            <LinkedInIcon sx={{ fontSize: 40 }} />
            <WhatsAppIcon sx={{ fontSize: 40 }} />
          </Box>
        </Box>
      </div>

      <div className="aboutMe">
        <Box>
          <InfoIcon sx={{ fontSize: 30 }} />
        </Box>
        <Box>
          <h2 style={{ margin: 0 }}>About me</h2>
          <h3 style={{ margin: -20, color: "#535bf2" }}>_______</h3>
          <h3 style={{ margin: -20, color: "#535bf2" }}>___</h3>
        </Box>
        <p>
          Hello! i'm Betto. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed ac augue vel turpis fermentum tincidunt. Nullam nec felis eu
          nulla cursus tincidunt. Suspendisse potenti. Aenean eget quam ac elit
          hendrerit gravida. Ut eu diam vel quam pulvinar congue.
        </p>
        <div className="details">
          <Box
            sx={{
              display: "flex",
              width: "50%",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                padding: 1,
              }}
            >
              <h3>Personal Details</h3>
            </Box>
            <Box className="detailsTitleH5">
              <h5 className="text1">Birthdate</h5>
              <h5 className="text2">11-07-1997</h5>
            </Box>
            <Box className="detailsTitleH5">
              <h5 className="text1">Phone</h5>
              <h5 className="text2">+55 92 98598-6599</h5>
            </Box>
            <Box className="detailsTitleH5">
              <h5 className="text1">Email</h5>
              <h5 className="text2">kevlan.santos@gmail.com</h5>
            </Box>
            <Box className="detailsTitleH5">
              <h5 className="text1">Address</h5>
              <h5 className="text2">Manaus, BR</h5>
            </Box>
            <Box className="detailsTitleH5">
              <h5 className="text1">Job Status</h5>
              <h5 className="textAlert">FREELANCE</h5>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "50%",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                padding: 1,
              }}
            >
              <h3>My Interests</h3>
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#242424",
                width: "80px",
                height: "60px",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 2,
                padding: 1,
                flexWrap: "wrap",
                margin: 1,
              }}
            >
              <GameController size={34} color="#fcfcfc" weight="fill" />
              <h5 style={{ marginTop: 0, width: "100%" }}>GAMES</h5>
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#242424",
                width: "80px",
                height: "60px",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 2,
                padding: 1,
                flexWrap: "wrap",
                margin: 1,
              }}
            >
              <Headphones size={34} color="#fcfcfc" weight="fill" />
              <h5 style={{ marginTop: 0, width: "100%" }}>MUSIC</h5>
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#242424",
                width: "80px",
                height: "60px",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 2,
                padding: 1,
                flexWrap: "wrap",
                margin: 1,
              }}
            >
              <AirplaneTilt size={34} color="#fcfcfc" weight="fill" />
              <h5 style={{ marginTop: 0, width: "100%" }}>TRAVEL</h5>
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#242424",
                width: "80px",
                height: "60px",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 2,
                padding: 1,
                flexWrap: "wrap",
                margin: 1,
              }}
            >
              <LinuxLogo size={34} color="#fcfcfc" weight="fill" />

              <h5 style={{ marginTop: 0, width: "100%" }}>LINUX</h5>
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#242424",
                width: "80px",
                height: "60px",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 2,
                padding: 1,
                flexWrap: "wrap",
                margin: 1,
              }}
            >
              <FilmReel size={34} color="#fcfcfc" weight="fill" />
              <h5 style={{ marginTop: 0, width: "100%" }}>CINEMA</h5>
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#242424",
                width: "80px",
                height: "60px",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 2,
                padding: 1,
                flexWrap: "wrap",
                margin: 1,
              }}
            >
              <Coffee size={34} color="#fcfcfc" weight="fill" />
              <h5 style={{ marginTop: 0, width: "100%" }}>COFFEE</h5>
            </Box>
          </Box>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count)}>
            Download CV
          </button>
        </div>
      </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  */}
    </>
  );
}

export default App;
