import './App.css';
import React, { useState } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import MainPage from './components/MainPage/MainPage';

function App() {
  // state - which page we are on!
  const [pageState, setPageState] = useState('MainPage')

  const whichPage = () => {
    if (pageState === 'MainPage') {
      return (<MainPage />)
    } else if (pageState === 'Projects') {
      return (<Projects />)
    } else if (pageState === 'Profile') {
      return (<Profile />)
    } else if (pageState === 'Contacts') {
      return (<Contacts />)
    } else if (pageState === 'Header') {
      return (<Header />)
    }

    return (
      <div className="bg">
        <div className="App">
          <Projects setPageState={setPageState} />
          {whichPage()}
          {/* if else stuff to show different files depening on what page the state is */}
        </div>
      </div>
    );
  }

}

export default App;
