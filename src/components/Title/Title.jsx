/*eslint-disable*/
import React, { PureComponent } from 'react';
import classname from 'classnames';

import './Title.module.scss';

class Title extends PureComponent {
  render() {
    const {
      color,
      text,
      style,
    } = this.props;

    return (
      <p
        styleName={`color-${color}`}
        style={style}
      >
        {text}
      </p>
    )
  }
}

export default Title;
