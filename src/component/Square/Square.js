import React from 'react';
import ReactDOM from 'react-dom';
import './Square.css';
class Square extends React.Component {
    constructor(){
        
    }
    render() {
        return (
            <button className="square" onClick={()=>alert(this.props.value)}>
                {this.props.value}
            </button>
        )
    }
}
export default Square;