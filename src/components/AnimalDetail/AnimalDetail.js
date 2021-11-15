import React from "react";
import "./AnimalDetail.css";

export const AnimalDetail = ({ selectedAnimal, data, zooData }) => {
  const selectedAnimalData =
    data &&
    data["zvirata"].filter((animal) => {
      return animal.nazev === selectedAnimal;
    });

  return (
    <div className="detail">
      <div className="detail__obsah">
        <div className="detail__hlavicka">
          <img
            className="detail__foto"
            src={data && selectedAnimalData[0].foto}
            alt="xxx"
          />
          <div className="detail__titulek">
            <h2 className="detail__nazev">
              <span>{data && selectedAnimalData[0].nazev}</span>
            </h2>
            <div className="detail__latinsky">
              <span>{data && selectedAnimalData[0].nazevLatinsky}</span>
            </div>
          </div>
        </div>

        <div className="detail__info">
          <p className="detail__popis">{data && selectedAnimalData[0].popis}</p>

          <div className="detail__udaje">
            <div className="detail__udaj">
              <h3>Domovina</h3>
              <p>{data && selectedAnimalData[0].domovina}</p>
            </div>
            <div className="detail__udaj">
              <h3>Biotop</h3>
              <p>{data && selectedAnimalData[0].biotop}</p>
            </div>
            <div className="detail__udaj">
              <h3>Potrava</h3>
              <p>{data && selectedAnimalData[0].potrava}</p>
            </div>
            <div className="detail__udaj">
              <h3>Velikost</h3>
              <p>{data && selectedAnimalData[0].velikost}</p>
            </div>
            <div className="detail__udaj">
              <h3>Výskyt v Zoo</h3>
              {zooData &&
                zooData["zoo"]
                  .filter(
                    (zoo) => data && selectedAnimalData[0].zoo.includes(zoo.id)
                  )
                  .map((element) => <p key={element.jmeno}>{element.jmeno}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
