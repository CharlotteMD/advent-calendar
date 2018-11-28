import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  openDoor = () => {
    this.setState({
      open: true
    });
  }

  closeDoor = () => {
    this.setState({
      open: false
    });
  }


  render() {
    return(
      <div className="card">
        {!this.state.open &&
          (<div className="closed">
            <button onClick={this.openDoor}>{this.props.day}</button>
          </div>)}
        {this.state.open &&
          (<div className="open">
            <h4>{this.props.caption}</h4>
            <button onClick={this.closeDoor}><img src={this.props.img} alt={this.props.caption}/></button>
          </div>)}
      </div>
    )
  }
};

export default Card;
