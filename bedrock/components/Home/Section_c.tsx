import React from "react";
import Image from "next/image";
// -------------------------------
import phone_img from "@/public/media/iphone.png";
import { Button, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faStore } from "@fortawesome/free-solid-svg-icons";

export const Section_c = () => {
  return (
    <div className="px-4 md:px-20 py-12 gap-6 flex flex-col md:flex-row">
      <div className="flex justify-center items-center flex-col p-4 w-full md:max-w-xs">
        <Image
          src={phone_img}
          className="object-cover w-3/4 md:w-full"
          alt="image of a phone"
        />
      </div>
      <div className="flex flex-col gap-6 md:max-w-3xl p-4">
        <p style={{ color: "#bc37c8" }} className="font-bold">
          Escrow System
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Introducing our Escrow System - Your Safety Net for Secure
          Transactions
        </h2>
        <Divider />
        <p className="md:text-xl text-lg">
          Our Escrow System acts as a neutral third party, holding funds in a
          secure account until all agreed-upon conditions are met. It’s designed
          to give you peace of mind and protect both buyers and sellers
          throughout the entire trading process.
        </p>
        <div>
          <Button
            variant={"contained"}
            size="small"
            className="flex gap-3 items-center justify-center"
            sx={{ backgroundColor: "#bc37c8 !important", borderRadius: "2em" }}
          >
            Start Trading with Bedrock
            <FontAwesomeIcon icon={faBank} />
          </Button>
        </div>
      </div>
    </div>
  );
};
