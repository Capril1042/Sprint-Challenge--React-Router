import React from 'react';
import './App.css';
import Navigation from './navigation';
import { Home } from './Home';
import { Zumba } from './Zumba';
import { Yoga } from './Yoga';
import { Piloxing } from './Piloxing';
import { Personals } from './personals';
import { Kettlebells } from './kettlebells';
import {Other} from './other';


import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={ Home }/>
    <Route path="/zumba" component={ Zumba }/>
    <Route path="/piloxing" component={ Piloxing }/>
    <Route path="/yoga" component={ Yoga}/>
    <Route path="/personals" component={ Personals }/>
    <Route path="/Kettlebells" component={ Kettlebells}/>
    <Route path="/Other" component={ Other }/>
  </div>
);
export default App;
