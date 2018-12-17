import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Card from './components/card.js'

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
      'https://images.unsplash.com/photo-1513639725746-c5d3e861f32a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1482097623218-813ddc8d7046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'
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
        img: 'https://i.pinimg.com/564x/24/2e/ae/242eae83587d953b727b9defb49f5d88.jpg'
      },{
        day: 16,
        caption: 'Get your friends together',
        img: 'https://i.pinimg.com/564x/35/a9/0a/35a90a00dc55c0e9ff34ea891dc22269.jpg'
      },{
        day: 18,
        caption: 'Visit Father Christmas',
        img: 'https://www.maidenhead-advertiser.co.uk/resizer/748/503/false/GN4_DAT_2756716.jpg--.jpg?1479211583000'
      },{
        day: 21,
        caption: 'Be extra good so you are definitely on the nice list!',
        img: 'https://i.pinimg.com/564x/33/09/c4/3309c44a8e61904b899b8763bec4ed9b.jpg'
      },{
        day: 5,
        caption: 'Make a Christmas wreath',
        img: 'https://i.pinimg.com/564x/b5/1c/ee/b51cee713faf4f37b99ad3a02404c395.jpg'
      },{
        day: 20,
        caption: 'See the family',
        img: 'https://i.pinimg.com/564x/b1/36/9d/b1369d3333a4a7802dd3f59b2e5700d8.jpg'
      },{
        day: 17,
        caption: 'Build a snowman',
        img: 'https://i.pinimg.com/564x/fe/f4/09/fef409d251179b16d21565aced258581.jpg'
      },{
        day: 24,
        caption: 'Hang your stocking',
        img: 'https://i.pinimg.com/564x/e7/f8/fc/e7f8fcb795e6d5cf7622f5725bd53684.jpg'
      },{
        day: 7,
        caption: 'Send out your Christmas list',
        img: 'https://www.animaltalk.com.au/wp-content/uploads/2016/12/bigstock-A-beautiful-Havanese-aka-Javan-158318408.jpg'
      },{
        day: 4,
        caption: 'Write your Christmas cards',
        img: 'https://www.clenthillsvets.co.uk/wp-content/uploads/2017/11/clent-hills-vets-christmas-sausage-dog.jpg'
      },{
        day: 8,
        caption: 'Indulge in plenty of festive snacks!',
        img: 'https://www.skinnerspetfoods.co.uk/wp-content/uploads/2015/12/christmas-pup11-300x250.png'
      },{
        day: 1,
        caption: 'Hang your Christmas wreath',
        img: 'https://i.pinimg.com/564x/74/99/85/749985451239391229b845276da53fb9.jpg'
      },{
        day: 3,
        caption: 'Get out the Christmas decorations',
        img: 'https://i.pinimg.com/564x/df/aa/77/dfaa779359aedf748702bb7c087de5e0.jpg'
      },{
        day: 22,
        caption: 'Don\'t open the presents until Christmas!',
        img: 'https://i.pinimg.com/564x/a8/c8/12/a8c812ba32024567c237ad5933636547.jpg'
      },{
        day: 23,
        caption: 'Finish your Christmas shopping',
        img: 'https://i.pinimg.com/564x/7d/6e/e1/7d6ee1d29919b0503f74d7f50f233723.jpg'
      },{
        day: 10,
        caption: 'Choose a Christmas party outfit',
        img: 'https://www.rover.com/blog/wp-content/uploads/2017/12/snowmandog-960x540.jpg'
      },{
        day: 15,
        caption: 'Wrap your Christmas presents',
        img: 'https://f6j9p4k6.stackpathcdn.com/wp-content/uploads/2016/12/b0277d9f038439fd1f5a4522fc2de2e3-photography-ideas-for-dogs-pet-photography-ideas.jpg'
      },{
        day: 2,
        caption: 'Put up the Christmas lights',
        img: 'https://i.pinimg.com/564x/4f/c6/86/4fc686ec00240e1d842565bb5c3c8be9.jpg'
      },{
        day: 6,
        caption: 'Dig out your Christmas jumper',
        img: 'https://i.pinimg.com/564x/df/9b/61/df9b619fa6b58910ede5431ac50c87de.jpg'
      },{
        day: 9,
        caption: 'Get a Christmas tree',
        img: 'https://i.pinimg.com/564x/a3/76/64/a37664414da3b0e37f9bfc35311bd133.jpg'
      },{
        day: 14,
        caption: 'Get a pre Christmas nap in',
        img: 'https://3milliondogs.com/blog-assets-two/2016/11/desktop-pictures-of-christmas-dogs-wallpaper.jpg'
      },{
        day: 11,
        caption: 'Do some Christmas baking',
        img: 'https://www.rover.com/blog/wp-content/uploads/2015/11/fruitnut.jpg'
      },{
        day: 13,
        caption: 'Hope to meet your love beneath the misletoe',
        img: 'https://www.mediastorehouse.com/p/172/dalmatian-dog-x2-mistletoe-647221.jpg'
      },{
        day: 12,
        caption: 'Go to a Nativity',
        img: 'https://pbs.twimg.com/media/B5H8urzIUAAoAXj.jpg'
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
