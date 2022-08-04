import React from 'react'
import './highlight.style.scss'

const HighlightCard = ({
  liga,
  partida,
  times
}) => {
  return (
    <div className="highlight-card">
      <div className="highlight-card__title">
        {liga.name} <br/>
        <span className="highlight-card__title--light"> {liga.round} </span>
      </div>
      <div className="highlight-card__confronto">
        <div className="highlight-card__time">
          <img src={times.home.logo} alt={times.home.name}/>
        </div>
        <div className="highlight-card__vs">
          vs
        </div>
        <div className="highlight-card__time">
          <img src={times.away.logo} alt={times.away.name}/>
        </div>
      </div>
      <p className="highlight-card__resultado">
        <span> {times.home.name} </span>
        <span> {partida.goals.home} </span>
      </p>
      <p className="highlight-card__resultado">
        <span> {times.away.name} </span>
        <span> {partida.goals.home} </span>
      </p>
      <div className="highlight-card__footer">
        <div className="highlight-card__tempo"> {new Date(partida.fixture.timestamp).getMinutes()}' </div>
      </div>
    </div>
  )
}

export default HighlightCard;