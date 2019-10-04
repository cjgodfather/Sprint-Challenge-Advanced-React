import React from "react";

const PlayerCard = props => {
  return (
    <div data-testid="player-card" className="playerCard">
      <h3>name:{props.name}</h3>
      <p>country:{props.country}</p>
      <p>search number:{props.searches}</p>
    </div>
  );
};

export default PlayerCard;
