import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      canOpen: false
    }
  }

  checkDate = () => {
    const now = new Date();
    const dateToday = now.getDate();
    console.log(dateToday);
    if (this.props.day < dateToday) {
      this.setState({
        canOpen: true
      });
    }
  }

  openDoor = () => {
    const now = new Date();
    const dateToday = now.getDate();
    if (this.props.day < dateToday) {
      this.setState({
        canOpen: true,
        open: true
      });
    }
  }

  closeDoor = () => {
    this.setState({
      open: false
    });
  }



  render() {
    return(
      <div className="card">
        {!this.state.canOpen &&
          (<div className="closed">
            <button onClick={this.openDoor}>{this.props.day}</button>
          </div>)}
          {this.state.canOpen &&
          (<div className="open">
            <h4>{this.props.caption}</h4>
            <button onClick={this.closeDoor}><img src={this.props.img} alt={this.props.caption}/></button>
          </div>)}
      </div>
    )
  }
};

export default Card;
