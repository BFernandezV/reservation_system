import React from "react";
import user from "../../../images/user.png";
import { Input } from "@material-tailwind/react";

const Step3Component = ({
  userData,
  handleChange,
  professional,
  service,
  hour,
  valueCalendar,
  price,
}) => {
  function dateFormat(inputDate, format) {
    //parse the input date
    const date = new Date(inputDate);

    //extract the parts of the date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    //replace the month
    format = format.replace("MM", month.toString().padStart(2, "0"));

    //replace the year
    if (format.indexOf("yyyy") > -1) {
      format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
      format = format.replace("yy", year.toString().substr(2, 2));
    }

    //replace the day
    format = format.replace("dd", day.toString().padStart(2, "0"));

    return format;
  }

  const checkRut = (rut) => {
    // Despejar Puntos
    let valor = rut.value.replace(".", "");
    // Despejar Guión
    valor = valor.replace("-", "");

    // Aislar Cuerpo y Dígito Verificador
    let cuerpo = valor.slice(0, -1);
    let dv = valor.slice(-1).toUpperCase();

    // Formatear RUN
    rut.value = cuerpo + "-" + dv;

    handleChange({ value: rut.value, name: "rut" });

    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if (cuerpo.length < 7) {
      console.log("RUT INCOMPLETO");
      rut.setCustomValidity("RUT Incompleto");
      return false;
    }

    // Calcular Dígito Verificador
    let suma = 0;
    let multiplo = 2;

    // Para cada dígito del Cuerpo
    for (let i = 1; i <= cuerpo.length; i++) {
      // Obtener su Producto con el Múltiplo Correspondiente
      let index = multiplo * valor.charAt(cuerpo.length - i);

      // Sumar al Contador General
      suma = suma + index;

      // Consolidar Múltiplo dentro del rango [2,7]
      if (multiplo < 7) {
        multiplo = multiplo + 1;
      } else {
        multiplo = 2;
      }
    }

    // Calcular Dígito Verificador en base al Módulo 11
    let dvEsperado = 11 - (suma % 11);

    // Casos Especiales (0 y K)
    dv = dv == "K" ? 10 : dv;
    dv = dv == 0 ? 11 : dv;

    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (dvEsperado != dv) {
      console.log("RUT INVALIDO");
      rut.setCustomValidity("RUT Inválido");
      return false;
    }

    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity("");
  };

  return (
    <div className="h-80 flex gap-10 w-full justify-center">
      <div className="flex flex-col basis-2/5 gap-5">
        <span className="font-semibold text-xl">Ingresa tus datos</span>
        <Input
          id="inputName"
          variant="outlined"
          label="Nombre completo"
          name="name"
          onChange={(e) => handleChange(e.target)}
        />
        <Input
          minLength="9"
          maxLength="10"
          onInput={(e) => checkRut(e.target)}
          name="rut"
          value={userData.rut}
          variant="outlined"
          label="Rut"
        />
        <Input
          variant="outlined"
          label="Correo electrónico"
          value={userData.mail}
          onInput={(e) => handleChange(e.target)}
          name="mail"
        />
      </div>

      <div className="flex basis-2/4 gap-3 h-52 items-center border border-border_secondary justify-center p-3">
        <img className="object-none" src={user}></img>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-text_color">{professional}</span>
          <span className="text-text_secondary">
            Servicio <span className="text-text_color">{service}</span>
          </span>
          <div className="flex gap-2">
            <span className="text-text_secondary">
              Fecha
              <span className="text-text_color">
                {" "}
                {dateFormat(valueCalendar, "dd-MM-yyyy")}
              </span>
            </span>
            <span className="text-text_secondary">
              Horario
              <span className="text-text_color"> {hour}</span>
            </span>
          </div>
          <span className="font-semibold text-text_color">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default Step3Component;
