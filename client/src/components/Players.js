import React, { Component } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
import "../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries } from "react-vis";

class Players extends Component {
  state = { players: [], graph: [], displayG: false };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => res.data)
      .then(data => this.setState({ players: data }));
  }

  clickHandler = () => {
    const graphArr = this.state.players.map((player, idx) => {
      return { x: idx, y: player.searches };
    });
    this.setState({ graph: graphArr, displayG: !this.state.displayG });
  };
  render() {
    console.log(this.state.players);
    return (
      <div data-testid="playerList">
        <button className="btn" onClick={this.clickHandler}>
          {this.state.displayG === true ? `Close Graph` : `Show Graph`}
        </button>
        <XYPlot
          className={this.state.displayG === true ? `display` : `display_none`}
          height={500}
          width={500}
        >
          <LineSeries data={this.state.graph} />
        </XYPlot>

        <div className="playersContainer">
          {this.state.players.map(player => (
            <PlayerCard
              {...this.state}
              key={player.id}
              name={player.name}
              country={player.country}
              searches={player.searches}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Players;
