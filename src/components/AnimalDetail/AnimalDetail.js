import React from "react";
import "./AnimalDetail.css";

export const AnimalDetail = ({ selectedAnimalIndex, data, zooData }) => {
  return (
    <div className="detail">
      <div className="detail__obsah">
        <div className="detail__hlavicka">
          <img
            className="detail__foto"
            src={data && data["zvirata"][selectedAnimalIndex].foto}
            alt="xxx"
          />
          <div className="detail__titulek">
            <h2 className="detail__nazev">
              <span>{data && data["zvirata"][selectedAnimalIndex].nazev}</span>
            </h2>
            <div className="detail__latinsky">
              <span>
                {data && data["zvirata"][selectedAnimalIndex].nazevLatinsky}
              </span>
            </div>
          </div>
        </div>

        <div className="detail__info">
          <p className="detail__popis">
            {data && data["zvirata"][selectedAnimalIndex].popis}
          </p>

          <div className="detail__udaje">
            <div className="detail__udaj">
              <h3>Domovina</h3>
              <p>{data && data["zvirata"][selectedAnimalIndex].domovina}</p>
            </div>
            <div className="detail__udaj">
              <h3>Biotop</h3>
              <p>{data && data["zvirata"][selectedAnimalIndex].biotop}</p>
            </div>
            <div className="detail__udaj">
              <h3>Potrava</h3>
              <p>{data && data["zvirata"][selectedAnimalIndex].potrava}</p>
            </div>
            <div className="detail__udaj">
              <h3>Velikost</h3>
              <p>{data && data["zvirata"][selectedAnimalIndex].velikost}</p>
            </div>
            <div className="detail__udaj">
              <h3>Výskyt v Zoo</h3>
              {zooData &&
                zooData["zoo"]
                  .filter(
                    (animal) =>
                      data &&
                      data["zvirata"][selectedAnimalIndex].zoo.includes(
                        animal.id
                      )
                  )
                  .map((element) => <p key={element.jmeno}>{element.jmeno}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
