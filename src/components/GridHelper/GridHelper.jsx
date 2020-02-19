import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  Container,
  Col,
  Row,
} from '_components/Layout';

import styles from './GridHelper.scss';

@CSSModules(styles, { allowMultiple: true })
class GridHelper extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }

  state = { isShow: false }

  onToggle = () => {
    this.setState({ isShow: !this.state.isShow });
  }

  render() {
    const { className } = this.props;

    return (
      <div styleName={classnames('root', { active: this.state.isShow })} className={className}>
        <button styleName="btn" onClick={this.onToggle}>
          { this.state.isShow ? '-' : '+' }
        </button>
        <Container styleName="full-height">
          <Row styleName="full-height">
            <Col lg="1">
              <div styleName="layout-col" />
            </Col>
            <Col lg="1">
              <div styleName="layout-col" />
            </Col>
            <Col lg="1">
              <div styleName="layout-col" />
            </Col>
            <Col lg="1">
              <div styleName="layout-col" />
            </Col>
            <Col lg="1">
              <div styleName="layout-col" />
            </Col>
            <Col lg="1">
              <div styleName="layout-col" />
            </Col>
            <Col lg="1">
              <div styleName="layout-col" />
            </Col>
            <Col lg="1">
              <div styleName="layout-col" />
            </Col>
            <Col lg="1">
              <div styleName="layout-col" />
            </Col>
            <Col lg="1">
              <div styleName="layout-col" />
            </Col>
            <Col lg="1">
              <div styleName="layout-col" />
            </Col>
            <Col lg="1">
              <div styleName="layout-col" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GridHelper;
