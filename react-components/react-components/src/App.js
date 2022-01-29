import React, {useState} from 'react';
import Clicker from './Clicker';

function App() {
const [isClicker, setClicker] = useState(false);

  return (
    <div className="App">
      <h2>React App Clicker</h2>
      <button onClick={() => setClicker(!isClicker) }>Toggle clicker</button>
      {isClicker && <Clicker />}
    </div>
  );
}

export default App;
