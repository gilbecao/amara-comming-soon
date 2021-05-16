import './App.css';

import soon from './assets/soon.png';
import logo from './assets/amarahotels-logo-vertical.svg';
import beSustainableBadge from './assets/be-sustainable-badge.png';

function App() {
  return (
    <div className="app">
      
      <div className="app__container">
        <p>GET READY EVERYONE!</p>
        <h1>COMING</h1>
        <div className="container__soon">
          <img src={soon} alt="soon"/>
        </div>
        <div>
          <img src={logo} className="logo" alt="Amara hotels logo"/>
        </div>
        <div className="sustainability-badge">
        <img src={beSustainableBadge}  alt="Be sustainable badge"/>
      </div>  
      </div>
    </div>
  );
}

export default App;
