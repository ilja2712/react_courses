import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


const Book = (props) => {
  return React.createElement('div', {}, [
      React.createElement('h2', {}, props.name),
      React.createElement('p', {}, props.year),
      React.createElement('p', {}, props.price),
  ]);
}


const App = () => {
  return (
      <div>
          <Book name="Javascript" year="2018" price="1200" />
          <Book name="Angular" year="2019" price="1000" />
          <Book name="React for beginners" year="2021" price="900" />
      </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
      <App />    
  </React.StrictMode>, 
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
