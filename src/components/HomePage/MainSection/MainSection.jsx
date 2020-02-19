
import React, { Fragment, PureComponent, useEffect } from 'react';
import MainHomePage from '_components/MainHomePage';
import AboutUsPage from '_components/AboutUsPage';
import ServicesPage from '_components/ServicesPage';
import ContactPage from '_components/ContactPage';

import '.././HomePage.module.scss';

const ScrollToPos = props => {
  useEffect(() => {
    window.scrollTo(0, 1500);
  }, []);

  return null;
};

const MainSection = ({
  path,
  handleButtonClick,
  innerWidth,
  getRequestValue,
  setY,
}) => {
  useEffect(() => {
    window.scrollTo(0, 1500);
  }, []);

  return (
    <div className="root" styleName="slider-root" id="slider-root">
      <MainHomePage handleClick={handleButtonClick}/>
      <AboutUsPage handleClick={handleButtonClick} />
      <ScrollToPos slug={path} />
      <ServicesPage
        slug={path}
        setY={setY}
      />
      <ContactPage
        innerWidth={innerWidth}
        getRequestValue={getRequestValue}
      />
    </div>
  )
};

// class MainSection extends PureComponent {

//   render() {
//   const {
//     path,
//     handleButtonClick,
//     innerWidth,
//     getRequestValue,
//     setY,
//   } = this.props;
//   return(
//     <div className="root" styleName="slider-root" id="slider-root">
//       <MainHomePage handleClick={handleButtonClick}/>
//       <AboutUsPage handleClick={handleButtonClick} />
//       <ScrollToPos slug={path} />
//       <ServicesPage
//         slug={path}
//         setY={setY}
//       />
//       <ContactPage
//         innerWidth={innerWidth}
//         getRequestValue={getRequestValue}
//       />
//     </div>
//   );};
// };

export default MainSection;