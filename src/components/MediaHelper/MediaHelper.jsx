/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _delay from 'lodash/delay';

import browserHoc from '_hocs/browser';
import withViewport from '_hocs/withViewport';

import {
  onCheckViewport,
  onSetScrollRestoration,
  onSetGlobalStyle,
  onSetVhSize,
} from './utils';

@withViewport
@browserHoc
class MediaHelper extends PureComponent {
  static propTypes = {
    browser: PropTypes.object,
    setViewport: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.viewport = '';
  }

  componentDidMount() {
    const { browser } = this.props;
    window.addEventListener('resize', this.handleResize);
    onSetGlobalStyle(browser);
    onSetScrollRestoration();
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { setViewport } = this.props;

    const currentViewport = onCheckViewport();

    _delay(onSetVhSize, 10);

    if (currentViewport !== this.viewport) {
      setViewport(currentViewport);
    }
  }

  render() {
    return null
  }
}

export default MediaHelper;
