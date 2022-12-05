
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'; 
import Card from './components/Card/Card';
import CreateNew from './components/CreateNew/CreateNew';
import UpdateGame from './components/UpdateGame/UpdateGame';
import AboutMe from './components/AboutMe/AboutMe';
import NoRoutePage from './components/NoRoutePage/NoRoutePage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path = '/' component = { LandingPage } />
          <Route exact path = '/home' component = { Home } />
          <Route path = '/videogame/:id' component = { Card } />
          <Route path = '/createnew' component = { CreateNew } />
          <Route path = '/updategame' component = { UpdateGame } />
          <Route path = '/aboutme' component={ AboutMe } />
          <Route path = '*' component={ NoRoutePage } />
        </Switch>    
      </div>
    </BrowserRouter>
  );
}

export default App;
