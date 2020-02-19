/*eslint-disable*/
import React from 'react';

import { Container, Row, Col } from '_components/Layout';

import './MainHomePage.module.scss';

const MainHomePage = ({ handleClick }) => (
  <div styleName="root">
    <Container styleName="b-container">
      <Row>
        <Col md="5">
          <div styleName="logo">
            <div styleName="logo-name"> 
              Щербаков<br />
              Иванова
            </div>
            <div styleName="logo-slogan">
              Ваша надежная <br /> защита
            </div>
          </div>
        </Col>
      </Row>
      <Row styleName="information">
        <Col md="5" className="offset-md-1" styleName="statue-block">
          <div styleName="statue" />
        </Col>
        <Col md="5" styleName="info-block">
          <div styleName="title">
            <p styleName="title-thin">Профессиональная</p>
            <p styleName="title-bold">Юридическая помощь</p>
            <p styleName="title-thin">В Твери</p>
          </div>
          <div styleName="description">
            Правовые вопросы - специфический и деликатный вид проблем. Ошибки в них могут привести к самым различным последствиям.
            Мы предлагаем индивидуальный подход к каждому Клиенту, рассматриваем всевозможные варианты
            разрешения каждой конкретной проблемы, рекомендуя оптимальный выход из правовой проблемы.
          </div>
          <button
            styleName="get-consultation"
            onClick={()=>{
              handleClick();
            }}
          >
            Получить консультацию
          </button>
        </Col>
      </Row>
      <div styleName="address">
        г.Тверь, <br /> ул.Лидии Базановой, 20
      </div>
    </Container>
  </div>
);

export default MainHomePage;
