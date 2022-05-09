import './App.css';
import React, { useState } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import './style.css';


function App() {
  // state - which page we are on!
  const [pageState, setPageState] = useState('Profile')

  const whichPage = () => {
    if (pageState === 'Profile') {
      return (<Profile />)
    } else if (pageState === 'Projects') {
      return (<Projects />)
    } else if (pageState === 'Contacts') {
      return (<Contacts />)
    } else if (pageState === 'Header') {
      return (<Header />)
    }

  }

    return (
      <div className="bg">
        <div className="App">
          <Header setPageState={setPageState} />
          {whichPage()}
          <Footer />
          {/* if else stuff to show different files depening on what page the state is */}
        </div>
      </div>
    );
  }



export default App;
