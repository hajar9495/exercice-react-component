import React from "react";
import { Link } from "react-router-dom";

const Header = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="w-full h-10 bg-gray-600 text-white inline-flex justify-around align-middle text-base ">
          <p>
            <Link to="/">Accueil</Link>
          </p>
          <p>
            <Link to="/pageAnnexe">page annexe</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
