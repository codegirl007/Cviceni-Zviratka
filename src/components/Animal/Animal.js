import React from "react";
import "./Animal.css";

export const Animal = ({ foto, nazev, nazevLatinsky, chooseAnimal }) => {
  const showAnimalDetail = () => {
    chooseAnimal(nazev);
  };

  return (
    <div className="zvire" onClick={showAnimalDetail}>
      <div className="zvire__foto">
        <img src={foto} alt="slon" />
      </div>
      <div className="zvire__popis">
        <div className="zvire__nazev">{nazev}</div>
        <div className="zvire__latinsky">{nazevLatinsky}</div>
      </div>
    </div>
  );
};
