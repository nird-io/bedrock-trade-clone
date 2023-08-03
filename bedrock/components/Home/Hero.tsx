import { Button, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "@/styles/home.module.css";
// images
import agric_img from "@/public/media/agricultural-comodities-3.png";
import gold_img from "@/public/media/gold-bars.png";
import currency_x_img from "@/public/media/currency-p2p.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMarker } from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
  return (
    <div className="flex-col md:flex-row flex py-10 md:py-20 md:px-16 md:gap-10 lg:justify-between">
      <div className="flex flex-col gap-4 p-4 md:w-1/2 md:gap-6">
        <h1 className="text-4xl font-medium md:text-7xl 2xl:text-7xl md:font-extrabold">
          Transparent Exchange of Financial Assets
        </h1>
        <p className="text-base md:text-xl font-semibold text-slate-500 md:leading-9">
          Ideal for Individuals, Merchants, Cooperates, Government &
          Institutional Investors.
        </p>
        <div>
          <Button
            variant={"contained"}
            sx={{
              color: "#fff !important",
              backgroundColor: "#bc37c8 !important",
              fontWeight: "700",
              gap: ".5em",
              borderRadius: "1.5em",
            }}
          >
            GET STARTED
          </Button>
        </div>
      </div>
      <div
        className={`flex p-4 md:w-1/2 flex-col align-middle justify-center md:flex-row gap-4`}
      >
        <div className={"flex flex-col gap-4"}>
          <div className={"bg-white md:w-64 2xl:w-80 p-4 gap-4 flex flex-col"}>
            <div
              className={"w-full p-4 flex justify-center"}
              style={{ backgroundColor: "#ebf8ff" }}
            >
              <Image
                className="object-cover"
                src={agric_img}
                alt="agriculture"
              />
            </div>
            <h2>Agricultural Commodities</h2>
          </div>
          <div className={"bg-white md:w-64 p-4  gap-4 flex flex-col"}>
            <div
              className={"w-full p-4 flex justify-center"}
              style={{ backgroundColor: "#faf5ff" }}
            >
              <Image
                className="object-cover"
                src={gold_img}
                alt="agriculture"
              />
            </div>
            <h2>Precious Metals</h2>
          </div>
        </div>
        <div className={"flex flex-col gap-4"}>
          <div
            className={
              "bg-white md:w-64 p-4  gap-4 border-b-black flex flex-col"
            }
          >
            <div
              className={"w-full p-4 flex justify-center"}
              style={{ backgroundColor: "#ebf8ff" }}
            >
              <Image
                className="object-cover"
                src={currency_x_img}
                alt="agriculture"
              />
            </div>
            <h2>Currency P2P</h2>
          </div>
          <div className={"bg-white md:w-64 p-4  gap-2  flex flex-col"}>
            <h3 className="font-bold">
              BTC <FontAwesomeIcon icon={faCheck} />
            </h3>
            <div>
              <h3>Price</h3>
              <h3 className={"font-bold"}>$ 29,963.31</h3>
            </div>
            <div
              className={
                "flex md:items-center gap-4 justify-between md:justify-center"
              }
            >
              <h3>
                Available: <span className={"font-bold"}>876 BTC</span>
              </h3>
              <Button
                sx={{
                  color: "#fff !important",
                  backgroundColor: "#bc37c8 !important",
                  fontWeight: "700",
                  gap: ".5em",
                  borderRadius: "1.5em",
                }}
                size={"small"}
              >
                Buy
              </Button>
            </div>
            <Divider />
            <h3 className="font-bold">
              ETH <FontAwesomeIcon icon={faCheck} />
            </h3>
            <div>
              <h3>Price</h3>
              <h3 className={"font-bold"}>$ 1,908.31</h3>
            </div>
            <div
              className={
                "flex md:items-center gap-4 justify-between md:justify-center"
              }
            >
              <h3>
                Available: <span className={"font-bold"}>876 BTC</span>
              </h3>
              <Button
                sx={{
                  color: "#fff !important",
                  backgroundColor: "#bc37c8 !important",
                  fontWeight: "700",
                  gap: ".5em",
                  borderRadius: "1.5em",
                }}
                size={"small"}
              >
                Buy
              </Button>
            </div>
            <Divider />
            <h3 className={"font-bold"}>Crypto Currencies</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
