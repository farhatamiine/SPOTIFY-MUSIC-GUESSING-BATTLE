import React from "react";
import UserCard from "./UserCard";

function Userlists() {
  return (
    <div className="flex flex-col">
      <UserCard username={"Amine"} joinedAt={"6min ago"} />
      <UserCard username={"Amine"} joinedAt={"6min ago"} />
      <UserCard username={"Amine"} joinedAt={"6min ago"} />
    </div>
  );
}

export default Userlists;
