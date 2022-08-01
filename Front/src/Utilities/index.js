import _ from "lodash";

export const randomRoom = () => {
  console.log("Executed");
  return _.random(1000, 9999, false);
};
