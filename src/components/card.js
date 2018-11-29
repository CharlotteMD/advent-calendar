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
      })} else {
      const alert = document.getElementById('alert');
      alert.style = "display: block;"
    }
  }


  closeDoor = () => {
    this.setState({
      open: false,
      canOpen: false
    });
  }

  closeAlert = () => {
    const alert = document.getElementById('alert');
    alert.style = "display: none;"
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
            <h5>{this.props.day}</h5>
            <h4>{this.props.caption}</h4>
            <button onClick={this.closeDoor}><img src={this.props.img} alt={this.props.caption}/></button>
          </div>)}

          <div id="alert">
            <p>Stop trying to open your presents early!</p>
          <img src="http://www.simplygod101.com/wp-content/uploads/2015/12/12-25devo-550x330.jpg" alt="Too early!"/>
            <button onClick={this.closeAlert}>x</button>
          </div>
      </div>
    )
  }
};

export default Card;
