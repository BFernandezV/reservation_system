import React from "react";

import Stats from "./Stats";
import NextEvents from "./NextEvents";
const RightToolbar = (props) => {
  return (
    <div className="flex flex-col justify-start mt-[6rem]">
      <NextEvents
        onWatchEventDetail={props.onWatchEventDetail}
        reservations={props.reservations}
      ></NextEvents>
      <Stats reservations={props.reservations}></Stats>
    </div>
  );
};
export default RightToolbar;
