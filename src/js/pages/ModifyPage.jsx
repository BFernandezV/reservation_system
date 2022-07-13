import React, { useState, useEffect } from "react";
import AccordionComponent from "../../js/components/ReservationComponents/AccordionComponent";
import StepComponent from "../../js/components/ReservationComponents/StepComponent";
import TabletComponent from "../../js/components/ModifyComponents/TabletComponent";
import Calendar from "react-calendar";
import ModalEstaSeguro from "../components/ModifyComponents/ModalEstaSeguro";
import "../../css/calendar.css";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

const ModifyPage = () => {
  const dataProfesionales1 = [
    {
      id_grupo: 0,
      profs:[
      {
        id: "0",
        nombre: "Matias Gonzales",
        servicios: "Todos los servicios"
      },
      {
        id: "1",
        nombre: "Kylie Andrade",
        servicios: "Todos los servicios"
      }
      ],
      hora: "9:00"
    },
    {
      id_grupo: 1,
      profs:[
      ],
      hora: "10:00"
    },
    {
      id_grupo: 3,
      profs:[
      {
        id: "2",
        nombre: "Matias Gonzales",
        servicios: "Todos los servicios"
      },
      {
        id: "3",
        nombre: "Leo Guzman",
        servicios: "Peluquería"
      }
      ],
      hora: "11:00"
    },
    {
      id_grupo: 4,
      profs:[
      ],
      hora: "12:00"
    },
    {
      id_grupo: 5,
      profs:[
      ],
      hora: "13:00"
    },
    {
      id_grupo: 6,
      profs:[
      {
        id: "4",
        nombre: "Leo Guzman",
        servicios: "Peluquería"
      },
      {
        id: "5",
        nombre: "Anaís Contreras",
        servicios: "Manicure, Pedicure y Limpieza Facial"
      },
      {
        id: "6",
        nombre: "Verónica Bello",
        servicios: "Manicure y Pedicure"
      },
      ],
      hora: "14:00"
    },
    {
      id_grupo: 7,
      profs:[
      {
        id: "7",
        nombre: "Leo Guzman",
        servicios: "Peluquería"
      },
      {
        id: "8",
        nombre: "Anaís Contreras",
        servicios: "Manicure, Pedicure y Limpieza Facial"
      },
      ],
      hora: "15:00"
    },
    {
      id_grupo: 8,
      profs:[

      ],
      hora: "16:00"
    },
  ];
  const dataProfesionales2 = [
    {
      id_grupo: 0,
      profs:[

      ],
      hora: "9:00"
    },
    {
      id_grupo: 1,
      profs:[
        {
          id: "0",
          nombre: "Matias Gonzales",
          servicios: "Todos los servicios"
        },
        {
          id: "1",
          nombre: "Leo Guzman",
          servicios: "Peluquería"
        }
      ],
      hora: "10:00"
    },
    {
      id_grupo: 3,
      profs:[
      {
        id: "2",
        nombre: "Matias Gonzales",
        servicios: "Todos los servicios"
      },
      {
        id: "3",
        nombre: "Leo Guzman",
        servicios: "Peluquería"
      }
      ],
      hora: "11:00"
    },
    {
      id_grupo: 4,
      profs:[
      ],
      hora: "12:00"
    },
    {
      id_grupo: 5,
      profs:[
        {
          id: "4",
          nombre: "Leo Guzman",
          servicios: "Peluquería"
        },
        {
          id: "5",
          nombre: "Anaís Contreras",
          servicios: "Manicure, Pedicure y Limpieza Facial"
        },
      ],
      hora: "13:00"
    },
    {
      id_grupo: 6,
      profs:[
      {
        id: "6",
        nombre: "Leo Guzman",
        servicios: "Peluquería"
      },
      {
        id: "7",
        nombre: "Anaís Contreras",
        servicios: "Manicure, Pedicure y Limpieza Facial"
      },
      {
        id: "8",
        nombre: "Verónica Bello",
        servicios: "Manicure y Pedicure"
      },
      ],
      hora: "14:00"
    },
    {
      id_grupo: 7,
      profs:[

      ],
      hora: "15:00"
    },
    {
      id_grupo: 8,
      profs:[

      ],
      hora: "16:00"
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
    const [local, setLocal] = useState("");
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
            <div align="center">
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
              {value == "Wed Jul 13 2022 00:00:00 GMT-0400 (hora estándar de Chile)" ?
                dataProfesionales1.length > 0
                  ? dataProfesionales1.map((element) => (
                      <TabletComponent
                        elementValue={local}
                        handlerElement={setLocal}
                        elementTablet={element}
                        key={element.id_grupo}
                      />
                    ))
                  : ""
                : dataProfesionales2.length > 0
                  ? dataProfesionales2.map((element) => (
                      <TabletComponent
                        elementValue={local}
                        handlerElement={setLocal}
                        elementTablet={element}
                        key={element.id_grupo}
                      />
                    ))
                  : ""
              }
            </div>
          </div>
        </div>
      );
    return "";
  };

  const Step2 = (handleChange) => {
    if (currentStep === 2) return (
    <div className="h-80">
      <Input
        id="inputName"
        variant="outlined"
        label="Escriba un comentario (Opcional)"
        name="name"
        onChange={(e) => handleChange(e.target)}
      />
    </div>
    )
    return (
      <ModalEstaSeguro/>
    );
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
          {currentStep < 2 ?
            <button
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={nextStep}
            >
              Siguiente
            </button>
            :
            "<ModalEstaSeguro/>"
          }
        </div>
      </div>
    </div>
  );
};

export default ModifyPage;