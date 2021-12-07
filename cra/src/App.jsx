import './App.css';
import React, {Component} from 'react';
import {Posts} from './component/Posts';


class App extends Component {
  state = {
      posts: [
        {id: "abc1", name: "JS Basics"},
        {id: "abc2", name: "JS Advanced"},
        {id: "abc3", name: "React JS"}
      ]
  };

  handleDelete = (id) => {
      this.setState({posts: this.state.posts.filter(post => post.id !== id)
      });
  }

  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} cb={this.handleDelete} />
      </div>
    );
  }
}

export default App;
