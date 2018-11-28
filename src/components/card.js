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
    }, this.log );
  }

  closeDoor = () => {
    this.setState({
      open: false
    }, this.log );
  }

  log = () => {console.log(this.state.open)};

  render() {
    return(
      <div className="card">
        {!this.state.open &&
          (<div className="closed">
            <h3>{this.props.day}</h3>
            <button onClick={this.openDoor}>Open</button>
          </div>)}
        {this.state.open &&
          (<div className="open">
            <h3>{this.props.day}</h3>
            <h4>{this.props.caption}</h4>
            <img src={this.props.img} alt={this.props.title}/>
            <button onClick={this.closeDoor}>Close</button>
          </div>)}
      </div>
    )
  }
};

export default Card;
