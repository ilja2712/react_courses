import './App.css';
import {Book} from './Book';
import {Preloader} from './Preloader';

const App = (props) => {
  return props.isLoading ? <Preloader /> : (
      <div>
          <Book name="Javascript" year="2018" price="1200">
            Okaaaay, let's go!
          </Book>
          <Book name="Angular" year="2019" price="1000" />
          <Book year="2021" price="900" />
      </div>
  );
};

export default App;
