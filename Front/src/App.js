import React from "react";

function App() {
  return (
    <div className="flex flex-col h-full text-center items-center justify-center bg-gray-200 text-gray-700">
      <div className="flex items-center">
        <h1 className="text-4xl md:text-6xl font-thin uppercase tracking-wider">
          Spotify Music Guessing Battle
        </h1>
      </div>
      <div className="mt-10 flex justify-center mb-6">
        <button className="uppercase p-5 rounded-md hover:bg-[#1db954] hover:text-white">
          Join a game
        </button>
        <button className="ml-10 uppercase p-5 rounded-md hover:text-white hover:bg-[#1db954]">
          host a game
        </button>
      </div>
    </div>
  );
}

export default App;
