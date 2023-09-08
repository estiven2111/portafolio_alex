import React, { useState } from "react";
import "./css/voteMe.css";
import subject from "../../assets/images/Subject-sin-fondo.png";

interface voteMeProps {
  modalIsOpen: boolean;
}

const voteMe: React.FC<voteMeProps> = (props) => {
  const { modalIsOpen } = props;
  const [personalData, setPersonalData] = useState<boolean>(false)

  const fillOutFields = () => {
    setPersonalData(true);
  }
  return (
    <div
      className={`container-modal-voteMe ${modalIsOpen ? "modal-open" : ""}`}
    >
      <div className="wrapper-modal">
        <div className="illustration">
          <img src={subject} alt="" />
        </div>
        <div className="desc">
          <div className={`simpleVote ${personalData ? 'hidden' : ''}`}>
            <h4 className="vote">¿Votarias por mi?</h4>
            <div className="btns">
              <button type="button" className="btn-vote">
                Si
              </button>
              <button type="button" className="btn-vote">
                No
              </button>
            </div>
            <button onClick={fillOutFields} type="button" className="btn-fields">
              ¡Llena tus datos!
            </button>
          </div>
          <hr />
          <div className={`container-personal-data ${personalData ? 'show' : ''}`}>
            <form>
              <input
                type="text"
                name="nombre"
                id="nameField"
                placeholder="Nombre Completo"
              />
              <input
                type="number"
                name="cedula"
                id="indentField"
                placeholder="# Cédula"
              />
              <input
                type="email"
                name="correo"
                id="emailField"
                placeholder="Correo Electrónico"
              />
            </form>
            <h4 className="vote">¿Votarias por mi?</h4>
            <div className="btns">
              <button type="button" className="btn-vote">
                Si
              </button>
              <button type="button" className="btn-vote">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default voteMe;
