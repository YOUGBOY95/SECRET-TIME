import './App.css';
//import { drops_data } from './data/data.js';
import React from 'react';
import Navbar from "./components/navbar"
import Accueil from "./components/Accueil"
import Stock from "./components/Stock"
import News from "./components/News"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' components={Accueil} exact>
            <Accueil />
          </Route>
          <Route path='/Stock' components={Stock} exact>
            <Stock />
          </Route>
          <Route path='/News' components={News} exact>
            <News />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App

