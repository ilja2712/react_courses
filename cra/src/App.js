import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isStart: false
    }

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }



  componentDidMount() {
    console.log('componentDidMount');
    if (localStorage.getItem('timer')) {
      this.setState({count: Number(localStorage.getItem('timer'))});
    }      
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    localStorage.setItem('timer', this.state.count);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  stopTimer() {
    this.setState({isStart: false});
    clearInterval(this.timerId);
  }

  startTimer() {
    this.timerId = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
    this.setState({isStart: true});
  }

  resetTimer() {
    this.setState({count: 0});
  }

  render() {
    return (
      <div className="App">
        <span>{this.state.count}</span>
        <br />
        {this.state.isStart ? <button onClick={this.stopTimer}>Stop</button> : <button onClick={this.startTimer}>Start</button>}
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default App;
