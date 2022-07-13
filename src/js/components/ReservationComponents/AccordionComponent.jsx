import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const AccordionComponent = ({ elementAccordion, handlerPrice, handlerElement, elementValue }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <Fragment>
            <Accordion open={open === 1} onClick={() => handleOpen(1)}>
                <AccordionHeader className="!border border-border_secondary p-2 rounded-md">
                    <div className="flex justify-between w-full">
                        <div className="flex items-center">
                            <input
                                name="default-radio"
                                aria-describedby="helper-radio-text"
                                type="radio"
                                value={elementAccordion.name}
                                checked={elementValue === elementAccordion.name}
                                onChange={(event) => {
                                    handlerElement(event.currentTarget.value);
                                    handlerPrice(elementAccordion.price);
                                }}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <div className="ml-2 text-sm">
                                <label className="font-medium text-gray-900 dark:text-gray-300">{elementAccordion.name}</label>
                                <p className="text-xs font-normal text-text_secondary text-left">{`Horario de atencion: ${elementAccordion.duration}`}</p>
                            </div>
                        </div>
                        <span className="align-bottom inline">$ {elementAccordion.price}</span>
                    </div>
                </AccordionHeader>
                <AccordionBody className="!border border-border_secondary p-2 rounded-md">{elementAccordion.description}</AccordionBody>
            </Accordion>
        </Fragment>
    );
};

export default AccordionComponent;
