import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../UI/Backdrop";
import classes from "./NuevaReserva.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Profile from "../UI/Profile/Profile";
import Date from "../UI/Date";

const DetailOverlay = (props) => {
  let bg_status = "p-4 bg-gray_400";
  if (props.status == "completed") bg_status = "p-4 bg-green-500";
  if (props.status == "canceled") bg_status = "p-4 bg-red-500";
  return (
    <Card className={classes.modal}>
      <header className={bg_status}>
        <h2 className="text-gray-800 font-semibold text-lg">{props.status}</h2>
      </header>
      <div className="p-2">
        <h3 className="font-semibold text-xl">{props.title}</h3>
        <div className="flex">
          <Date
            day={true}
            month={true}
            year={true}
            hour={true}
            date={props.date}
          ></Date>
          - <Date hour={true} date={props.date_end}></Date>
        </div>
        <br></br>
        <div className="grid gap-y-3 gap-x-2 grid-cols-[1.6fr_10fr]">
          <label>Proveedor: </label>
          <Profile
            image="unnamed-273.jpeg"
            alt={props.provider}
            header={props.provider}
            description={"15 años de experiencia"}
          ></Profile>
          <label>Cliente: </label>
          <Profile
            image="customer.jpg"
            alt={props.provider}
            header={props.client.name}
            description={props.client.email + ", " + props.client.city}
          ></Profile>
          <label>Precio: </label>
          <span>&#36; {props.price}</span>
        </div>
      </div>
    </Card>
  );
};

const EventDetails = (props) => {
 
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <DetailOverlay
          date={props.eventdata.start}
          date_end={props.eventdata.end}
          title={props.eventdata.title}
          status={props.eventdata.status}
          provider={props.eventdata.provider}
          client={props.eventdata.client}
          price={props.eventdata.price}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default EventDetails;
