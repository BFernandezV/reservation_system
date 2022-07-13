import React from "react";

const WaitingComponent = ({ text }) => {
    return (
        <div className="rounded-md w-full basis-2/4 p-4">
            <div className="animate-pulse flex h-full">
                <div className="flex flex-col py-1 text-center justify-between w-full">
                    <div className="h-2 bg-border_secondary rounded"></div>
                    <div className="h-2 bg-border_secondary rounded"></div>
                    <div className="h-2 bg-border_secondary rounded"></div>
                    <div className="h-2 bg-border_secondary rounded"></div>
                    <span className="align-center text-text_secondary">{text}</span>
                    <div className="h-2 bg-border_secondary rounded"></div>
                    <div className="h-2 bg-border_secondary rounded"></div>
                    <div className="h-2 bg-border_secondary rounded"></div>
                    <div className="h-2 bg-border_secondary rounded"></div>
                    <div className="h-2 bg-border_secondary rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default WaitingComponent;
