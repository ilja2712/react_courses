import './App.css';
import {Book} from './Book';

const App = () => {
  return (
      <div>
          <Book name="Javascript" year="2018" price="1200">
            Okaaaay, let's go!
          </Book>
          <Book name="Angular" year="2019" price="1000" />
          <Book name="React for beginners" year="2021" price="900" />
      </div>
  );
};

export default App;
