import React from 'react'
import './highlight.style.scss'

const HighlightCard = ({
  liga,
  partida,
  times
}) => {
  return (
    <div class="highlight-card">
      <div class="highlight-card__title">
        {liga.name} <br/>
        <span class="highlight-card__title--light"> {liga.round} </span>
      </div>
      <div class="highlight-card__confronto">
        <div class="highlight-card__time">
          <img src={times.home.logo} alt={times.home.name}/>
        </div>
        <div class="highlight-card__vs">
          vs
        </div>
        <div class="highlight-card__time">
          <img src={times.away.logo} alt={times.away.name}/>
        </div>
      </div>
      <p class="highlight-card__resultado">
        <span> {times.home.name} </span>
        <span> {partida.goals.home} </span>
      </p>
      <p class="highlight-card__resultado">
        <span> {times.away.name} </span>
        <span> {partida.goals.home} </span>
      </p>
      <div class="highlight-card__footer">
        <div class="highlight-card__tempo"> {new Date(partida.fixture.timestamp).getMinutes()}' </div>
      </div>
    </div>
  )
}

export default HighlightCard;