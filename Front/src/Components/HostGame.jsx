import React, { useState, useEffect } from "react";
import { randomRoom } from "../Utilities";

function HostGame() {
  const [roomNumber, setRoomNumber] = useState();
  const [copied, setCopied] = useState(false);

  const redirectToGame = () => {
    //TODO: Redirect user to the game
    console.log("Hey user");
  };

  useEffect(() => {
    setRoomNumber(randomRoom());
  }, []);

  const copyToClipBoard = () => {
    setCopied(true);
    navigator.clipboard.writeText(roomNumber);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      <h2 className="text-lg text-center leading-6 uppercase font-medium text-gray-900">
        your are the game hoster
      </h2>
      <div className="flex flex-col my-5 items-center">
        <h3 className="font-medium uppercase text-center">Room Number</h3>
        <p
          onClick={() => copyToClipBoard()}
          className="hover:bg-[#1db954] hover:text-white text-4xl my-4 cursor-pointer text-center w-44 text-[#1db954] border p-4 rounded-md border-gray-200"
        >
          {copied ? `Copied !` : roomNumber}
        </p>
        <button
          onClick={() => redirectToGame()}
          className="text-xl mt-3 uppercase bg-[#1db954] rounded p-3 w-6/12  text-center text-white"
        >
          Enter Room
        </button>
      </div>
    </>
  );
}

export default HostGame;
