import React, { useState } from "react";
import AccordionComponent from "../../js/components/ReservationComponents/AccordionComponent";
import StepComponent from "../../js/components/ReservationComponents/StepComponent";
import TabletComponent from "../../js/components/ReservationComponents/TabletComponent";
import Calendar from "react-calendar";
import "../../css/calendar.css";
import { Button } from "@material-tailwind/react";

const ModifyPage = () => {
  const titles = [
    {
      title: "Selecciona el local y los servicios",
      subtitle: "Los servicios tienen un tiempo estimado de duración",
    },
    {
      title: "Selecciona el profesional, la fecha y hora de tus servicios",
      subtitle:
        "Recuerda que la hora y fecha de los servicios está estrictamente relaciondo con el profesional",
    },
    {
      title: "Rellena el formulario",
      subtitle: "Necesitamos la información necesaria para agendar tu cita",
    },
  ];

  const dataLocales = [
    {
      title: "Los Quillayes 1087 - Coronel",
      subtitle: "Horario de atención: 9:00 - 18:00",
    },
    {
      title: "Los Nogales 2343- Coronel",
      subtitle: "Horario de atención: 9:00 - 18:00",
    },
    {
      title: "Los calle extra 234- Concepcion",
      subtitle: "Horario de atención: 9:00 - 18:00",
    },
    {
      title: "Los calle extra 2132 - Lota",
      subtitle: "Horario de atención: 9:00 - 18:00",
    },
    {
      title: "Los calle extra 21332 - Lota",
      subtitle: "Horario de atención: 9:00 - 18:00",
    },
    {
      title: "Los calle extra 21132 - Lota",
      subtitle: "Horario de atención: 9:00 - 18:00",
    },
  ];

  const dataServices = [
    {
      id: 1,
      name: "Botox capilar cabello corto y medio",
      duration: "90 min",
      description:
        "Se lava el cabello con shampoo anti residuo, luego se aplica el producto dejando actuar por 30 minutos, se termina de secar y se plancha, luego se lava y se seca con secador",
      price: "20.000",
    },
    {
      id: 2,
      name: "Botox capilar cabello largo",
      duration: "90 min",
      description:
        "Se lava el cabello con shampoo anti residuo, luego se aplica el producto dejando actuar por 30 minutos, se termina de secar y se plancha, luego se lava y se seca con secador",
      price: "25.000",
    },
    {
      id: 3,
      name: "Lifting de pestañas con tinte",
      duration: "60 min",
      description:
        "Se pega pestañas en bigudíes, aplicación de liquido 1 por 15 minutos, aplicación liquido 2 por 15 minutos, aplicación tinte retiro de bigudíes.",
      price: "15.000",
    },
    {
      id: 4,
      name: "Limpieza Facial básica",
      duration: "60 min",
      description:
        "Aplicación de leche de limpieza, exfoliación, tonificación, mascarilla, serum, para finalizar crema sellante según tipo de piel.",
      price: "20.000",
    },
  ];

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

  const [currentStep, setCurrentStep] = useState(1);
  const [value, onChange] = useState(new Date());

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const HourComponent = ({ hour }) => {
    return (
      <button
        type="button"
        class="inline-block px-6 py-2.5 bg-headline w-20  text-white font-medium text-xs leading-tight uppercase border-2 hover:bg-select hover:border-white rounded shadow-md transition duration-150 ease-in-out"
      >
        {hour.hour}
      </button>
    );
  };

  const Step1 = () => {
    if (currentStep === 1)
      return (
        <div className="h-80 flex gap-10 w-full justify-center">
          <div className="flex flex-col gap-2 basis-2/4">
            <span className="text-2xl text-text_color">
                Seleccione una nueva fecha en el calendario
            </span>
            <span/>
            <span/>
            <span/>
            <span/>
            <div>
              <Calendar
                className={"bg-primary"}
                onChange={onChange}
                value={value}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 basis-2/4">
            <span className="text-2xl text-text_color"> 
                Seleccione la hora y el profesional con el que desea ser atendido/a
            </span>
            <span/>
            <div className="flex flex-col gap-2 overflow-auto h-full py-2 pr-2">
              {dataServices.length > 0
                ? dataServices.map((element) => (
                    <AccordionComponent
                      elementAccordion={element}
                      key={element.id}
                    />
                  ))
                : ""}
              {/* <AccordionComponent /> */}
            </div>
          </div>
        </div>
      );
    return "";
  };

  const Step2 = () => {
    if (currentStep === 2) return <div className="h-80">Segunda vista</div>;
    return "";
  };

  return (
    <div className="grid place-items-center bg-background h-screen">
      <div
        className="bg-white p-5 rounded-md flex flex-col gap-5 max-w-lg md:max-w-6xl m-6 shadow-xl"
        style={{
          width: "80vw",
        }}
      >
        <p className="text-3xl text-center font-bold text-text_color">
            Solicitud de modificación de reserva
        </p>
        <div className="mx-40 p-4 text-center">
          <div className="flex items-center">
            <StepComponent
              step={{
                name: "Fecha/Hora",
                id: 1,
                currentStep: currentStep,
              }}
            />
            <div
              className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                currentStep <= 1 ? "border-border_secondary" : "border-primary"
              }`}
            ></div>
            <StepComponent
              step={{
                name: "Comentario",
                id: 2,
                currentStep: currentStep,
              }}
            />
          </div>
        </div>
        <Step1 />
        <Step2 />
        <div className="flex justify-between">
          <button
            className={`bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              currentStep === 1 ? "invisible" : ""
            }`}
            onClick={previousStep}
          >
            Atrás
          </button>
          <button
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={nextStep}
          >
            {currentStep < 2 ? "Siguiente" : "Enviar solicitud de modificación"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModifyPage;