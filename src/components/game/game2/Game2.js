/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import './Game2.css';
import {Namedata} from "../../biodata/Biodata";


class Game2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "0",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ],
      winner: null,
    }
  }

  handleClick(index) {
    if(this.state.board[index] === "" && !this.state.winner) {
      this.state.board[index] = this.state.currentTurn;
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        winner: this.checkForWinner(),
      })
    }
  }

  checkForWinner() {
    var currentTurn = this.state.currentTurn;
    var symbols = this.state.board;
    var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    return winningCombos.find(function(combo) {
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        return currentTurn
      } else {
        return false
      }
    })
  }
  
  render() {
    return (
      <div className="app-container">
        <Namedata.Consumer>
          {props => <h1 className="Game2heading"><span>Hey {props.name}✋, </span>This is a Tic Tac Toe Game</h1>}
        </Namedata.Consumer>
        <div className="board">
        {this.state.board.map((cell, index) => {
          return <div key={index} onClick={() => this.handleClick(index)} className="square">{cell}</div>;
        })}
        </div>
        {this.state.winner ? <h2 className="winner">{`The final winner: ${this.state.winner}`}</h2> : null}
      </div>
    )
  }
}

export default Game2;