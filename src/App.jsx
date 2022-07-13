import "./App.css";

import { Route, Routes } from "react-router-dom";
import ReservationPage from "../src/js/pages/ReservationPage";
import StaffCalendar from "./js/pages/StaffCalendar";
import ModifyPage from "./js/pages/ModifyPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg- h-screen w-screen absolute top-0 left-0">
            <h1 className="mt-4 text-indigo-700 text-5xl font-bold text-center">
              Home
            </h1>
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
