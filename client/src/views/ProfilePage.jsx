import React, { useContext } from "react";
import Bolso from "../images/Bolso.jpeg";
import R10BLANCA from "../images/R10BLANCA.jpg";
import Lentes from "../images/Lentes.jpg";
import Casco from "../images/Casco.jpg";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export function ProfilePage() {

  const {user} = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#cdd3d5ff" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#220c10ff", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <MDBBtn
                    outline
                    color="dark"
                    style={{ height: "36px", overflow: "visible" }}
                  >
                    Editar Perfil
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h5">{user[0].nombre.charAt(0).toUpperCase()+user[0].nombre.slice(1)}</MDBTypography>
                  <MDBCardText>{user[0].direccion.charAt(0).toUpperCase()+user[0].direccion.slice(1)}</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <MDBCardText onClick={() => navigate("/user-posts")} className="btn btn-primary me-5">
                    Mis Publicaciones
                  </MDBCardText>
                  <div>
                    <MDBCardText className="mb-1 h5">25</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Compras
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">2 años</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Suscrito
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">Premium</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Categoria
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Información</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      Email: {user[0].email}
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-0">
                      Telefono: {user[0].telefono}
                    </MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Ultimas Compras
                  </MDBCardText>
                  <MDBCardText className="mb-0">
                    <a href="#!" className="text-muted">
                      Ver mas
                    </a>
                  </MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src={Bolso} className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src={R10BLANCA} className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src={Lentes} className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src={Casco} className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
