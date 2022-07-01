import { Grid, Typography, CardMedia } from "@mui/material";
import CountDownTimer from "components/Countdown/CountDownTimer";
import React from "react";
import imageHombre from "../contents/images/hombre.png";
import imageMujer from "../contents/images/mujer.png";

type Props = {
  onEvent?: () => void;
};

export default function countdownPage({ onEvent = () => {} }: Props) {
  const DateBeby: Date = new Date("2022-07-01T19:00:00");

  return (
    <>
      <Grid container justifyContent="center" alignContent="center" xs={12}>
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
          Esperando saber el sexo del bebe.
        </Typography>
      </Grid>
      <Grid container justifyContent="center" xs={12} style={{ height: "70%" }}>
        <Grid container justifyContent="center" sm={4} xs={12}>
          {
            <img
              src={imageHombre}
              alt="imageHombre"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "40%",
              }}
            />
          }
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          sm={4}
          xs={12}
        >
          <CountDownTimer endDate={DateBeby} onTimeout={onEvent} />
        </Grid>
        <Grid container justifyContent="center" sm={4} xs={12}>
          {
            <img
              src={imageMujer}
              alt="imageMujer"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "40%",
              }}
            />
          }
        </Grid>
      </Grid>
    </>
  );
}
