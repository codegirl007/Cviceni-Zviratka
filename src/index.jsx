import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { AnimalDetail } from "./components/AnimalDetail/AnimalDetail";
import { AnimalList } from "./components/AnimalList/AnimalList";
import "./style.css";

const App = () => {
  const [data, setData] = useState(null);
  const [zooData, setZooData] = useState(null);
  const [selectedAnimalIndex, setSelectedAnimalIndex] = useState(0);

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zoo.json")
      .then((response) => response.json())
      .then((data) => setZooData(data));
  }, []);

  const chooseAnimal = (animalIndex) => {
    setSelectedAnimalIndex(animalIndex);
  };

  return (
    <>
      <h1>Zvířátka v ZOO</h1>
      <div className="container">
        <AnimalList data={data} chooseAnimal={chooseAnimal} />
        <AnimalDetail
          selectedAnimalIndex={selectedAnimalIndex}
          data={data}
          zooData={zooData}
        />
      </div>
    </>
  );
};

render(<App />, document.querySelector("#app"));
