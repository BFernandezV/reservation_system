import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./NuevaReserva.module.css";
import Backdrop from "../UI/Backdrop";
import UserMiniImage from "../UI/Profile/User_Mini_Image";
import Profile from "../UI/Profile/Profile";
import InputUser from "./forms/InputUser";
import NewDate from "./forms/NewDate";

const ModalOverlay = (props) => {
  const providerInputref = useRef();
  const [service, setValue] = useState("Corte de pelo");
  const [priceService, setPrice] = useState(7000);
  const [provider, setProvider] = useState(props.users.providers[0]);
  const [providerIMG, setImageProvider] = useState(null);

  const [client, setClient] = useState(props.users.clients[0]);
  const [clientIMG, setClientIMG] = useState(null);

  const [date_start, setEnteredDate] = useState(props.date + "T17:00:00");
  const [date_end, setDateEnd] = useState(props.date + "T17:30:00");
  const handleDate = (date) => {
    setEnteredDate(date);
  };
  const handleDateEnd = (date) => {
    setDateEnd(date);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "Corte de pelo") setPrice(7000);
    if (e.target.value === "Manicure") setPrice(8000);
    if (e.target.value === "Pedicure") setPrice(13000);
    if (e.target.value === "Botox Capilar") setPrice(18000);
  };
  const handleProvider = (idProv) => {
    let provider = props.users.providers.find(
      (provider) => provider.id == idProv
    );
    setProvider(provider);
    setImageProvider(provider.imageURL);
  };
  const handleClient = (idClient) => {
    let client = props.users.clients.find((client) => client.id == idClient);
    setClient(client);
    setClientIMG(client.imageURL);
  };

  const submitHandler = (event) => {
    // Aquí subimos la información que se genera al crear un nuevo evento
    event.preventDefault();

    props.onConfirm({
      title: service,
      provider: provider,
      price: priceService,
      start: date_start,
      end: date_end,
      status: "pendiente",
      client: client,
    });
  };

  return (
    <Card className={`${classes.modal}`}>
      <header className="bg-primary p-4">
        <h2 className="text-white font-semibold text-lg">{props.title}</h2>
      </header>

      <form
        className="grid p-2 gap-y-5 gap-x-2 grid-cols-[1.6fr_10fr] items-center"
        onSubmit={submitHandler}
      >
        <div></div>
        <select
          id="service"
          name="service"
          onChange={handleChange}
          className="border col-span-2 border-slate_400 p-2 rounded"
        >
          <option value="Corte de pelo" selected>
            Corte de pelo
          </option>
          <option value="Manicure">Manicure</option>
          <option value="Pedicure">Pedicure</option>
          <option value="Botox Capilar">Botox Capilar</option>
        </select>

        <NewDate
          date_start={date_start}
          date_end={date_end}
          onChange={handleDate}
          onChangeDateEnd={handleDateEnd}
        ></NewDate>
        {/* <NewDate date_start={date_start} onChange={setEnteredDate}></NewDate> */}

        <label htmlFor="proveedor">Proveedor:</label>
        <div>
          <InputUser
            // label={"serviceUser{1}"}
            users={props.users.providers}
            onHandleUser={handleProvider}
          ></InputUser>
        </div>
        <label htmlFor="cliente">Cliente:</label>
        <InputUser
          users={props.users.clients}
          onHandleUser={handleClient}
        ></InputUser>
        <label>Precio Final: </label>
        <span>&#36; {priceService}</span>
        <footer>
          <button
            type="submit"
            className="rounded bg-green-500 hover:bg-green-600 py-2 px-4 text-white"
          >
            Guardar
          </button>
        </footer>
      </form>
    </Card>
  );
};

const NuevaReservaModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onExit} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          date={props.date}
          services={props.services}
          users={props.users}
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default NuevaReservaModal;
