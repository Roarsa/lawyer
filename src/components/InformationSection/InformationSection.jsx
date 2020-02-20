import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from "@reach/router"

import { Container, Row, Col } from '_components/Layout';
import { legalEntityMenuItems, individualMenuItems } from '_components/ServicesPage/data.js';

import './InformationSection.module.scss';

const InformationSection = ({
  serviceId,
  type,
  goBack,
  handleButtonClick,
  selectService,
}) => {
  let service;

  if (type === 'services&individual') {
    service = individualMenuItems.find(service => service.link === serviceId);
  }
  else {
    service = legalEntityMenuItems.find(service => service.link === serviceId);
  }

  console.log(service);
  return (
    <div styleName="root">
      {window && window.scroll(0,0)}
      <Container styleName="b-container">
        <div styleName="content-root">
          <Row>
            <Col md="3">
              <div
                styleName="back"
                aria-label="Back to main view"
                onClick={async ()=>{await navigate(`/${type}`);goBack(serviceId)}}
              />
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <p styleName="title">
                {service.name}
              </p>
              <div
                styleName="description"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
              <button
                styleName="contact"
                onClick={async () => {
                  selectService(service.name);
                  await navigate(`/${type}`);
                  handleButtonClick();
                }}
              >
                Записаться на консультацию
              </button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
)};

InformationSection.propTypes = {
  service: PropTypes.object.isRequired,
  handleChangeSlug: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default InformationSection;
