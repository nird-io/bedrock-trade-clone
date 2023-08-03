import Image from "next/image";
import React from "react";

// images
import gridImages from "@/public/media/grid_phone.png";
import vaultImage from "@/public/media/vault.png";

export const Section_d = () => {
  return (
    <div className="px-4 md:px-12 py-20 bg-slate-50">
      <h3 className="text-3xl font-bold px-4">
        You have nothing to worry about with <br />
        <span style={{ color: "#bc37c8" }} className="font-bold">
          Bedrock Exchange
        </span>
      </h3>
      <div className="py-4 flex flex-col md:flex-row gap-4">
        <div className="shadow-lg py-4 md:py-5 bg-white rounded-lg">
          <h3 className="text-2xl text-slate-500 font-bold px-4 md:px-8">
            Secured Funds
          </h3>
          <p className="px-4 md:px-8">
            Our system is secure as we adhere to strict KYC protocols & other
            tight authentication measures to eliminate any fraudulent offers by
            fake merchants on Bedrock Exchange.
          </p>
          <div className="flex max-h-96 justify-end items-end">
            <Image className="flex" src={gridImages} alt="img" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="h-full shadow-lg py-4 px-6 md:py-5 md:px-10 bg-white rounded-lg">
            <h3 className="text-2xl text-slate-500 font-bold">Data Security</h3>
            <p className="text-base">
              We safeguard your information and ensure that it is always secure.
              We collect and use your information in a fair, lawful, and
              transparent manner.
            </p>
          </div>
          <div className="h-full shadow-lg py-4 px-6 md:py-5 md:px-10 bg-white rounded-lg">
            <h3 className="text-2xl text-slate-500 font-bold">Transparent</h3>
            <p className="text-base">
              We use an Escrow account to lock payment by a customer until he
              confirms the receipt of a financial asset as ordered before
              payment is released to the assets merchant.
            </p>
          </div>
        </div>
        <div className="shadow-lg py-4 md:py-5 bg-white rounded-lg">
          <h3 className="text-2xl text-slate-500 font-bold px-4 md:px-8">
            Full Client Support
          </h3>
          <p className="px-4 md:px-8">
            Always ready, round the clock, is a robust, multilingual & friendly
            customer support team to render fast & reliable help should you
            encounter any hitches.
          </p>
          <div className="flex max-h-96 justify-end items-end">
            <Image src={gridImages} alt="img" />
          </div>
        </div>
      </div>
      <div className="max-h-fit gap-6 flex md:flex-row flex-col shadow-lg py-4 px-6 md:py-5 md:px-10 bg-white rounded-lg">
        <div>
          <h3 className="text-2xl text-slate-500 font-bold">
            We have Vault Option
          </h3>
          <p className="max-w-2xl">
            Protect your investments with our secure vault option, offering
            multi-factor authentication and withdrawal restrictions to give you
            peace of mind. Safely store and manage your digital assets with
            confidence on our trading platform. you may decide to store your
            asset like precious metals, Agricultural products in our vault for
            any period of time .
          </p>
        </div>
        <div className="flex flex-col items-center p-4 md:w-1/2">
          <Image className="h- object-cover" src={vaultImage} alt="img" />
        </div>
      </div>
    </div>
  );
};
