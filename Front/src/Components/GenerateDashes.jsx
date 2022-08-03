import React, { useEffect } from "react";
import { useState } from "react";

function GenerateDashes({ songName }) {
  const [dashAmount, setDashAmout] = useState();

  useEffect(() => {
    const generateDash = () => {
      let dashes = "";
      for (let index = 0; index < songName.length; index++) {
        if (songName[index] === " ") {
          dashes += " ";
        } else {
          dashes += "-";
        }
      }
      return dashes;
    };
    setDashAmout(generateDash());
  }, [songName]);

  return (
    <div className="flex flex-col items-center p-5">
      <img
        src=""
        className="w-60 mb-3 h-60 border border-gray-300"
        alt="image_album"
        srcset=""
      />
      <h2 className="text-5xl mb-5 font-semibold text-black">{dashAmount}</h2>
      <p className="text-center font-medium uppercase ">
        {songName.length} words
      </p>
    </div>
  );
}

export default GenerateDashes;
