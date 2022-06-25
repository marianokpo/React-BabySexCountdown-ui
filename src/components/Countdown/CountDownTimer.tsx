import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import CountDownCard from "./CountDownCard";

type timedate = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (DateAsigned: Date) => {
  let year = new Date().getFullYear();
  //let difference = +new Date(`10/01/${year}`) - +new Date();
  let difference = +DateAsigned - +new Date();

  let timeLeft: timedate = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

type Props = {
  endDate?: Date;
  onTimeout?: () => void;
};

const CountDownTimer = ({
  endDate = new Date("2022-07-23T00:00:00"),
  onTimeout = () => {},
}: Props) => {
  //card ref
  const SecondsCardRef = useRef<any>(null);
  const MinutesCardRef = useRef<any>(null);
  const HoursCardRef = useRef<any>(null);
  const DaysCardRef = useRef<any>(null);
  //state
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setDays(timeLeft.days);
    setHours(timeLeft.hours);
    setMinutes(timeLeft.minutes);
    setSeconds(timeLeft.seconds);
    if (
      timeLeft.days <= 0 &&
      timeLeft.hours <= 0 &&
      timeLeft.minutes <= 0 &&
      timeLeft.seconds <= 0
    ) {
      onTimeout();
    }
  }, [timeLeft]);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => {
        SecondsCardRef.current.classList.toggle("rotate");
      }, 1000);
    }
    if (seconds === 0 && minutes > 0) {
      MinutesCardRef.current.classList.toggle("rotate");
    }
  }, [seconds, minutes]);

  useEffect(() => {
    if (minutes === 0 && hours > 0) {
      HoursCardRef.current.classList.toggle("rotate");
    }
  }, [minutes, hours]);

  useEffect(() => {
    if (hours === 0) {
      DaysCardRef.current.classList.toggle("rotate");
    }
  }, [hours, days]);

  return (
    <>
      {/*<div className="countdown__container">*/}
      <Grid
        container
        className="countdown__container"
        justifyContent="center"
        spacing={2}
      >
        <CountDownCard label="days" number={days} cardRef={DaysCardRef} />
        <CountDownCard label="hours" number={hours} cardRef={HoursCardRef} />
        <CountDownCard
          label="minutes"
          number={minutes}
          cardRef={MinutesCardRef}
        />
        <CountDownCard
          label="seconds"
          number={seconds}
          cardRef={SecondsCardRef}
        />
      </Grid>
      {/*</div>*/}
    </>
  );
};

export default CountDownTimer;
