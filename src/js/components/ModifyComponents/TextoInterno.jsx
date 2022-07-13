import React from "react";

const TextoInterno = ({ elementTablet, handlerElement, elementValue }) => {
    return (
        <div className="flex">
            <div className="flex items-center h-5">
                <input
                    name="radiobtn"
                    aria-describedby="helper-radio-text"
                    type="radio"
                    value={elementTablet.id}
                    checked={elementValue === elementTablet.id}
                    onChange={(event) => handlerElement(event.currentTarget.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
            </div>
            <div className="flex items-center"/>
            <div className="ml-2 text-sm">
                <label htmlFor="helper-radio" className="font-medium text-gray-900 dark:text-gray-300">
                    {elementTablet.nombre}
                </label>
                <p id="helper-radio-text" className="text-xs font-normal text-text_secondary">
                    {elementTablet.servicios}
                </p>
            </div>
        </div>
    );
};

export default TextoInterno;
