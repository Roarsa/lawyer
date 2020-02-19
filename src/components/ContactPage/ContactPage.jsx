/*eslint-disable*/
import React, { useState } from 'react';

import MainTitle from '_components/MainTitle';
import { Container, Row, Col } from '_components/Layout';

import { sendFormContactUs } from 'api/form';

import './ContactPage.module.scss';

const ContactPage = ({ innerWidth, getRequestValue }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [question, setQuestion] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [map, setMap] = useState(false);
  return (
    <div styleName="root" className="contact-block">
      {innerWidth >= 790 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2181.6863967255877!2d35.911140315700386!3d56.85132291419978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b686fd6a9954ab%3A0x4e7afbd10dd1a968!2z0YPQuy4g0JsuINCR0LDQt9Cw0L3QvtCy0L7QuSwgMjAsINCi0LLQtdGA0YwsINCi0LLQtdGA0YHQutCw0Y8g0L7QsdC7LiwgMTcwMTAw!5e0!3m2!1sru!2sru!4v1572203323821!5m2!1sru!2sru"
        styleName="map"
        allowFullScreen=""
      />}
      {!map && <div styleName="main-window">
        <Container styleName="b-container">
          <MainTitle
            title="Как с нами связаться"
            subtitleFlag={false}
          />
          <Row styleName="info-root">
            <Col md="5">
              <div styleName="contact-root">
                {showForm && <form
                  styleName="new-item"
                  onSubmit={async (event) => {
                    const valueRequest = getRequestValue({ name, number, question });
                    try {
                      await sendFormContactUs(valueRequest);
                      setIsSuccess(true);
                      setName('');
                      setNumber('');
                      setQuestion('');
                    } catch (err) {
                      setIsSuccess(false);
                    }
                    setShowForm(false);
                    event.preventDefault();
                  }}
                >
                  <label styleName="field">
                    <input
                      required
                      name="name"
                      className="name"
                      value={name}
                      placeholder="Ваше имя"
                      autoComplete="off"
                      onChange={() => setName(event.target.value)}
                    />
                    <span styleName="label-wrap">
                      <span>Ваше имя*</span>
                    </span>
                  </label>
                  <label styleName="field">
                    <input
                      required
                      name="number"
                      placeholder="Контактный номер"
                      value={number}
                      autoComplete="off"
                      onChange={() => setNumber(event.target.value)}
                    />
                    <span styleName="label-wrap">
                      <span>Контактный номер*</span>
                    </span>
                  </label>
                  <label styleName="field">
                    <input
                      name="question"
                      placeholder="Ваш вопрос"
                      value={question}
                      autoComplete="off"
                      onChange={() => setQuestion(event.target.value)}
                    />
                    <span styleName="label-wrap">
                      <span>Ваш вопрос</span>
                    </span>
                  </label>
                  <button
                    styleName="submit"
                    type="submit"
                  >
                    Заказать звонок
                  </button>
                </form>}
                {!showForm && 
                  <div styleName="message">
                    {isSuccess && <p>Спасибо за заявку.<br />Ожидайте звонка.</p>}
                    {!isSuccess && <p>Что-то пошло не так.<br />Пожалуйста, попробуйте снова.</p>}
                    <div styleName="timer">
                      {setTimeout(() => setShowForm(true), 2500)}
                    </div>
                  </div>
                }
              </div>
            </Col>
            {innerWidth < 790 && 
              <Col md="6" styleName="tablet-map-root">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2181.6863967255877!2d35.911140315700386!3d56.85132291419978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b686fd6a9954ab%3A0x4e7afbd10dd1a968!2z0YPQuy4g0JsuINCR0LDQt9Cw0L3QvtCy0L7QuSwgMjAsINCi0LLQtdGA0YwsINCi0LLQtdGA0YHQutCw0Y8g0L7QsdC7LiwgMTcwMTAw!5e0!3m2!1sru!2sru!4v1572203323821!5m2!1sru!2sru"
                  styleName="map"
                />
              </Col>
            }
            <Col md="3" styleName="tablet-version-of-info">
              <div>
                <p styleName="title">Наш офис:</p>
                <p styleName="info">
                  ул.Лидии Базановой, 20 <br />
                  Пн-пт, 9:00-18:00
                </p>
              </div>
              <div>
                <p styleName="title">Телефон:</p>
                <p styleName="info"><a href="tel:89106481574">+79106481574</a> <br />
                <a href="tel:89157151595">+79157151595</a>
                </p>
              </div>
            </Col>
            <Col md="3" styleName="tablet-version-of-info">
              <div>
                <p styleName="title">Электронная почта:</p>
                <p styleName="info"><a href="mailto:9157151595@mail.ru">9157151595@mail.ru</a> <br />
                  <a href="mailto:481574@mail.ru">6481574@mail.ru</a>
                </p>
              </div>
              <div>
                <p styleName="title">Полезные ссылки:</p>
                <p styleName="info">
                  <a href="https://fparf.ru/" target="_blank">Сайт федеральной палаты адокатов</a> <br />
                  <a href="https://adv-tver.ru/" target="_blank">Сайт адвокатской палаты тверской области</a> <br />
                  <a href="https://sudrf.ru/" target="_blank">Сайт ГАС РФ «Правосудие»</a> <br />
                  <a href="http://prokuratura.tver.ru/" target="_blank">Прокуратура Тверской области</a> <br />
                  <a href="https://tver.sledcom.ru/" target="_blank">СК Тверской области</a> <br />
                  <a href="http://letters.kremlin.ru/receptions/list/center/58" target="_blank">Приемная президента</a> <br />
                </p>
              </div>
            </Col>
          </Row>
          <button
            styleName={`show-map-${map}`}
            onClick={()=>setMap(!map)}
          >
            Посмотреть карту
          </button>
        </Container>
      </div>}
      {map && 
        <Container>
          <button
            styleName={`show-map-${map}`}
            onClick={()=>setMap(!map)}
          >
            Вернуться к контактам
          </button>
        </Container>
      }
    </div>
  )
}

export default ContactPage;
