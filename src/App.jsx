import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import ReservationPage from "../src/js/pages/ReservationPage";
import StaffCalendar from "./js/pages/StaffCalendar";
import ModifyPage from "./js/pages/ModifyPage";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
function App() {
  let navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg- h-screen w-screen absolute top-0 left-0">
            <h1 className="mt-4 text-indigo-700 text-5xl font-bold text-center">
              Reservas
            </h1>
            <div className="max-w-screen mt-4">
              <ul className="flex gap-3 justify-center ">
                <li>
                  <Button
                    color="primary"
                    className="text-white  text-2xl font-bold text-center"
                    onClick={() => {
                      navigate(`reservation`);
                    }}
                  >
                    Nueva Reserva
                  </Button>
                </li>
                <li>
                  <Button
                    color="primary"
                    className="text-white  text-2xl font-bold text-center"
                    onClick={() => {
                      navigate(`staffcalendar`);
                    }}
                  >
                    Calendario
                  </Button>
                </li>
                <li>
                  <Button
                    color="primary"
                    className="text-white  text-2xl font-bold text-center"
                    onClick={() => {
                      navigate(`modify`);
                    }}
                  >
                    Modificar Reserva
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
      <Route path="/reservation/" element={<ReservationPage />} />
      <Route path="/staffcalendar/" element={<StaffCalendar />} />
      <Route path="/modify/" element={<ModifyPage />} />
    </Routes>
  );
}

export default App;
