import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Card from './components/card.js'

import image1 from './images/background/lights.jpeg';
import image2 from './images/background/dog.jpeg';
import image3 from './images/background/presents.jpeg';
import image4 from './images/background/bauble.jpeg';
import image5 from './images/background/tree.jpeg';
import image6 from './images/background/cookies.jpeg';
import image7 from './images/background/lantern.jpeg';
import image8 from './images/background/reindeer.jpeg';
import image9 from './images/background/town.jpeg';
import image10 from './images/background/wreath.jpeg';

import dog1 from './images/days/1.jpg';
import dog2 from './images/days/2.jpg';
import dog3 from './images/days/3.jpg';
import dog4 from './images/days/4.jpg';
import dog5 from './images/days/5.jpg';
import dog6 from './images/days/6.jpg';
import dog7 from './images/days/7.jpg';
import dog8 from './images/days/8.png';
import dog9 from './images/days/9.jpg';
import dog10 from './images/days/10.jpg';
import dog11 from './images/days/11.jpg';
import dog12 from './images/days/12.jpg';
import dog13 from './images/days/13.jpg';
import dog14 from './images/days/14.jpg';
import dog15 from './images/days/15.jpg';
import dog16 from './images/days/16.jpg';
import dog17 from './images/days/17.jpg';
import dog18 from './images/days/18.jpg';
import dog19 from './images/days/19.jpg';
import dog20 from './images/days/20.jpg';
import dog21 from './images/days/21.jpg';
import dog22 from './images/days/22.jpg';
import dog23 from './images/days/23.jpg';
import dog24 from './images/days/24.jpg';


class App extends Component {
  constructor(props) {
    super(props)
    this.changeHColor = this.changeHColor.bind(this);
    this.changeBackground = this.changeBackground.bind(this);

    this.state = {
      color: '',

    }
  }

  revealPresent = () => {
      console.log('click');
      this.toggle = true;
  };

  sleeps = () => {
    const now = new Date();
    const dateToday = now.getDate();
    // const sleeps = 25 - dateToday;
    return 25 - dateToday;
  }

  changeHColor = () => {
    var letters = '456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 12)];
    }
    const head = document.getElementById('head');
    head.style.color = color;
  };

  changeBackground = () => {
    var images = [
      `${image1}`,
      `${image2}`,
      `${image3}`,
      `${image4}`,
      `${image5}`,
      `${image6}`,
      `${image7}`,
      `${image8}`,
      `${image9}`,
      `${image10}`
    ];

    var generatedNumber = (Math.ceil(Math.random()*(images.length))-1);
    const app = document.getElementById('app');
    app.style.background = `url(${images[generatedNumber]}) no-repeat center center fixed`;

  }


  componentDidMount() {
    // window.addEventListener('click', this.changeHColor);
    window.addEventListener('click', this.changeBackground);
  };


  render() {

    const advent = [
      {
        day: 19,
        caption: 'Admire your Christmas decorations',
        img: `${dog19}`
      },{
        day: 16,
        caption: 'Get your friends together',
        img: `${dog16}`
      },{
        day: 18,
        caption: 'Visit Father Christmas',
        img: `${dog18}`
      },{
        day: 21,
        caption: 'Be extra good so you are definitely on the nice list!',
        img: `${dog21}`
      },{
        day: 5,
        caption: 'Make a Christmas wreath',
        img: `${dog5}`
      },{
        day: 20,
        caption: 'See the family',
        img: `${dog20}`
      },{
        day: 17,
        caption: 'Build a snowman',
        img: `${dog17}`
      },{
        day: 24,
        caption: 'Hang your stocking',
        img: `${dog24}`
      },{
        day: 7,
        caption: 'Send out your Christmas list',
        img: `${dog7}`
      },{
        day: 4,
        caption: 'Write your Christmas cards',
        img: `${dog4}`
      },{
        day: 8,
        caption: 'Indulge in plenty of festive snacks!',
        img: `${dog8}`
      },{
        day: 1,
        caption: 'Hang your Christmas wreath',
        img: `${dog1}`
      },{
        day: 3,
        caption: 'Get out the Christmas decorations',
        img: `${dog3}`
      },{
        day: 22,
        caption: 'Don\'t open the presents until Christmas!',
        img: `${dog22}`
      },{
        day: 23,
        caption: 'Finish your Christmas shopping',
        img: `${dog23}`
      },{
        day: 10,
        caption: 'Choose a Christmas party outfit',
        img: `${dog10}`
      },{
        day: 15,
        caption: 'Wrap your Christmas presents',
        img: `${dog15}`
      },{
        day: 2,
        caption: 'Put up the Christmas lights',
        img: `${dog2}`
      },{
        day: 6,
        caption: 'Dig out your Christmas jumper',
        img: `${dog6}`
      },{
        day: 9,
        caption: 'Get a Christmas tree',
        img: `${dog9}`
      },{
        day: 14,
        caption: 'Get a pre Christmas nap in',
        img: `${dog14}`
      },{
        day: 11,
        caption: 'Do some Christmas baking',
        img: `${dog11}`
      },{
        day: 13,
        caption: 'Hope to meet your love beneath the misletoe',
        img: `${dog13}`
      },{
        day: 12,
        caption: 'Go to a Nativity',
        img: `${dog12}`
      }
    ];


    return (
      <div id="app" className="App">
        <header className="App-header">
          <h1 id="head">{this.sleeps()} More Sleeps!</h1>
        </header>

        <div className="calendar">
          {advent.map((day, i) =>


              <Card
                day={day.day}
                caption={day.caption}
                img={day.img}
                pic={day.pic}
              />

        )}
        </div>

        <footer>
          <h3>Coded by Charlotte 👩🏻‍💻</h3>
        </footer>

      </div>
    );
  }
}

export default App;
