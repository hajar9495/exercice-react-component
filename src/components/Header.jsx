import React from "react";
import { Link } from "react-router-dom";

const Header = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="w-full h-12 bg-gray-600 text-white text-base flex justify-evenly items-center">
          <p>
            <Link to="/" className="uppercase">
              Accueil
            </Link>
          </p>
          <p>
            <Link to="/page-annexe" className="uppercase">
              page annexe
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
