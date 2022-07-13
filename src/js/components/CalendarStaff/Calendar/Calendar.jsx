import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import ReactTooltip from "react-tooltip";

const Calendar = (props) => {
  const handleDateClick = (arg) => {

    props.onAddReservation({ date: arg.dateStr });
  };
  const handleEventClick = (arg) => {

  
    props.onWatchEventDetail({
      start: arg.event.start,
      end: arg.event.end,
      title: arg.event._def.title,
      status: arg.event._def.extendedProps.status,
      provider: arg.event._def.extendedProps.provider,
      client: arg.event._def.extendedProps.client,
      price: arg.event._def.extendedProps.price,
    });
    // props.onWatchEventDetail(arg.event._def, arg.event._instance);
  };
  return (
    <FullCalendar
      events={props.reservations}
      plugins={[dayGridPlugin, interactionPlugin]}
      contentHeight={"auto"}
      eventContent={renderEventContent}
      dateClick={handleDateClick}
      eventClick={handleEventClick}
      // eventDisplay={}
    />
  );
};

function renderEventContent(eventInfo) {
  let hour = eventInfo.event.startStr.split("T", 5)[1].substring(0, 5);
  let status = eventInfo.event._def.extendedProps.status;

  let bg_color = "rounded-full p-1 bg-gray_500 mr-1";
  if (status === "canceled") bg_color = " rounded-full p-1 bg-red-500 mr-1";
  if (status === "completed") bg_color = "rounded-full p-1 bg-green-500 mr-1";
  return (
    <>
      <div className={bg_color}></div>
      {hour !== "00:00" ? <b>{hour}</b> : ""}
      <i>{eventInfo.event.title}</i>
    </>
  );
}
export default Calendar;
