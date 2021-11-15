import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { AnimalDetail } from "./components/AnimalDetail/AnimalDetail";
import { AnimalList } from "./components/AnimalList/AnimalList";
import { Search } from "./components/Search/Search";
import "./style.css";

const App = () => {
  const [data, setData] = useState(null);
  const [zooData, setZooData] = useState(null);
  const [selectedAnimal, setSelectedAnimal] = useState("Slon africký");
  const [search, setSearch] = useState("");

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

  const chooseAnimal = (chosenAnimal) => {
    setSelectedAnimal(chosenAnimal);
  };

  const searchAnimal = (searched) => {
    setSearch(searched);
  };

  return (
    <>
      <h1>Zvířátka v ZOO</h1>
      <Search searchAnimal={searchAnimal} searchValue={search} />
      <div className="container">
        <AnimalList data={data} chooseAnimal={chooseAnimal} search={search} />
        <AnimalDetail
          selectedAnimal={selectedAnimal}
          data={data}
          zooData={zooData}
        />
      </div>
    </>
  );
};

render(<App />, document.querySelector("#app"));
