import React from "react";
import RightToolbar from "../components/CalendarStaff/RightToolbar/RightToolbar";
import { useState } from "react";
import NuevaReservaModal from "../components/CalendarStaff/Calendar/NuevaReserva";
import EventDetails from "../components/CalendarStaff/Calendar/EventDetails";
import Calendar from "../components/CalendarStaff/Calendar/Calendar";

const DUMMY_USERS = {
  clients: [
    {
      id: 1,
      name: "Carla Merino",
      imageURL: "carla.png",
    },
    {
      id: 2,
      name: "Almendra Castillo",
      imageURL: "almendra.jpg",
    },
    {
      id: 3,
      name: "Daniela Rain",
    },
  ],
  providers: [
    {
      id: 1,
      name: "Marcos Villarroel",
      imageURL: "marcos.jpeg",
    },
    {
      id: 2,
      name: "Pablo Valenzuela",
    },
    {
      id: 3,
      name: "Brayan Canales",
    },
  ],
};
const DUMMY_SERVICES = [
  {
    id: 1,
    name: "Corte de Pelo",
    price: 7000,
  },
  {
    id: 2,
    name: "Manicure",
    price: 8000,
  },
  {
    id: 3,
    name: "Pedicure",
    price: 13000,
  },
  {
    id: 4,
    name: "Botox Capilar",
    price: 18000,
  },
];
const DUMMY_RESERVATIONS = [
  {
    id: 1,
    title: "Manicure 1",
    provider: "Marcos Villarroel",
    price: 5000,
    start: "2022-07-06T14:00:00",
    end: "2022-07-06T15:00:00",
    status: "canceled",
    client: {
      name: "Almendra castillo",
      email: "client@example.com",
      city: "Concepción",
      imageURL: "almendra.jpg",
    },
  },
  {
    id: 2,
    title: "Pedicure 2",
    provider: "Marcos Villarroel",
    price: 7000,
    start: "2022-07-10T14:00:00",
    end: "2022-07-10T15:00:00",
    status: "completed",
    client: {
      name: "Almendra castillo",
      email: "client@example.com",
      city: "Concepción",
      imageURL: "almendra.jpg",
    },
  },
  {
    id: 3,
    title: "Botox Capilar 3",
    provider: "Marcos Villarroel",
    price: 17000,
    start: "2022-07-12T14:00:00",
    end: "2022-07-12T15:00:00",
    status: "completed",
    client: {
      name: "Almendra castillo",
      email: "client@example.com",
      city: "Concepción",
      imageURL: "almendra.jpg",
    },
  },
  {
    id: 4,
    title: "Botox Capilar 4",
    provider: "Marcos Villarroel",
    price: 17000,
    start: "2022-07-13T14:00:00",
    end: "2022-07-13T15:00:00",
    status: "completed",
    client: {
      name: "Almendra castillo",
      email: "client@example.com",
      city: "Concepción",
      imageURL: "almendra.jpg",
    },
  },
];

const StaffCalendar = (props) => {
  const [reservations, addReservation] = useState(DUMMY_RESERVATIONS);
  const [modal, setmodal] = useState(false);
  const [event_detail, setEventDetail] = useState(false);
  const [data, setData] = useState({});
  const [date_str, setDate] = useState("");
  const addReservationHandler = (reservation_date) => {
    console.log(reservation_date);
    setDate(reservation_date.date);
    setmodal(true);
  };
  const watchEventHandler = (data) => {
    setData(data);
    setEventDetail(true);
  };
  const eventHandler = () => {
    setEventDetail(null);
  };

  // Añadir al arreglo
  const modalHandler = (recivedData) => {
    addReservation((reservations) => {
      return [recivedData, ...reservations];
    });
    setmodal(null);
  };
  const exitHandler = () => {
    setmodal(null);
  };

  return (
    <React.Fragment>
      <div className="grid max-h-screen grid-rows-[5fr_1fr] grid-cols-[4fr_1fr]">
        <div className="bg-gray-500">holassssclaudioo</div>
        <div>
          {modal && (
            <NuevaReservaModal
              title="Nueva reserva"
              services={DUMMY_SERVICES}
              users={DUMMY_USERS}
              date={date_str}
              message="hola mundo vamos a hacer una nueva reserva"
              onConfirm={modalHandler}
              onExit={exitHandler}
            ></NuevaReservaModal>
          )}
          {event_detail && (
            <EventDetails
              eventdata={data}
              onConfirm={eventHandler}
            ></EventDetails>
          )}
          <Calendar
            reservations={reservations}
            onAddReservation={addReservationHandler}
            onWatchEventDetail={watchEventHandler}
          ></Calendar>
        </div>

        <RightToolbar
          onWatchEventDetail={watchEventHandler}
          reservations={reservations}
        ></RightToolbar>
      </div>
    </React.Fragment>
  );
};
export default StaffCalendar;
