import React, { useContext, useState } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import logo from "../images/logo.png";
import "./login.css";
import { useForm } from "react-hook-form";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";
import axios from "axios";

export default function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(DataContext);
  const navigate = useNavigate();

  const getUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get("https://bicimarketplace.onrender.com/user", {
        headers: { Authorization: "Bearer " + token }
      });
      setUser(data);
    } catch (error) {
      console.log(error)
    }
  }

  const getUserLogin = async (data) => {
    try {
      const { email, password } = data;
      const response = await axios.post("https://bicimarketplace.onrender.com/login", { email, password })
      setIsAuthenticated(true);
      localStorage.setItem("token", response.data)
      await getUser();
      setTimeout(() => {
        navigate("/");
      }, 1500)
    } catch (error) {
      console.log("Credenciales incorrectas")
    }
  }

  const onSubmit = (data) => {
    getUserLogin(data);
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
                    style={{ color: "#000" }}
                    wrapperClass="mb-4 "
                    label="Email address"
                    id="email"
                    type="email"
                    size="lg"
                    placeholder="Ingrese email"
                    {...register("email")}
                  />
                  {errors.password && <p>This field is required</p>}
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="password"
                    type="password"
                    size="lg"
                    placeholder="Ingrese contraseña"
                    {...register("password", { required: true })}
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
                {isAuthenticated && <Message message="Usuario aunteticado correctamente" />}
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
