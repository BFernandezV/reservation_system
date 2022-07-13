import React, { useEffect } from "react";
import Calendar from "react-calendar";
import WaitingComponent from "./WaitingComponent";
import TabletComponent from "./TabletComponent";

const dataProf = [
  {
    title: "Benjamin Fernandez Vera",
    subtitle: "Profesional con 15 años de experiencia",
  },
  {
    title: "Fernando Fuentealba Arias",
    subtitle: "Profesional con 15 años de experiencia",
  },
  {
    title: "Claudio Rain Levican",
    subtitle: "Profesional con 15 años de experiencia",
  },
  {
    title: "Mauricio Furniel Campos",
    subtitle: "Profesional con 15 años de experiencia",
  },
  {
    title: "Jorge Jara",
    subtitle: "Profesional con 15 años de experiencia",
  },
  {
    title: "Tiago Huber",
    subtitle: "Profesional con 15 años de experiencia",
  },
];

const workHours = [
  {
    hour: "9:00",
    type: "Mañana",
  },
  {
    hour: "10:00",
    type: "Mañana",
  },
  {
    hour: "11:00",
    type: "Mañana",
  },
  {
    hour: "12:00",
    type: "Tarde",
  },
  {
    hour: "13:00",
    type: "Tarde",
  },
  {
    hour: "14:00",
    type: "Tarde",
  },
  {
    hour: "15:00",
    type: "Tarde",
  },
  {
    hour: "16:00",
    type: "Tarde",
  },
  {
    hour: "17:00",
    type: "Tarde",
  },
  {
    hour: "18:00",
    type: "Tarde",
  },
];

const Step2Component = ({
  professional,
  setProfessional,
  onChangeCalendar,
  valueCalendar,
  hour,
  setHour,
}) => {
  useEffect(() => {
    professional === "" && getProfessionals();
    professional !== "" && valueCalendar !== "" && getHours();
  }, [professional, valueCalendar]);

  const getProfessionals = () => {
    console.log("SE BUSCAN PROFESIONALES");
  };

  const getHours = () => {
    console.log("SE BUSCAN HORAS");
  };

  const HourComponent = ({ hourComp }) => {
    return (
      <div className="flex shadow border border-border_secondary items-center p-2 w-24 gap-3 hover:bg-primary hover:text-white">
        <input
          name="hour"
          type="radio"
          value={hourComp.hour}
          checked={hour === hourComp.hour}
          onChange={(event) => setHour(event.currentTarget.value)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="font-medium ">{hourComp.hour}</label>
      </div>
    );
  };

  return (
    <div className="h-80 flex gap-10 w-full justify-center">
      <div className="flex flex-col basis-2/4 gap-3">
        <span className="font-semibold text-xl">Selecciona un profesional</span>
        <div className="flex flex-col gap-2 overflow-auto h-full py-2 pr-2">
          {dataProf.length > 0
            ? dataProf.map((element) => (
                <TabletComponent
                  elementValue={professional}
                  handlerElement={setProfessional}
                  elementTablet={element}
                  key={element.title}
                />
              ))
            : "No existen profesionales"}
        </div>
      </div>

      {professional !== "" ? (
        <div className="flex flex-col gap-2 basis-2/4">
          <span className="font-semibold text-xl">Selecciona una fecha</span>
          <div>
            <Calendar
              minDate={new Date()}
              className={"bg-primary"}
              onChange={onChangeCalendar}
              value={valueCalendar}
            />
          </div>
        </div>
      ) : (
        <WaitingComponent text={"Selecciona un profesional"} />
      )}

      {professional !== "" ? (
        <div className="flex flex-col gap-2 basis-2/4">
          <span className="font-semibold text-xl">Selecciona la hora</span>
          <div className="flex flex-wrap gap-2 overflow-auto">
            {workHours.length > 0
              ? workHours.map((element) => (
                  <HourComponent hourComp={element} key={element.hour} />
                ))
              : ""}
          </div>
        </div>
      ) : (
        <WaitingComponent text={"Selecciona un profesional"} />
      )}
    </div>
  );
};

export default Step2Component;
