import React, { useState } from 'react'
import "./css/voteMe.css"
import subject from "../../assets/images/Subject-sin-fondo.png"

interface voteMeProps {
    modalIsOpen: boolean;
}

const voteMe: React.FC<voteMeProps> = (props) => {
    const { modalIsOpen } = props;

  return (
    <div className={`container-modal-voteMe ${modalIsOpen ? 'modal-open' : ''}`}>
        <div className="wrapper-modal">
            <div className="illustration">
                <img src={subject} alt="" />
            </div>
            <div className="desc">
                <h4 className="vote">¿Votarias por mi?</h4>
                <div className="btns">
                    <button type='button' className="btn-vote">Si</button>
                    <button type='button' className="btn-vote">No</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default voteMe;
