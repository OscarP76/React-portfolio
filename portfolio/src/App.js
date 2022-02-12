import './App.css';
import Header from './components/Header'
import Profile from './components/Profile'
import Projects from './components/Projects'

function App() {
  // state - which page we are on!
  return (
    <div className="App">
      <Header />
      <h1>Blank canvas</h1> 
      {/* if else stuff to show different files depening on what page the state is */}
    </div>
  );
}

export default App;
