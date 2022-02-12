import './App.css';
import React, {useState} from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Projects from './components/Projects'

function App() {
  // state - which page we are on!
  const [pageState, setPageState] = useState('Profile')

  const whichPage = () => {
    if(pageState === 'Projects') {
      return (<Projects />)
    } else if(pageState === 'Profile') {
      return (<Profile />)
    }
  }

  return (
    <div className="App">
      <Header />
      <h1>Blank canvas</h1> 
     {whichPage()}
      {/* if else stuff to show different files depening on what page the state is */}
    </div>
  );
}

export default App;
