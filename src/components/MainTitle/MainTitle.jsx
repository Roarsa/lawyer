/*eslint-disable*/
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Title from '_components/Title';

import './MainTitle.module.scss';

const TitleStyle = {
  marginBottom: '12px',
  width: "546px",
}

class MainTitle extends PureComponent {
  render() {
    const {
      title,
      subtitleFlag,
      subtitle,
    } = this.props;

    return (
      <div styleName="title-root">
        <div styleName="first-line">
          <Title
            color="white"
            style={TitleStyle}
            text={title}
          />
          <div styleName="dots"></div>
        </div>
        {subtitleFlag && <p styleName="subtitle">{subtitle}</p>}
        <div styleName="dots second"></div>
      </div>
    )
  }
}

export default MainTitle;
