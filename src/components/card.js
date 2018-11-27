import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


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
      <div>
        {!this.state.open &&
          (<div className="card">
            <h3>{this.props.title}</h3>
            <h4>SubTitle</h4>
            <button onClick={this.openDoor}>Open</button>
          </div>)}
        {this.state.open &&
          (<div className="card">
            <h3>{this.props.title}</h3>
            <h4>Door is open!</h4>
            <p>{this.props.img}</p>
            <img src={`../../images/${this.props.img}.jpg`} alt={this.props.title}/>
            <button onClick={this.closeDoor}>Close</button>
          </div>)}
      </div>
    )
  }
};

export default Card;
