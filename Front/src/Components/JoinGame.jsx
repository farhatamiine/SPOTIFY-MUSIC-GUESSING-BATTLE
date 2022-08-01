import React from "react";
import { Dialog } from "@headlessui/react";

function JoinGame({ setOpen }) {
  const joinTheGame = () => {
    setOpen(false);
    console.log("Join The Game");
  };

  return (
    <>
      <div>
        <div className="mt-3 text-left sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            Join the game
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Add room number to join the game
            </p>
            <div className="col-span-6 sm:col-span-3 mt-4">
              <label
                htmlFor="room_number"
                className="block text-sm font-medium text-gray-700"
              >
                Room Number (4 digits)
              </label>
              <input
                type="text"
                name="room_number"
                id="room_number"
                className="mt-1 focus:ring-[#1db954]  focus:border-[#1db954] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#1db954] text-base font-medium text-white hover:bg-[#1db954] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1db954] sm:text-sm"
          onClick={() => joinTheGame()}
        >
          Join The game
        </button>
      </div>
    </>
  );
}

export default JoinGame;
