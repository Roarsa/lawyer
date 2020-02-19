/*eslint-disable*/
import React, { Fragment, PureComponent } from 'react';
import classNames from 'classnames';

import Title from '_components/Title';

import { information } from './data';

import { Container, Row, Col } from '_components/Layout';

import './AboutUsPage.module.scss';

const TitleStyle = {
  marginTop: '60px'
}

class AboutUsPage extends PureComponent {
  state = {
    person: 'sherbakov',
  }

  render() {
    const { person } = this.state;
    const { handleClick } = this.props;

    return (
      <div styleName="root">
        <Title
          color="marine"
          text="Наша команда"
          style={TitleStyle}
        />
        <div styleName="first-dots-figure" />
        <div styleName="second-dots-figure" />
        <Container styleName='slider-root'>
          <Row>
          <Col md="12">
            <div styleName="buttons">
              <button
                styleName={classNames('button', {active: person == 'sherbakov'})}
                onClick={() => this.setState({person: 'sherbakov'})}
              >
                Щербаков В.А.
              </button>
              <div styleName="dot" />
              <button
                styleName={classNames('button', {active: person == 'ivanova'})}
                onClick={() => this.setState({person: 'ivanova'})}
              >
                Иванова Е.Н.
              </button>
            </div>
          </Col>
          </Row>
          <Row styleName="mob-photo-root">
          <Col
            md="4"
            styleName="info"
            className="offset-md-1"
          >
            <div styleName="photo-root">
              <div styleName={`photo-${person}`} />
            </div>
          </Col>
          <Col
            md="1"
          >
            <span styleName="info-title">Подробнее о нас</span>
          </Col>
          <Col
            md="5"
            styleName="info-block"
          >
            <div styleName="info-text" dangerouslySetInnerHTML={{ __html: information[person].info }} />
            <div styleName="contacts">
              <div styleName="info-contacts">
                <p><span>Номер:</span> {information[person].number}<br />
                <span>Почта:</span> {information[person].mail} </p>
              </div>
              <button
                styleName='contact'
                onClick={()=>{
                  handleClick(information[person].name);
                }}
              >
                Записаться на консультацию
              </button>
            </div>
          </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default AboutUsPage;
