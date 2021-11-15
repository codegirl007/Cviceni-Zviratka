import React from "react";
import { Animal } from "../Animal/Animal";

export const AnimalList = ({ data, chooseAnimal }) => {
  return (
    <div className="zvirata">
      {data &&
        data["zvirata"].map((animal, index) => (
          <Animal
            key={animal.nazev}
            index={index}
            foto={animal.foto}
            nazev={animal.nazev}
            nazevLatinsky={animal.nazevLatinsky}
            chooseAnimal={chooseAnimal}
          />
        ))}
    </div>
  );
};
