import { Grid, Typography, CardMedia } from "@mui/material";
import CountDownTimer from "components/Countdown/CountDownTimer";
import React from "react";
import imageBackground from "../contents/images/fondo-inconsútil-del-modelo-de-los-bebés.jpg";
import imageHombre from "../contents/images/hombre.jpg";
import imageMujer from "../contents/images/mujer.jpg";

type Props = {
  onEvent?: () => void;
};

export default function countdownPage({ onEvent = () => {} }: Props) {
  const DateBeby: Date = new Date("2022-07-01T22:00:00");

  return (
    <Grid
      container
      justifyContent="center"
      style={{
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
        backgroundImage: `url(${imageBackground})`,
      }}
    >
      <Grid container justifyContent="center" alignContent="center" xs={12}>
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          style={{
            fontWeight: "bold",
            color: "#1dc926",
            textShadow: "2px 2px #000000",
          }}
        >
          Esperando saber el sexo del Beby.
        </Typography>
      </Grid>
      <Grid container justifyContent="center" xs={12} style={{ height: "70%" }}>
        <Grid container justifyContent="center" xs={4}>
          {
            <img
              src={imageHombre}
              alt="imageHombre"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
              }}
            />
          }
        </Grid>
        <Grid container justifyContent="center" alignContent="center" xs={4}>
          <CountDownTimer endDate={DateBeby} onTimeout={onEvent} />
        </Grid>
        <Grid container justifyContent="center" xs={4}>
          {
            <img
              src={imageMujer}
              alt="imageMujer"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
              }}
            />
          }
        </Grid>
      </Grid>
    </Grid>
  );
}
