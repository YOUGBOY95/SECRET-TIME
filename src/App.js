import './App.css';
//import { drops_data } from './data/data.js';
import React from 'react';
import Navbar from "./components/navbar"
import Accueil from "./components/Accueil"
import Sneakers from "./components/Sneakers"
import Avis from "./components/Avis"
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
          <Route path='/Sneakers' components={Sneakers} exact>
            <Sneakers />
          </Route>
          <Route path='/Avis' components={Avis} exact>
            <Avis />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App

