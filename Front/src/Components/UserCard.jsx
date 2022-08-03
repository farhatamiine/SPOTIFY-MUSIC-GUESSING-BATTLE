import React from "react";

function UserCard({ username, joinedAt }) {
  return (
    <div className="flex w-full mb-2 items-center shadow-sm rounded-sm justify-items-center bg-red-50 py-2 pl-3">
      <img
        src="https://faces-img.xcdn.link/image-lorem-face-6696.jpg"
        className="w-12 h-12 rounded-full mr-3"
        alt=""
      />
      <div>
        <h2 className="m-0 text-lg">{username}</h2>
        <h6 className="mb-0">{joinedAt}</h6>
      </div>
    </div>
  );
}

export default UserCard;
