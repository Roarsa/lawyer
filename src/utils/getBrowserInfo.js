import browser from 'bowser';

require('bowser/bundled');

export default () => {
  if (!__CLIENT__) {
    return {
      platform: { type: 'desktop' },
      browser: { name: 'default' },
      os: { name: 'default' },
    };
  }

  return browser.parse(window.navigator.userAgent);
};
