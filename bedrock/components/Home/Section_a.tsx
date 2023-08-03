import Image from "next/image";
import React from "react";
import girl_img from "@/public/media/girl.png";

export const Section_a = () => {
  return (
    <div className="bg-slate-50 py-24 md:px-20 flex flex-col gap-8">
      <div className="px-5">
        <h3 className="text-3xl font-bold">
          Experience Currency P2P with{" "}
          <span className="text-pink-400">Bedrock Exchange</span>
        </h3>
        <p className="max-w-2xl text-lg">
          Bedrock P2P currency exchange is a currency swap process that allows
          users to exchange money from one person to another at ease.
        </p>
      </div>
      <div className="flex flex-col md:flex-row px-8 gap-8">
        <div className="flex flex-col">
          <div className="flex flex-col py-3 gap-3 text-slate-600">
            <h3 className="font-bold text-2xl">Swift, Safe and Sturdy</h3>
            <p className="text-lg max-w-lg">
              With <span className="text-pink-400">Bedrock</span> sending money
              to friends and family can be as easy as sending a message.
            </p>
          </div>
          <div className="flex flex-col py-3 gap-3 text-slate-600">
            <h3 className="font-bold text-2xl">
              Straightforward and Simple to use
            </h3>
            <p className="text-lg max-w-lg">
              <span className="text-pink-400">Bedrock</span> enables users to
              keep track of their transactions and manage their funds with ease.
              There are no additional costs and intricate processes.
            </p>
          </div>
          <div className="flex flex-col py-3 gap-3 text-slate-600">
            <h3 className="font-bold text-2xl">
              P2P made easy with <span className="text-pink-400">Bedrock</span>
            </h3>
            <p className="text-lg max-w-lg">
              <span className="text-pink-400">Bedrock</span> has verified
              merchants and clients who are ready to trade with you.
            </p>
          </div>
        </div>
        <div className="flex max-w-xl shadow-2xl rounded-2xl">
          <Image
            className="object-cover rounded-2xl"
            src={girl_img}
            alt="girl with phone"
          />
        </div>
      </div>
    </div>
  );
};
