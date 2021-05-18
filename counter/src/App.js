import React from 'react'; // подключение библиотеки React
import './App.css'; // подключение файла стилей

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  onBtnClickHandler = (e) => {
    const { id } = e.currentTarget;
    let currentValue = this.state.counter;
    currentValue = id === 'increment' ? ++currentValue : --currentValue;
    this.setState({ counter: currentValue });
  };

  render() {
    const { counter } = this.state;
    return (
      <React.Fragment>
        <h1>{counter}</h1>
        <button id="increment" onClick={this.onBtnClickHandler}>
          +
        </button>
        <button id="decrement" onClick={this.onBtnClickHandler}>
          -
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
