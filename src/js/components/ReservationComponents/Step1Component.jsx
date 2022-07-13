import React from "react";
import TabletComponent from "./TabletComponent";
import AccordionComponent from "./AccordionComponent";
import WaitingComponent from "./WaitingComponent";

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

const Step1Component = ({ local, setLocal, service, setService, setPrice }) => {
  return (
    <div className="flex h-80 gap-10">
      <div className="flex flex-col gap-2 basis-2/4">
        <span className="font-semibold text-xl">Selecciona el local</span>
        <div className="flex flex-col gap-2 overflow-auto h-full py-2 pr-2">
          {dataLocales.length > 0
            ? dataLocales.map((element) => (
                <TabletComponent
                  elementValue={local}
                  handlerElement={setLocal}
                  elementTablet={element}
                  key={element.title}
                />
              ))
            : ""}
        </div>
      </div>

      {local !== "" ? (
        <div
          id="SelectService"
          className="flex flex-col gap-2 basis-2/4 transition-opacity ease-in-out duration-500"
        >
          <span className="font-semibold text-xl">Selecciona tu servicio</span>
          <div className="flex flex-col gap-2 overflow-auto h-full py-2 pr-2">
            {dataServices.length > 0
              ? dataServices.map((element) => (
                  <AccordionComponent
                    elementValue={service}
                    handlerElement={setService}
                    handlerPrice={setPrice}
                    elementAccordion={element}
                    key={element.id}
                  />
                ))
              : ""}
          </div>
        </div>
      ) : (
        <WaitingComponent text={"Selecciona un local"} />
      )}

      <span></span>
    </div>
  );
};

export default Step1Component;
