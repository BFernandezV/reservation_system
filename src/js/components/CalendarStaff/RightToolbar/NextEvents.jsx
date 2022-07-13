import React from "react";
import Card from "../UI/Card";

const NextEvents = (props) => {
  const filter_reservations = (reservations) => {
    var date = formatDate(new Date());
    console.log(date);

    let answer = reservations.filter((reservation) => reservation.start > date);
    console.log(answer);
    answer = answer.sort((a, b) => (a.start > b.start ? 1 : -1));

    return answer.slice(0, 3);
  };
  let filtered_reservations = filter_reservations(props.reservations);
  // console.log(props.reservations);
  const clickEvent = (event) => {
    console.log(event);
    let date = new Date(event.start);
    let date_end = new Date(event.end);
    console.log(date);
    props.onWatchEventDetail({
      title: event.title,
      start: date,
      end: date_end,
      status: event.status,
      provider: event.provider,
      client: event.client,
      price: event.price,
    });
  };
  function renderEventContent(eventInfo) {
    let hour = eventInfo.start.split("T", 5)[1].substring(0, 5);
    let status = eventInfo.status;
    console.log(status);
    let bg_color = "rounded-full h-[8px] w-[8px] bg-gray_500 mr-1";
    if (status === "canceled")
      bg_color = " rounded-full h-[8px] w-[8px] bg-red-500 mr-1";
    if (status === "completed")
      bg_color = "rounded-full h-[8px] w-[8px] bg-green-500 mr-1";
    return (
      <div
        onClick={() => {
          clickEvent(eventInfo);
        }}
        className="flex gap-2 hover:bg-gray_200 items-center cursor-pointer"
      >
        <div className={bg_color}></div>
        {hour !== "00:00" ? <b>{hour}</b> : ""}
        <i>{eventInfo.title}</i>
      </div>
    );
  }
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join("-") +
      "T" +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(":")
    );
  }

  return (
    <div className="p-3">
      <h1 className="text-2xl mb-1">Próximos Eventos</h1>
      <div>
        <ul>
          {filtered_reservations.map((reservation) => {
            return <li>{renderEventContent(reservation)}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default NextEvents;
