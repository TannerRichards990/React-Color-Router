import Home from './Components/Home/Home';
import Color from './Components/Color/Color';
import { Route, Switch, NavLink, BrowserRouter } from 'react-router-dom';

import './Main.css';

export default function Main() {
  return (
    <BrowserRouter>
      <header>
        <ul>
          <li>
            <NavLink className='RGB-Red' to='/rgb/177/12/67'>
              Jolly-Red
            </NavLink>
          </li>
          <li>
            <NavLink className='RGB-Green' to='/rgb/160/212/164'>
              Irish-Sea-Green
            </NavLink>
          </li>
          <li>
            <NavLink className='RGB-Blue' to='/rgb/0/180/255'>
              Metro-Blue
            </NavLink>
          </li>
        </ul>
      </header>
      <div className='Main'>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/rgb/:r/:g/:b'><Color /></Route>
        </Switch> 
      </div>
    </BrowserRouter>
  );
}