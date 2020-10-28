import './App.css';
import logo from './dc-logo.png';
import MemoryCard from './components/MemoryCard';
import React, { Component } from 'react';

const generateDeck = () => {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  const Deck = [];
  for (let i = 1; i <= 16; i++) {
    Deck.push({ isFlipped: false, symbol: symbols[i % 8] });
  }
  return shuffle(Deck);
};

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
      newPickedCards: [],
    };
  }

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped === true) {
      console.log('isFlipped');
      return;
    }
    const cardToFlip = { ...this.state.deck[cardIndex], isFlipped: true };

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    const newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        console.log(cardToFlip);
        return cardToFlip;
      }
      return card;
    });
    console.log(newPickedCards);
    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        console.log('unfilp cards');
      }
      newPickedCards = [];
      console.log(newPickedCards);
    }
    return this.setState({ deck: newDeck, pickedCards: newPickedCards });
  }

  unflipCards(card1Index, card2Index) {
    const card1 = { ...this.state.deck[card1Index], isFlipped: false };
    const card2 = { ...this.state.deck[card2Index], isFlipped: false };
    let newDeck = this.state.deck.map(())
  }

  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return (
        <MemoryCard
          symbol={card.symbol}
          isFlipped={card.isFlipped}
          key={index}
          pickCard={this.pickCard.bind(this, index)}
        />
      );
    });

    return (
      <div className='App'>
        <header className='App-header'>
          <h2>Memory Game</h2>
          <h3>Match cards to win !</h3>
        </header>
        <div>{cardsJSX.slice(0, 4)}</div>
        <div>{cardsJSX.slice(4, 8)}</div>
        <div>{cardsJSX.slice(8, 12)}</div>
        <div>{cardsJSX.slice(12, 16)}</div>
      </div>
    );
  }
}

export default App;
