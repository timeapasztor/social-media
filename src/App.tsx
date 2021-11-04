import React from 'react';
import { Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import History from './History';
import './App.css';
import NotFound from './components/NotFound';
import icons from './style/icons';
import {MenuList, StyledSVGInline, TopHeader, TopNavigation} from "./style/styled-components/resuable.css";
import Feed from "./components/Feed/Feed";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
      <div>
        <Router history={History}>
          <TopHeader>
            <TopNavigation>
              <StyledSVGInline src={icons.newsIcon} />
              <MenuList>
                <Link to="/home">Main Page</Link>
              </MenuList>
            </TopNavigation>
          </TopHeader>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
              <Route exact path="/home" component={Feed} />
              <Route exact path="/user_profile/:user_id" component={UserProfile} />
              <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
  );
};

export default App;
