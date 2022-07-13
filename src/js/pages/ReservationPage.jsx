import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import StepComponent from "../components/ReservationComponents/StepComponent";
import Step1Component from "../components/ReservationComponents/Step1Component";
import Step2Component from "../components/ReservationComponents/Step2Component";
import Step3Component from "../components/ReservationComponents/Step3Component";
import "../../css/calendar.css";
import { Button } from "@material-tailwind/react";

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

const ReservationPage = () => {
  const [init, setInit] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [valueCalendar, onChangeCalendar] = useState(new Date());
  const [local, setLocal] = useState("");
  const [service, setService] = useState("");
  const [professional, setProfessional] = useState("");
  const [hour, setHour] = useState("");
  const [price, setPrice] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    rut: "",
    mail: "",
  });

  let navigate = useNavigate();

  const buttonNext = document.querySelector("#buttonNext");
  const textAlert = document.querySelector("#textAlert");

  const handleChange = ({ name, value }) => {
    console.log("Estos son los valores: ", name, value);
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    init && getLocales();
    local !== "" && getServices();
    console.log(valueCalendar);
  }, [local]);

  const getLocales = () => {
    setInit(false);
    console.log("SE BUSCAN LOCALES");
    //Consulta para traer locales
  };

  const getServices = () => {
    console.log("SE BUSCAN SERVICIOS");
    //Acá consulta para traer servicios.
  };

  const nextStep = () => {
    if (currentStep === 1 && (local === "" || service === "")) {
      textAlert.style.opacity = 1;
      buttonNext.classList.remove("!bg-primary");

      buttonNext.classList.add("bg-danger");
      return;
    }

    if (
      currentStep === 2 &&
      (professional === "" || hour === "" || valueCalendar === "")
    ) {
      textAlert.style.opacity = 1;
      buttonNext.classList.remove("!bg-primary");
      buttonNext.classList.add("bg-danger");
      return;
    }

    if (
      currentStep === 3 &&
      (userData.name === "" || userData.rut === "" || userData.mail === "")
    ) {
      textAlert.style.opacity = 1;
      document.querySelector("#inputName").setAttribute("error", true);
      buttonNext.classList.remove("!bg-primary");
      buttonNext.classList.add("bg-danger");
      return;
    }

    textAlert.style.opacity = 0;
    buttonNext.classList.remove("!bg-danger");
    buttonNext.classList.add("!bg-primary");
    currentStep !== 3
      ? setCurrentStep(currentStep + 1)
      : navigate("../", { replace: true });
  };

  const previousStep = () => {
    textAlert.style.opacity = 0;
    buttonNext.classList.remove("!bg-danger");
    buttonNext.classList.add("!bg-primary");
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="grid place-items-center  bg-background h-screen">
      <div
        className="bg-white p-5 rounded-md flex flex-col gap-5 max-w-lg md:max-w-6xl m-6 shadow-xl"
        style={{
          width: "80vw",
        }}
      >
        <p className="text-3xl text-center font-bold text-text_color">
          Reserva tu cita
        </p>
        <div className="mx-20 p-4 text-center">
          <div className="flex items-center">
            <StepComponent
              step={{
                name: "Local/Servicio",
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
                name: "Profesional/Fecha/Hora",
                id: 2,
                currentStep: currentStep,
              }}
            />
            <div
              className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                currentStep <= 2 ? "border-border_secondary" : "border-primary"
              }`}
            ></div>
            <StepComponent
              step={{
                name: "Formulario/Pago",
                id: 3,
                currentStep: currentStep,
              }}
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-2">
            <span className="text-2xl text-text_color">
              {titles[currentStep - 1].title}
            </span>
            <span className="text-xl text-text_secondary">
              {titles[currentStep - 1].subtitle}
            </span>
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </div>
        {currentStep === 1 && (
          <Step1Component
            local={local}
            setLocal={setLocal}
            service={service}
            setService={setService}
            setPrice={setPrice}
          />
        )}
        {currentStep === 2 && (
          <Step2Component
            professional={professional}
            setProfessional={setProfessional}
            onChangeCalendar={onChangeCalendar}
            valueCalendar={valueCalendar}
            hour={hour}
            setHour={setHour}
          />
        )}
        {currentStep === 3 && (
          <Step3Component
            userData={userData}
            handleChange={handleChange}
            professional={professional}
            service={service}
            hour={hour}
            valueCalendar={valueCalendar}
            price={price}
          />
        )}
        <div className="flex justify-between">
          <Button
            id="buttonBack"
            className={`!bg-primary ${currentStep === 1 ? "invisible" : ""}`}
            onClick={previousStep}
          >
            Atrás
          </Button>
          <span id="textAlert" className="text-danger opacity-0 text-center">
            ¡Completa con todos los campos necesarios!
          </span>
          <Button id="buttonNext" className="!bg-primary" onClick={nextStep}>
            {currentStep < 3 ? "Siguiente" : "Pagar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
