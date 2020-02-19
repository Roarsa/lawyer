/*eslint-disable*/
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const pageWrapper = document.getElementById('scrollPageWrapper');
      if (pageWrapper.scrollTo) {
        pageWrapper.scrollTo(0, 0);
      } else {
        pageWrapper.scrollTop = 0;
      }
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);