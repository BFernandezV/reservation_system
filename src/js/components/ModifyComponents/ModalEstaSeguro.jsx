import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function ModalEstaSeguro() {
  const [open, setOpen] = useState(false);
 
  const handleOpen = (value) => setOpen(!open);
 
  return (
    <Fragment>
      <Button
        className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpen} 
        variant="gradient">
        Enviar solicitud de modificación
      </Button> 
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>¿Esta seguro de enviar esta solicitud?</DialogHeader>
        <DialogBody divider>
          Al realizar esta modificación perderá su hora de reserva y la solicitud quedará a espera de ser revisada
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="white"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
          <Button variant="gradient" color="#006fff" onClick={handleOpen}>
            <span>Aceptar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}