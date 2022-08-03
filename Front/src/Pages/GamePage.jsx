import React from "react";
import GenerateDashes from "../Components/GenerateDashes";
import UserInput from "../Components/UserInput";
import Userlists from "../Components/Userlists";

function GamePage() {
  return (
    <div className="grid grid-cols-12 sm:grid-cols-2 h-screen md:grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-2 border border-gray-200 p-2 bg-green-100">
        <h2 className="text-center mt-3 text-xl font-semibold uppercase">
          Players
        </h2>
        <Userlists />
      </div>
      <div className="col-span-7 border h-100 border-gray-200 p-2 bg-green-200">
        <h2 className="text-center mt-3 text-xl font-semibold uppercase">
          Game
        </h2>
        <div className="flex flex-col items-center">
          <div className="bg-green-600 w-full h-[10rem]">
            <h2>Hello</h2>
          </div>
          <div className="grow h-[34.4rem] flex-col justify-items-center items-center w-full">
            <GenerateDashes songName={"Set Fire to the rain"} />
          </div>
          <div className=" w-full h-[10rem]">
            <UserInput />
          </div>
        </div>
      </div>
      <div className="col-span-3 border border-gray-200 p-2 bg-green-100">
        <h2 className="text-center mt-3 text-xl font-semibold uppercase">
          List of your playlist
        </h2>
      </div>
    </div>
  );
}

export default GamePage;
