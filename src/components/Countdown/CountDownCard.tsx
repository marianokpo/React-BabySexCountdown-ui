import React from "react";

type Props = {
  label: string;
  number: number;
  cardRef: any;
};

const CountDownSquare = ({ label, number, cardRef }: Props) => {
  return (
    <div className="countdown__card">
      <div className="countdown__card__bg" ref={cardRef}>
        <div className="countdown__card__number" id={label}>
          {number}
        </div>
      </div>
      <div className="countdown__card__label">{label}</div>
    </div>
  );
};

export default CountDownSquare;
