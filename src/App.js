import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Card from './components/card.js'

class App extends Component {

  revealPresent = () => {
      console.log('click');
      this.toggle = true;
  };

  render() {

    const advent = [
      {
        text: 'First day of Advent',
        present: 'Santa',
        id: 'santa'
      },{
        text: 'Second day of Advent',
        present: 'Present',
        id: 'present'
      },{
        text: 'Third day of Advent',
        present: 'Lights',
        id: 'lights'
      },{
        text: 'Fourth day of Advent',
        present: 'Cracker',
        id: 'cracker'
      },{
        text: 'Fifth day of Advent',
        present: 'Misletoe',
        id: 'misletoe'
      }
      // },{
      //   text: 'Sixth day of Advent',
      //   present: 'Candy Cane'
      // },{
      //   text: 'Seventh day of Advent',
      //   present: 'Carol'
      // },{
      //   text: 'Eighth day of Advent',
      //   present: 'Stocking'
      // },{
      //   text: 'Ninth day of Advent',
      //   present: 'Turkey'
      // },{
      //   text: 'Tenth day of Advent',
      //   present: 'Shepherd'
      // }
    ];



    return (
      <div className="App">
        <header className="App-header">
          <h1>Advent 2018</h1>
        </header>

        <div className="calendar">
          {advent.map((day, i) =>

              <Card
                title={day.text}
              />

            // <div>
            //   <p key={i} className="door" id={day.id}>{day.text}<span> {day.present}</span></p>
            //   <button key={`button-${i}`} onClick={this.revealPresent}>Open</button>
            // </div>
        )}
        </div>



      </div>
    );
  }
}

export default App;
