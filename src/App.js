import React, { Component } from 'react';

import img1 from './images/bartsimpson.png'
import img2 from './images/lisasimpson.png'
import img3 from './images/margesimpson.png'
import img4 from './images/homersimpson.jpg'
import img5 from './images/chiefwiggum.png'
import img6 from './images/ottomann.png'
import img7 from './images/snakejailbird.png'
import img8 from './images/ralphwiggum.png'
import img9 from './images/comicbookguy.png'
import img10 from './images/abesimpson.png'
import img11 from './images/maggiesimpson.jpg'
import img12 from './images/barneygumble.png'
import './App.css';

class App  extends Component {
  constructor() {
    //you must call the Component constructor function using super(), before setting any properties in this class - this is a react standard
    super();
  this.listImgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
    this.state = {
      clicked: [],
      score: 0,
      highscore: 0
    }
  }
  // const listImgs = ['./images/bartsimpson.png','./images/lisasimpson','./images/homersimpson.jpg','./images/margesimpson.png','./images/maggiesimpson.jpg','./images/barneygumble.png', './images/ottoman.png','./images/chiefwiggum.png','./images/comicbookguy.png','./images/ralphwiggum.png','./images/snakejailbird.png','./images/abesimpson.png']
  

clickImage = (index) => {
  // event.preventDefault();
  let imageIndex = this.state.clicked.indexOf(index);
  this.setState({clicked: [...this.state.clicked, index]})

  //write code to shuffle the clicked array

  // const shuffleArray = arr => arr.sort(() => Math.random() - 12);
  // const shuffleArray = arr => arr
  //   .map(a => [Math.random(), a])
  //   .sort((a, b) => a[0] - b[0])
  //   .map(a => a[1]);
  
  // shuffleArray([listImgs])

  let shuffledArray = [...this.setState.listImgs()]



  if (this.state.clicked.includes(imageIndex)){
    //they lose
    //we reset the score to 0
    let prevScore = this.state.score
    let score = 0;
    let clicked = [];
    this.setState({
      score,
      clicked
    }, () => {
      //we set highscore if their score is higher than the highscore
      if (prevScore > this.state.highscore) {
        let highscore = prevScore;
        this.setState({
          highscore
        })
      }
    })

  }else{
    //we increment score
    let score = this.state.score + 1;
    this.setState({
      score
    })
  }

}

render(){
  return (
    <div className="App">

      <header className="App-header">
        <a
          className="App-link"
          href="http://www.simpsonsworld.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Simpsons
        </a>

        Your score: 
        {this.state.score}

        |

        High Score:
        {this.state.highscore}
      </header>

      <div className="simpsonsImgs">
      {
          this.listImgs.map( (value, index) => {
            return <img 
              src={value} 
              alt="logosimpson" 
              onClick={()=>{this.clickImage(index)}} />
          })
        }
        
      </div>
    </div>
  );
}


}

export default App;
