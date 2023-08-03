import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";

// logo
import logo from "@/public/media/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import MenuMobile from "./MenuMobile";

export const Header = () => {
  return (
    <div className="bg-white min-w-full md:px-16 flex flex-col justify-center shadow-md">
      <nav className="flex p-4 items-center justify-between">
        <Image src={logo} alt="bedrock logo" />
        <ul className="hidden font-semibold md:flex gap-6">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Contact</Link>
          </li>
        </ul>
        <AuthBtn />
        <MenuMobile />
      </nav>
    </div>
  );
};

const AuthBtn = () => {
  return (
    <div className="md:flex gap-4 hidden">
      <Button
        variant={"text"}
        sx={{
          color: "#bc37c8",
          fontWeight: "700",
          gap: ".5em",
        }}
        size={"small"}
      >
        <FontAwesomeIcon icon={faLock} />
        <span>SignIn</span>
      </Button>
      <Button
        variant={"contained"}
        sx={{
          color: "#fff !important",
          backgroundColor: "#bc37c8 !important",
          fontWeight: "700",
          gap: ".5em",
        }}
        size={"small"}
      >
        <FontAwesomeIcon icon={faUser} />
        REGISTER
      </Button>
    </div>
  );
};
