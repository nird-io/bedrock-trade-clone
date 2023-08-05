import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex py-20 gap-8 md:px-12 flex-col bg-slate-800 items-center text-slate-50 text-base">
      <p className="text-center p-4 max-w-md">
        We are a startup fintech company and as such we are working on getting
        the needed licenses to operate in USA , Europe and Africa
      </p>
      <div className="grid grid-cols-1 p-4 md:grid-cols-3">
        <div className="flex flex-col p-4">
          <h3 className="text-lg font-bold">Bedrock Exchange Incorporated</h3>
          <p>
            Buy or sell cryptocurrencies, fiat currencies, precious metals,
            agricultural commodities, precious energies, stocks, bonds through
            our secure and transparent platform.
          </p>
        </div>
        <div className="flex flex-col p-4">
          <h3 className="text-lg font-bold">QUICK LINKS</h3>
          <p>GET STARTED ABOUT US CONTACT US</p>
        </div>
        <div className="flex flex-col p-4">
          <h3 className="text-lg font-bold">CONTACT INFO</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <span>+19803611860</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
