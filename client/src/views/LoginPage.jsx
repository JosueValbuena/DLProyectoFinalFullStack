import { useContext } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import logo from "../images/logo.png";
import "./login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../context/DataContext";

export default function LoginPage() {
  const { setData, setIsAuthenticated } = useContext(DataContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, contrasena } = data;
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        contrasena,
      });

      console.log("Respuesta del servidor:", response.data);
      if (response.data.mensaje === "bad") {
        navigate("/login/");
      } else {
        setIsAuthenticated(true);
        navigate("/user-profile/");
        setData(response.data);
      }
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
          <h3 style={{ color: "#eee" }}>Iniciar Sesión</h3>
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
                    style={{ color: "#eee" }}
                    wrapperClass="mb-4 "
                    label="Email address"
                    id="email"
                    type="email"
                    size="lg"
                    {...register("email")}
                  />
                  {errors.password && <p>This field is required</p>}
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="password"
                    type="password"
                    size="lg"
                    {...register("contrasena", { required: true })}
                  />
                  <div className="text-center text-md-start mt-4 pt-2">
                    <button
                      className="mb-0 px-5 btn btn-dark btn-"
                      size="lg"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </MDBCol>
          </MDBRow>
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5">
            <div className="text-dark mb-3 mb-md-0"></div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}
