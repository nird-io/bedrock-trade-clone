import Image, { StaticImageData } from "next/image";
import React from "react";
import Styles from "@/styles/home.module.css";

interface Testimony {
  txt?: string;
  author?: string;
  likes?: Number;
  img?: string;
}
let Users: Array<Testimony> = [
  {
    txt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, qui!",
    author: "Avonyor JK.",
    likes: 200,
    img: "/media/avatar-1.png",
  },
  {
    txt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, qui!",
    author: "Agyei Ankara",
    likes: 100,
    img: "/media/avatar-2.png",
  },
  {
    txt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, qui!",
    author: "Amankwa",
    likes: 400,
    img: "/media/avatar-1.png",
  },
];
export const Testimonials = () => {
  return (
    <div
      style={{ backgroundColor: "#bc37c815" }}
      className="flex gap-8 flex-col md:px-12 py-20 px-4"
    >
      <h3 className="text-4xl font-bold">Three ways to get started</h3>
      <div className={Styles.testimonials_styles}>
        {Users.map((testimony, index) => (
          <div
            key={index}
            className="flex min-w-fit md:max-w-sm rounded-xl bg-slate-50 p-4 gap-4 flex-col"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <Image
                  src={`${testimony?.img}`}
                  alt="date"
                  className="w-full"
                  width={320}
                  height={320}
                />
              </div>
              <h3 className="font-bold">{testimony.author}</h3>
            </div>
            <p>{testimony.txt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
