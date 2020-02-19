import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '_config';

import MediaHelper from '_components/MediaHelper';
import GridHelper from '_components/GridHelper';
import AppRouter from '_components/AppRouter';
// import Preloader from '_components/Preloader';

import '_styles/styles.scss';

class App extends PureComponent {
  componentDidMount() {
    this.addEventListeners();
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  addEventListeners = () => {
    if (!document || !window) return;

    window.addEventListener('load', this.handleWindowLoaded);
  };

  removeEventListeners = () => {
    window.removeEventListener('load', this.handleWindowLoaded);
  };

  handleWindowLoaded = () => {
    const delay = 300;

    setTimeout(() => document.body.classList.remove('noTransition'), delay);
  };

  render() {
    const { routes } = this.props;

    return (
      <Fragment>
        <Helmet {...config.app} />
        <AppRouter routes={routes} />
        <MediaHelper />
        {/* <Preloader /> */}
        {
          process.env.NODE_ENV !== 'production' &&
          <GridHelper />
        }
      </Fragment>
    );
  }
}

App.propTypes = {
  routes: PropTypes.array,
};

export default App;
