import React from "react";
import { Animal } from "../Animal/Animal";

export const AnimalList = ({ data, chooseAnimal, search }) => {
  return (
    <div className="zvirata">
      {data &&
        data["zvirata"]
          .filter((filteredAnimal) => {
            return (
              filteredAnimal.nazev
                .toLowerCase()
                .startsWith(search.toLowerCase()) ||
              filteredAnimal.nazevLatinsky
                .toLowerCase()
                .startsWith(search.toLowerCase())
            );
          })
          .map((animal) => (
            <Animal
              key={animal.nazev}
              foto={animal.foto}
              nazev={animal.nazev}
              nazevLatinsky={animal.nazevLatinsky}
              chooseAnimal={chooseAnimal}
            />
          ))}
    </div>
  );
};
