import React from "react";

const StepComponent = ({ step }) => {
  return (
    <div className="relative">
      <div
        className={`rounded-full transition duration-500 pt-2 ease-in-out h-12 w-12 border-2 ${
          step.currentStep >= step.id
            ? "border-primary"
            : "border-border_secondary"
        } ${step.currentStep > step.id ? "bg-primary" : ""}`}
      >
        <p
          className={`font-semibold text-base ${
            step.currentStep > step.id ? "text-white" : ""
          }`}
        >
          {step.id}
        </p>
      </div>
      <div
        className={`absolute transition duration-500 top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14 text-sm uppercase font-semibold ${
          step.currentStep >= step.id ? "text-primary" : "text-text_secondary"
        }`}
      >
        <p className="text-center font-semibold">{step.name}</p>
      </div>
    </div>
  );
};

export default StepComponent;
