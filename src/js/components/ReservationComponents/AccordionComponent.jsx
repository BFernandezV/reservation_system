import React from "react";

const AccordionComponent = ({ elementAccordion }) => {
  const removeShow = () => {
    const element = document.querySelector(
      `#collapseExample${elementAccordion.id}`
    );
    setTimeout(function () {
      if (element.getAttribute("open") === "1") {
        console.log("entro");
        element.classList.remove("show");
        element.setAttribute("open", "0");
      } else {
        element.setAttribute("open", "1");
      }
    }, 500);
    console.log(element.classList);
  };
  return (
    <div>
      <p className="md:space-x-1 space-y-1 md:space-y-0">
        <button
          className=" accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    transition
                    focus:outline-none
                    border border-border_secondary rounded-md
                    "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapseExample${elementAccordion.id}`}
          aria-controls={`collapseExample${elementAccordion.id}`}
        >
          <div className="flex justify-between w-full">
            <div className="flex">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <div className="ml-2 text-sm">
                <label className="font-medium text-gray-900 dark:text-gray-300">
                  {elementAccordion.name}
                </label>
                <p className="text-xs font-normal text-text_secondary">{`Horario de atencion: ${elementAccordion.duration}`}</p>
              </div>
            </div>
            <span className="mr-5 align-bottom inline">
              $ {elementAccordion.price}
            </span>
          </div>
        </button>
      </p>
      <div
        className="accordion-collapse collapse"
        id={`collapseExample${elementAccordion.id}`}
        open="0"
      >
        <div className="block border border-border_secondary rounded-md p-2 shadow-lg text-justify">
          <span>Description:</span> {elementAccordion.description}
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
