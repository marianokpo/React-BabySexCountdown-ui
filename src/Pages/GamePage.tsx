import { Grid, Typography } from "@mui/material";
import React from "react";
import Game from "../components/Game/Game";
import imageHombre from "../contents/images/hombre.png";
import imageMujer from "../contents/images/mujer.png";

export default function GamePage() {
  return (
    <>
      <Grid
        container
        item
        justifyContent="center"
        alignContent="center"
        xs={12}
      >
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          style={{
            fontWeight: "bold",
            color: "#1dc926",
            textShadow: "2px 2px #000000",
            textAlign: "center",
          }}
        >
          Ayudanos a abrir el cofre para saber que es.
        </Typography>
      </Grid>
      <Grid
        container
        item
        justifyContent="center"
        xs={12}
        style={{ height: "70%" }}
      >
        <Grid
          container
          item
          justifyContent="center"
          alignContent="center"
          xs={12}
          sm={12}
          style={{ /*height: "80%",*/ paddingTop: "40px" }}
        >
          <Game />
        </Grid>
      </Grid>
    </>
  );
}
