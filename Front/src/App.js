import React, { useEffect, useState } from "react";
import GamePage from "./Pages/GamePage";
import HomePage from "./Pages/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import io from "socket.io-client";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:8080`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  return (
    <Routes>
      <Route path="/" element={<HomePage socket={socket} />} />
      <Route path="game" element={<GamePage socket={socket} />} />
    </Routes>
  );
}

export default App;
