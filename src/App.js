import React from 'react';
import Header from './components/Header';
import './App.css';
import cart from './img/cart.png';
import laptop from './img/laptop.png';
import lock from './img/lock.png';

class App extends React.Component {
  render(){
    return (
      <div className="App">

        <div className='toppart'>
          <Header />
          <div className='body'>
            <div>Welcome To Our Studio!</div>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button>TELL ME MORE</button>
          </div>
        </div>

        <div className='services'>
          <h1>SERVICES</h1>
          <div>Lorem ipsum dolor sit amet consectetur.</div>

          <span className='symbols'>
            <div>
              <img src={cart} alt='cart'/>
              <h2>E-Commerce</h2>
              <section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</section>
            </div>
            
            <div className='responsive'>
              <img src={laptop} alt='laptop'/>
              <h2>Responsive Design</h2>
              <section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</section>
            </div>

            <div className='security'>
              <img src={lock} alt='lock' />
              <h2>Web Security</h2>
              <section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</section>
            </div>
          </span>

        </div>

      </div>
    );
  }
}

export default App;
