import { faBank, faLock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Section_e = () => {
  return (
    <div className="px-4 py-20 gap-9 md:px-12 flex flex-col bg-white">
      <div className="flex flex-col">
        <p style={{ color: "#bc37c8" }} className="text-lg">
          HOW IT WORKS
        </p>
        <h2 className="text-3xl font-bold">Three ways to get started</h2>
      </div>
      <div className="grid grid-cols-1 p-4 md:p-7 gap-5 md:grid-cols-3">
        <div className="flex gap-8 p-4 flex-col rounded-xl">
          <FontAwesomeIcon
            style={{ color: "#bc37c8" }}
            className="text-8xl"
            icon={faUsers}
          />
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium">Create an Account</h3>
            <p className="font-thin text-base">
              Get started by inputting all your required details as an
              individual, corporate, or government body & submit them for
              verification.
            </p>
          </div>
        </div>
        <div className="flex gap-8 p-4 flex-col rounded-xl">
          <FontAwesomeIcon
            style={{ color: "#bc37c8" }}
            className="text-8xl"
            icon={faLock}
          />
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium">Verify your Account</h3>
            <p className="font-thin text-base">
              Your submitted credentials would then be subjected to verification
              before your account gets approved.
            </p>
          </div>
        </div>
        <div className="flex gap-8 p-4 flex-col rounded-xl">
          <FontAwesomeIcon
            style={{ color: "#bc37c8" }}
            className="text-8xl"
            icon={faBank}
          />
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium">Buy and Sell Crypto</h3>
            <p className="font-thin text-base">
              With your account approved, start selling, as a merchant, or
              buying, as a customer, your choice of financial products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
