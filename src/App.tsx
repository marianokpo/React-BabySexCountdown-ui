import { Grid } from "@mui/material";
import React, { useState } from "react";

import imageBackground from "contents/images/fondo-inconsútil-del-modelo-de-los-bebés.png";

import "./App.css";
import CountdownPage from "./Pages/countdownPage";
import GamePage from "./Pages/GamePage";

function App() {
  const [countPage, setCountPage] = useState<boolean>(true);

  return (
    <Grid
      container
      justifyContent="center"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {countPage && (
        <CountdownPage
          onEvent={() => {
            setCountPage(false);
          }}
        />
      )}
      {!countPage && <GamePage />}
    </Grid>
  );
}

export default App;
