import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Navigation from './components/Navigation'
import './App.css'

function App(){
  return <HashRouter>
    <Navigation></Navigation>
    <Route path='/about' component={About} />
    <Route path='/movie-detail' component={Detail} />
    <Route path='/' exact={true} component={Home} />
  </HashRouter>
}

export default App;