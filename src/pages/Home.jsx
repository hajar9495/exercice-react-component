import React from "react";
import Header from "../components/Header";
import CarList from "../components/CarList";

const Home = () => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="text-center">
          <h1>page HOME</h1>
          <CarList></CarList>
        </div>
      </div>
    </>
  );
};

export default Home;
