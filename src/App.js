import nader from './nader.jpg';
import './App.css';
import Profil from './profil/profil';
import PropTypes from "prop-types";

const fullName = 'Fadhel Nader' ;
const bio = 'Junior Devlopper';
const profession = 'FullStack Js Developper';
const alertName = alert('Fadhel Nader');

function App() {
  return (
    <div className="App">
       <div>
        <Profil fullName={fullName} bio={bio} profession={profession} alertName={alertName} /><img src={nader} alt="nader" /><Profil/>
      </div>

    </div>
  );
}

export default App;
