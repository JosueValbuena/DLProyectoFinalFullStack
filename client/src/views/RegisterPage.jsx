import React from "react";
import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import logo from "../images/logo.png";
import "./login.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const navigate = Navigate();
    const { nombre, email, direccion, ciudad, telefono, contrasena } = data;
    try {
      const response = await axios.post("http://localhost:3001/register", {
        nombre,
        email,
        direccion,
        ciudad,
        telefono,
        contrasena,
      });

      console.log("Respuesta del servidor:", response.data);
      navigate("/login");
      // Aquí puedes realizar acciones según la respuesta del servidor, como redireccionar o mostrar un mensaje de éxito.
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario.
    }
  };

  return (
    <div className="main bg-customs shadow">
      <MDBContainer className="main-center rounded-3">
        <div className="text-center m-3">
          <h3 style={{ color: "#eee" }}>Formulario de Registro</h3>
        </div>
        <div className="col-md-12">
          <MDBRow>
            <MDBCol col="12" md="5" className="ml-5">
              <img src={logo} className="img-logo p-5" alt="logo" />
            </MDBCol>
            <MDBCol col="12" md="6" className="d-flex align-items-center">
              <div className="col-10 ml-5 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Ingresar Nombre"
                    id="nombre"
                    type="text"
                    size="lg"
                    {...register("nombre")}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="email"
                    type="email"
                    size="lg"
                    {...register("email")}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Direccion"
                    id="direccion"
                    type="text"
                    size="lg"
                    {...register("direccion")}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Ciudad"
                    id="ciudad"
                    type="text"
                    size="lg"
                    {...register("ciudad")}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Telefono"
                    id="telefono"
                    type="number"
                    size="lg"
                    {...register("telefono")}
                  />
                  {errors.password && <p>This field is required</p>}
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Contraseña"
                    id="contraseña"
                    type="password"
                    size="lg"
                    {...register("contrasena", { required: true })}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Confirmar Contraseña"
                    id="confirmar-contraseña"
                    type="password"
                    size="lg"
                    {...register("confirmar-password", { required: true })}
                  />
                  <div className="text-center text-md-start mt-4 pt-2">
                    <button
                      className="mb-0 px-5 btn btn-dark btn-"
                      size="lg"
                      type="submit"
                    >
                      Registrar
                    </button>
                  </div>
                </form>
              </div>
            </MDBCol>
          </MDBRow>
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5">
            <div className=" mb-3 mb-md-0 "></div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}
