import { Link } from "gatsby";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import "../global-styles/estilo.scss"
const sectionBannerHome = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccionBanner[0];

  const Imagen = data.imagen1[0].url;

  const descripcion = data.desccription;
  const texto_pregunta = data.texto_pregunta;
  let Lista = [
    <li key="id1">
      <img
          alt=""
        key="id1"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
     Impulsamos tus ventas en menos de 30 días.
    </li>,
    <li key="id2">
      <img
      alt=""
        key="id2"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Maximizamos tu facturación en menos de 90 días.
    </li>,
    <li key="id3">
      <img
          alt=""
        key="id3"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Escalamos tus resultados en el plazo de 180 días.
    </li>,
    <li key="id4">
      <img
          alt=""
        key="id4"
        className="img-check"
        src="https://agencialosnavegantes.s3.amazonaws.com/check_2fe11dda57.png"
      ></img>
      Convertimos el 2021 en tu mejor año.
    </li>,
  ];
  return (
    <div style={{ paddingTop:"200px", backgroundColor: "blue", paddingBottom: "40px" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          id="columnas"
          style={{ alignItems: "center" }}
        >
          <Col sm={6} style={{ color: "#fff" }}>
            <h1 style={{ color: "#fff", fontSize: "60px" }} className="encabezado">
              Navegantes de <br></br> Medios Digitales
            </h1>
            <br></br>
            <ul
              style={{
                fontSize: "21px",
                listStyle: "none",
              }}
            >
              {Lista}
            </ul>
            <p style={{textAlign:"justify"}}>{descripcion}</p>
            <h3 style={{textAlign:"justify"}}>{texto_pregunta}</h3>
            
            <div style={{ position:"absolute" }}>
            

            <Link
              to="#agencia"
               style={{ fontSize:"25px", fontWeight:"700", color: "#fff", textDecoration: "none" }}
            >
              
             <span className="estiloLink " ><i  className="bi bi-chevron-down"></i>Conócenos!</span>
            </Link>
            </div>
          </Col>
          <Col sm={6} style={{ color: "#fff", textAlign: "center" }}>
            <img className="img-fluid imagenBannerHome" alt="" src={Imagen}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionBannerHome;
