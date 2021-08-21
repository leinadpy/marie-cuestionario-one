import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import BotonCerrarSesion from "./../elements/BotonCerrarSesion";

const Menu = () => {
  const { usuario } = useAuth();
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            <img
              src="/logo.png"
              alt="Logo Nutri MARIE"
              width="100"
              height="57"
            />
          </Nav.Link>
          {usuario && (
            <Nav.Link as={Link} to="/pacientes">
              <img
                src="/list.png"
                alt="Pacientes"
                width="50"
                height="50"
                style={{ marginLeft: "20px" }}
              />
            </Nav.Link>
          )}
        </Nav>
        <Nav>
          <Nav.Link
            href="https://www.instagram.com/nutrimarieojeda/"
            target="_blank"
          >
            <AiFillInstagram
              style={{
                width: "50px",
                height: "50px",
                padding: "0",
                color: "#A1B947",
                marginRight: "10px",
              }}
            />
          </Nav.Link>
          <Nav.Link
            href="https://api.whatsapp.com/send/?phone=595974904254&text&app_absent=0"
            target="_blank"
          >
            <IoLogoWhatsapp
              style={{
                width: "50px",
                height: "50px",
                padding: "0",
                color: "#A1B947",
                marginRight: "10px",
              }}
            />
          </Nav.Link>
          <Nav.Link href="mailto:marienut250392@gmail.com">
            <GrMail
              style={{
                width: "50px",
                height: "50px",
                padding: "0",
                color: "#A1B947",
                marginRight: "10px",
              }}
            />
          </Nav.Link>
          {!usuario && (
            <Nav.Link as={Link} to="/iniciar-sesion">
              <FiLogIn
                style={{
                  width: "50px",
                  height: "50px",
                  padding: "0",
                  color: "#A1B947",
                  marginRight: "10px",
                }}
              />
            </Nav.Link>
          )}
        </Nav>
        {usuario && <BotonCerrarSesion />}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
