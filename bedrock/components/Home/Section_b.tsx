import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Section_b = () => {
  return (
    <div className="flex flex-col md:gap-8 md:px-20 bg-white py-12">
      <div className="p-4 flex flex-col gap-3">
        <p className="text-xs md:text-base md:text-center">
          Unlease the Power of P2P Trading - Connect, Trade and Thrive
        </p>
        <h2 className="md:text-center text-xl md:text-2xl font-extrabold">
          Commodities P2P are available with Bedrock Exchange
        </h2>
        <p className="tex-sm md:text-center">
          Bedrock users can now buy and sell precious commodities such as gold,
          silver, irons and precious energy.
        </p>
      </div>
      <div className="grid md:grid-cols-4 p-4 gap-6">
        <div className="border shadow-xl p-4 flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-slate-50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">
          <div>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <p className="text-sm">
            <span className="font-bold">Direct Interaction :</span> With a P2P
            system for commodities trading, you can directly interact with other
            traders in the marketplace.
          </p>
        </div>
        <div className="border shadow-xl p-4 flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-slate-50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">
          <div>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <p className="text-sm">
            <span className="font-bold">Global Reach :</span> P2P commodity
            Direct Interaction : With a P2P system for commodities trading, you
            can directly interact with other traders in the marketplace.
          </p>
        </div>
        <div className="border shadow-xl p-4 flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-slate-50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">
          <div>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <p className="text-sm">
            <span className="font-bold">Increased Efficiency :</span> By
            bypassing traditional intermediaries, P2P commodity trading
            streamlines the process and reduces unnecessary delays.
          </p>
        </div>
        <div className="border shadow-xl p-4 flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-slate-50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">
          <div>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <p className="text-sm">
            <span className="font-bold">Variety of Commodities :</span> A P2P
            system for commodities trading offers access to a wide range of
            commodities, like, precious metals, agricultural products, energy
            resources etc.
          </p>
        </div>
        <div className="border shadow-xl p-4 flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-slate-50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">
          <div>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <p className="text-sm">
            <span className="font-bold">Enhanced Security :</span> P2P platforms
            implement robust security measures to protect the integrity of
            transactions and the confidentiality of user data
          </p>
        </div>
      </div>
    </div>
  );
};
