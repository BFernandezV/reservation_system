import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const NewDate = (props) => {
  console.log(props.date_start, props.date_end);
  const getDate = function (date) {
    return date.split("T")[0];
  };
  const getHour = function (date) {
    let hour = date.split("T")[1];
    if (!hour) return "00:00";
    return hour;
  };
  const modify = function (date, value, provenience) {
    let answer = date;
    if (provenience === "time") {
      let hour = date.split("T")[1];
      if (!hour) answer = date + "T" + value + ":00";
      else {
        console.log(date);
        answer = date.split("T")[0] + "T" + value + ":00";
      }
    }
    return answer;
  };

  const handleChange = (date, e, provenience, limit) => {
    let newdate = modify(date, e.target.value, provenience);

    if (limit === "start") props.onChange(newdate);
    else props.onChangeDateEnd(newdate);
  };

  return (
    <React.Fragment>
      <label>Fecha: </label>

      <div className="flex gap-3">
        <input
          type="date"
          className="border p-1 rounded border-slate_400"
          value={getDate(props.date_start)}
          onChange={(event) => {
            handleChange(props.date_start, event, "date");
          }}
        />
        <input
          id="appt-time-start"
          type="time"
          className="border p-1 rounded border-slate_400"
          onChange={(event) => {
            handleChange(props.date_start, event, "time", "start");
          }}
          name="appt-time"
          value={getHour(props.date_start)}
        ></input>
        -
        <input
          className="border p-1 rounded border-slate_400"
          id="appt-time-end"
          type="time"
          onChange={(event) => {
            handleChange(props.date_end, event, "time", "end");
          }}
          name="appt-time"
          value={getHour(props.date_end)}
        ></input>
      </div>
    </React.Fragment>
  );
};
export default NewDate;
