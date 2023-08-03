import { Button, TextField } from "@mui/material";
import React from "react";
import BasicSelect from "./CurrencySelection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";

export const Exchange = () => {
  return (
    <div
      className={
        "flex md:items-center py-9 flex-col md:p-7 bg-gradient-to-r from-purple-500 to-pink-500"
      }
    >
      <h2 className="text-2xl text-center text-slate-50 font-bold">
        Rate Calculator
      </h2>
      <p className={"text-base md:text-2xl text-center text-slate-50"}>
        convert to your local currency
      </p>
      <div className={"items-center md:w-2/3 flex flex-col p-5 gap-8"}>
        <h2 className={"text-4xl text-slate-50"}>$ 0.00</h2>
        <div
          className={
            "gap-5 flex flex-col md:flex-row md:justify-between md:w-full"
          }
        >
          <div className={"flex"}>
            <BasicSelect label="From" />
            <TextField
              sx={{ backgroundColor: "#fff", outline: "none" }}
              size={"small"}
              placeholder="Amount | eg: 4000"
            />
          </div>
          <div className={"flex"}>
            <BasicSelect label="To" />
            <TextField
              sx={{ backgroundColor: "#fff", outline: "none" }}
              size={"small"}
              placeholder="Amount | eg: 4000"
            />
          </div>
        </div>
        <div className={"w-full"}>
          <Button
            sx={{ backgroundColor: "#4285F4 !important" }}
            variant={"contained"}
            fullWidth
            endIcon={<FontAwesomeIcon icon={faRecycle} />}
          >
            Convert
          </Button>
        </div>
      </div>
    </div>
  );
};
