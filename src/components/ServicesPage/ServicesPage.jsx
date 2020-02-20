/*eslint-disable*/
import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Link } from "@reach/router"

import MainTitle from '_components/MainTitle';
import { menuItems, individualMenuItems, legalEntityMenuItems } from './data';

import { Container } from '_components/Layout';

import './ServicesPage.module.scss';

const getItems = (servicesSlug) => {
  if (servicesSlug === "individual") return individualMenuItems;
  if (servicesSlug === "legal-entity") return legalEntityMenuItems;
  return menuItems;
}

const ServicesPage = ({ slug, setY }) => (
  <div styleName="root">
    <Fragment>
      <div styleName="filter" />
      <Container styleName="b-container">
        <Link
          styleName={classNames("back", { disable: !(slug === 'services&individual' || slug === 'services&legal-entity')})}
          aria-label="Back to main view"
          to="/"
        />
        <MainTitle
          title="Направления деятельности"
          subtitleFlag={slug.slice(9) === "individual" || slug.slice(9) === "legal-entity"}
          subtitle={
            slug.slice(9) === "individual" && "Услуги для физических лиц" || 
            slug.slice(9) === "legal-entity" && "Услуги для юридических лиц"
          }
        />
        <div styleName={classNames("items-root", {homeRoot: !slug.slice(9)})}>
          {getItems(slug.slice(9)).map((item) => (
            <Link
              styleName={classNames('item', {mainItem: !slug.slice(9)})}
              onClick={()=>setY(window.scrollY)}
              to={`${item.link}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </Container>
    </Fragment>
  </div>
);

export default ServicesPage;
