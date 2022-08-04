import React from "react";
import Carousel from "../Carousel/carousel";
import FixtureCard from "../FixtureCard";

const LiveSection = () => {
  return (
    <section className="container">
      <h2> Ao vivo </h2>
      <Carousel 
        data={[{
          liga:{},
          partida:{goals: {}, fixture: {}},
          times:{home: {}, away: {}}
        }, {
          liga:{},
          partida:{goals: {}, fixture: {}},
          times:{home: {}, away: {}}
        }, {
          liga:{},
          partida:{goals: {}, fixture: {}},
          times:{home: {}, away: {}}
        }]}
        render={(item) =>
          <FixtureCard.Highlight {...item}></FixtureCard.Highlight>
        }
      />
    </section>
  );
};

export default LiveSection;
