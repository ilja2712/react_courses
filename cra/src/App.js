import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true,
      comments: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({posts: data, isLoading: false}))

      this.timerId = setInterval(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
          .then(response => response.json())
          .then(data => this.setState({comments: data, isLoading: false}))
      }, 3000)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? <h3>Loading...</h3> : <h3>{this.state.posts.length} posts load</h3>}
        {this.state.isLoading ? <h4>Loading...</h4> : <h4>{this.state.comments.length} comments load</h4>}
      </div>
    );
  }
}

export default App;
