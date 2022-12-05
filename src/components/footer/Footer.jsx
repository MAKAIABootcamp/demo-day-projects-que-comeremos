import React from "react";
import "./footer.scss";
import socialFbb from "../../assets/facebook.png";
import socialInsta from "../../assets/instagram.png";
import socialTwi from "../../assets/twitter.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <section className="">
            <form action="">
              <div className="formRecomendations row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Recomendaciones</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      placeholder="Escribe aqui"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <button className="sendRecomendations">Enviar</button>
                </div>
              </div>
            </form>
          </section>
          <section className="socialWebsites">
            <button className="socialButton">
              <img
                className="imgSocial"
                src={socialFbb}
                alt="Boton Facebook"
              ></img>
            </button>
            <button className="socialButton">
              <img
                className="imgSocial"
                src={socialInsta}
                alt="Boton Facebook"
              ></img>
            </button>
            <button className="socialButton">
              <img
                className="imgSocial"
                src={socialTwi}
                alt="Boton Facebook"
              ></img>
            </button>
          </section>
          <section className="info">
            <div className="d-flex flex-wrap-nowrap">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Contacto</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="info__a text-black">
                      <strong>Direccion:</strong> A la vuelta de la ezquina de
                      martin el revueltero
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="info__a text-black">
                      <strong>Telefono:</strong> 123456789
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="info__a text-black">
                      <strong>Celular:</strong> +57 123456789
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="info__a text-black">
                      <strong>Correo:</strong> quecomeremoshoy@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
