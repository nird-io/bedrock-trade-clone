import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import CurrencyExchangeTable from "./CurrencyExchangeTable";

export const ExchangeTable = () => {
  //   const queryClient = useQueryClient();
  // onst query = useQuery({ queryKey: , queryFn:  })
  return (
    <div className="flex flex-col py-24 px-7 md:px-20 gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-base md:text-2xl font-bold">
          Trade Some Popular Cryptocurrencies
        </h2>
        <Link
          className="flex text-center border w-28 items-center gap-4 text-sm md:text-base font-bold text-pink-600"
          href={"/auth/login"}
        >
          <span>View all</span>
          <FontAwesomeIcon
            className="text-xs md:text-base"
            icon={faArrowRight}
          />
        </Link>
      </div>
      <CurrencyExchangeTable />
    </div>
  );
};
