import React from "react";
import TextoInterno from "./TextoInterno";

const TabletComponent = ({ elementTablet, handlerElement, elementValue }) => {
    return (
        <div className="flex border border-border_secondary p-2 rounded-md">
            <div className="flex-direction:row">
                {elementTablet.profs.length > 0
                    ? elementTablet.profs.map((prof) => (
                        <TextoInterno
                        elementValue={elementValue}
                        handlerElement={handlerElement}
                        elementTablet={prof}
                        key={prof.id}
                        />
                    ))
                    : ""}
                {elementTablet.profs.length == 0 ?
                    <div className="ml-2 text-sm">
                        <label htmlFor="helper-radio" className="font-medium text-gray-900 dark:text-gray-300">
                            No existen profesionales disponibles en este horario
                        </label>
                    </div>
                    : ""
                }
            </div>
            <div className="flex items-center ml-20">
                <label htmlFor="helper-radio" className="font-medium text-gray-900 dark:text-gray-300">
                    {elementTablet.hora}
                </label>
            </div>
        </div>
    );
};

export default TabletComponent;
