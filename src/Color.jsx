import React from "react";
import { Input } from "./common/CustomInputs";
import { FormContainer, Container, Button } from "./styles/StyledComponents";
import { useFormik } from "formik";
import * as Yup from "yup";

const VALID_PASSWORD_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

const inputs = [
  {
    id: 1,
    label: "nombre",
    placeholder: "Ingrese su nombre.",
    name: "nombre",
    type: "nombre",
  },
  {
    id: 2,
    label: "color",
    placeholder: "Ingrese su color favorito (formato HEX).",
    name: "color",
    type: "color",
  },
];

export const Color = ({ handleFetchValues }) => {
  const getInitialValues = () => ({
    nombre: "",

    color: "",
  });

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object().shape({
        nombre: Yup.string()
          .trim("No debe tener espacios en blanco")
          .strict()
          .required("Campo Obligatorio"),

        color: Yup.string()
          .trim("No debe tener espacios en blanco")
          .strict()
          .min(4, "El color debe tener al menos 4 caracteres contanto el #")
          .max(7, "El color no debe superar los 7 caracteres contando el #")
          .required("Campo Obligatorio")
          .matches(
            VALID_PASSWORD_REGEX,
            "El color debe comenzar con #, tener al menos 4 caracteres y como máximo 7, contando siempre # como un caracter."
          ),
      })
    );

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    handleFetchValues(values);
    resetForm({ values: "" });
  };

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit,
  });

  return (
    <FormContainer>
      <div>
        <h1>ELIGE TU COLOR</h1>
      </div>
      <form id="login-form" onSubmit={handleSubmit}>
        {inputs.map((campo) => (
          <Container key={campo.id}>
            <Input
              name={campo.name}
              placeholder={campo.placeholder}
              value={values[campo.name]}
              onChange={(e) => setFieldValue(campo.name, e.target.value)}
            />
            {errors[campo.name] && (
              <p
                style={{
                  margin: "0",
                  color: "#FF5555",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                {errors[campo.name]}
              </p>
            )}
          </Container>
        ))}
      </form>
      <Container>
        <Button form="login-form" type="submit">
          Enviar
        </Button>
      </Container>
    </FormContainer>
  );
};
