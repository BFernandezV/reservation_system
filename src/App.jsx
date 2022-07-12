import "./App.css";

import { Route, Routes } from "react-router-dom";
import ReservationPage from "../src/js/pages/ReservationPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-gray-200 h-screen w-screen absolute top-0 left-0 dark:bg-gray-900">
            <h1 className="mt-4 text-indigo-700 text-5xl font-bold text-center">
              Hola mundo!
            </h1>
          </div>
        }
      />
      <Route path="/reservation/" element={<ReservationPage />} />
    </Routes>
  );
}

export default App;
