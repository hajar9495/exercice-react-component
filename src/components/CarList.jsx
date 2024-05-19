import React from "react";

let cars = ["Mercedes", "BMW", "Audi", "Volkswagen"];

const CarList = () => {
  return (
    <>
      <div>
        <ul>
          {cars.map((car, index) => {
            return (
              <>
                <li key={index}>{car}</li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CarList;
