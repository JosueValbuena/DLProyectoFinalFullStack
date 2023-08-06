import React from "react";
import { CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import logo from "../images/logo.png";

export const Footer = () => {
  return (
    <div className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "60%" }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-white">
            <img alt="logo" src={logo} width="100px" />
            <span className="ms-4 h5 mb-0 font-weight-bold text-white">
              BikeTrail
            </span>
          </a>
          <small className="ms-2 text-white">
            &copy; BikeTrail, 2023. Todos los derechos reservados.
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="white" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </div>
  );
};
export default Footer;
