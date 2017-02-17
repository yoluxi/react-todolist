import React from 'react';
import ReactDOM from 'react-dom';
import Board from "../Board/Board"
import "./Game.css";
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />             
                </div>
                <div className="game-info">
                    <div>status</div>
                    <div>{this.props.value}.</div>
                </div>
            </div>
        )
    }
}

export default Game;