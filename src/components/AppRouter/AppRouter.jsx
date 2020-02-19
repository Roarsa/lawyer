/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

const Router = ({ routes }) => (
  <Switch>
    {routes.map(({ path, exact, component: Component }) => (
      <Route
        key={path}
        exact={exact}
        path={path}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    ))}
    <Redirect from='/our-research/:researchSlug/:articleId' to='/blog/:researchSlug/:articleId'/>
    <Redirect from='/our-research/:researchSlug?' to='/blog/:researchSlug?'/>
    <Redirect from='/our-research' to='/blog'/>
  </Switch>
);

Router.propTypes = {
  routes: PropTypes.array,
};

export default Router;
