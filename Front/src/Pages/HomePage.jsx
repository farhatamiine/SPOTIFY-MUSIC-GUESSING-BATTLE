import React, { useState } from "react";
import { HOST_GAME_MODAL, JOIN_GAME_MODAL } from "../Constant";
import Modal from "../Components/Modal";
import JoinGame from "../Components/JoinGame";
import HostGame from "../Components/HostGame";

function HomePage({ socket }) {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (modalType) => {
    setModalType(modalType);
    setOpen(!open);
  };

  return (
    <div className="flex flex-col h-full text-center items-center justify-center bg-gray-200 text-gray-700">
      <div className="flex items-center">
        <h1 className="text-4xl md:text-6xl font-thin uppercase tracking-wider">
          Spotify Music Guessing Battle
        </h1>
      </div>
      <div className="mt-10 flex justify-center mb-6">
        <button
          onClick={() => openModal(JOIN_GAME_MODAL)}
          className="uppercase p-5 rounded-md hover:bg-[#1db954] hover:text-white"
        >
          Join a game
        </button>
        <button
          onClick={() => openModal(HOST_GAME_MODAL)}
          className="ml-10 uppercase p-5 rounded-md hover:text-white hover:bg-[#1db954]"
        >
          host a game
        </button>
      </div>
      <Modal open={open} setOpen={setOpen}>
        {modalType === JOIN_GAME_MODAL ? (
          <JoinGame socket={socket} />
        ) : (
          <HostGame socket={socket} />
        )}
      </Modal>
    </div>
  );
}

export default HomePage;
