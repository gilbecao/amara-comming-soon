import Counter from './components/counter'
import './App.css';

import soon from './assets/soon.png'

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <p>GET READY EVERYONE!</p>
        <h1>COMING</h1>
        <div className="container__soon">
          <img src={soon} alt="soon"/>
        </div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
