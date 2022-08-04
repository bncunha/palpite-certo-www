import React from "react";
import FixtureCard from "../FixtureCard";

const LastFixtures = () => {
  return (
    <div className="container">
      <h2> Últimas partidas </h2>
      <div className="fixtures">
        <FixtureCard.Default 
          times={{home: {}, away: {}}} 
          date={new Date()} 
          partida={{goals: {}, fixture: {}}}
        />
      </div>
    </div>
  )
}

export default LastFixtures;