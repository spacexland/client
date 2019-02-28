import * as React from 'react';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';
import List from './Common/List';
const Launches = React.lazy(() => import('./Launches/Launches'));
const Launch = React.lazy(() => import('./Launches/Launch'));
const Missions = React.lazy(() => import('./Missions/Missions'));
const Mission = React.lazy(() => import('./Missions/Mission'));
const Home = React.lazy(() => import('./Home/Home'));

const RedirectToHome = () => <Redirect to="/" />;

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/launches"
      render={({ match }): RouteComponentProps | any => (
        <List {...{ match }}>
          <Launches />
        </List>
      )}
    />
    <Route exact path="/launches/:id" component={Launch} />
    <Route
      exact
      path="/missions"
      render={({ match }): RouteComponentProps | any => (
        <List {...{ match }}>
          <Missions />
        </List>
      )}
    />
    <Route exact path="/missions/:id" component={Mission} />
    <Route component={RedirectToHome} />
  </Switch>
);
