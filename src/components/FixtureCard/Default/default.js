import React from "react";
import { padTo2Digits } from "../../../utils/number.utils";
import './default.style.scss'

const Default = ({
  times,
  date,
  partida
}) => {

  return (
    <div className="container-fluid fixture-default-card">
      <div className="row">
        <div className="col-xs-9 separador">
          <div className="fixture-default-card__time">
            <img className="fixture-default-card__img" src={times.home.logo} alt={times.home.name}/>
            <p className="fixture-default-card__nome"> {times.home.name} </p>
            <p className="fixture-default-card__resultado"> {partida.goals.home} </p>
          </div>
          <div className="fixture-default-card__time">
            <img className="fixture-default-card__img" src={times.away.logo} alt={times.away.name}/>
            <p className="fixture-default-card__nome"> {times.away.name} </p>
            <p className="fixture-default-card__resultado"> {partida.goals.away} </p>
          </div>
        </div>
        <div className="col-xs-3">
          <p className="fixture-default-card__info"> 
            <span className="fixture-default-card__horario"> {padTo2Digits(date.getHours())}:{padTo2Digits(date.getMinutes())} </span> <br/>
            <span className="fixture-default-card__data"> {padTo2Digits(date.getDate())}/{padTo2Digits(date.getMonth())} </span>
          </p>
        </div>
        <div className="col-xs-12 fixture-default-card__details"> + detalhes </div>
      </div>
    </div>
  )
}

export default Default;