import React from "react";
import Header from "../components/Header";
import CarList from "../components/CarList";

const PageAnnexe = () => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="text-center">
          <h1>page ANNEXE</h1>
          <CarList></CarList>
        </div>
      </div>
    </>
  );
};

export default PageAnnexe;
