/* eslint-disable */
import React, { Fragment, PureComponent } from 'react';
import WheelIndicator from 'wheel-indicator';
import classNames from 'classnames';
import { Router } from "@reach/router"

import MainHomePage from '_components/MainHomePage';
// import AboutUsPage from '_components/AboutUsPage';
// import ServicesPage from '_components/ServicesPage';
// import ContactPage from '_components/ContactPage';
import MainSection from './MainSection';
import InformationSection from '_components/InformationSection';

import { legalEntityMenuItems, individualMenuItems } from '_components/ServicesPage/data.js';

import './HomePage.module.scss';

class HomePage extends PureComponent {
  state = {
    page: 0,
    maxPage: 4,
    innerHeight: 0,
    innerHeight: 0,
    y: 0,
    services: 'smth',
    lawyer: '',
    service: '',
  }

  componentDidMount() {
    const { innerWidth, innerHeight } = window;
    this.setState({ innerHeight: innerHeight, innerWidth: innerWidth});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('MOUNT-1');
    window.scrollTo(0, Number(sessionStorage.getItem('scroll')));
  }

  changePositionY = (page) => {
    const { innerHeight, innerWidth } = window;
    if (innerWidth > 1250) {
      const root = document.getElementsByClassName('root')[0];
      const newY = page * innerHeight;
      root.style.transform = "translate3d(0,-" + newY.toString() + "px,0)";
    }
  }

  handleButtonClick = (index = null) => {
    this.setState({ lawyer: index }, 
      () =>  document.getElementsByClassName("name")[0].scrollIntoView({block: "start"}));
  }

  getInformation = (slug) => {
    if (slug.includes('services&individual&')) {
      return individualMenuItems.find(service => service.link === slug);
    }
    else {
      return legalEntityMenuItems.find(service => service.link === slug);
    }
  }

  handleChangeServices = (slug) => {
    if (slug.includes('services&individual&') ||
      slug.includes('services&legal-entity&')) {
      console.log(slug, window.scrollY);
      this.setState({
        y: window.scrollY,
      })
    }
    this.setState({
      services: slug,
    });
  }

  goBack = (slug) => {
    this.setState({ services: slug }, () => {
      console.log('I HATE IT');
      window.scrollTo(0, Number(sessionStorage.getItem('scroll')));
    });
  }

  getRequestValue = (data) => {
    const { lawyer, service } = this.state;
    return {
      ...data,
      lawyer,
      service,
    };
  }

  render() {
    const { innerWidth } = this.state;
    return (
      <Router basepath="/">
        <InformationSection
          path="services&individual/:serviceId"
          type="services&individual"
          goBack={this.goBack}
          handleChangeSlug={this.handleChangeServices}
          handleButtonClick={this.handleButtonClick}
          selectService={(service) => {this.setState({ service: service })}}
        />
        <InformationSection
          path="services&legal-entity/:serviceId"
          type="services&legal-entity"
          goBack={this.goBack}
          handleChangeSlug={this.handleChangeServices}
          handleButtonClick={this.handleButtonClick}
          selectService={(service) => {this.setState({ service: service })}}
        />
        <MainSection
          path="/"
          handleButtonClick={this.handleButtonClick}
          innerWidth={innerWidth}
          getRequestValue={this.getRequestValue}
          setY={(yPos)=>{this.setState({y: yPos})}}
        />
        <MainSection path="services&individual"
          handleButtonClick={this.handleButtonClick}
          innerWidth={innerWidth}
          getRequestValue={this.getRequestValue}
          setY={(yPos)=>{this.setState({y: yPos})}}
        />
        <MainSection path="services&legal-entity"
          handleButtonClick={this.handleButtonClick}
          innerWidth={innerWidth}
          getRequestValue={this.getRequestValue}
          setY={(yPos)=>{this.setState({y: yPos})}}
        />
      </Router>
    );
  }
}

export default HomePage;
