import axios from 'axios';

const BASE_URL = 'https://mailer.advokaty69.ru';
const STUB_DELAY = 1000;
const METHODS = ['GET', 'DELETE', 'HEAD', 'POST', 'PUT', 'PATCH'];

const sidedRequest = opts => {
  console.log('in sided');
  return axios({ baseURL: BASE_URL, ...opts });
};

export const externalRequest = (externalUrl, opts) =>
  axios({ url: externalUrl, ...opts });

const stubRequest = opts => {
  const { stubData, stubDelay = STUB_DELAY } = opts;
  console.log('in stub');

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: stubData });
    }, stubDelay);
  });
};

const doRequest = opts => {
  console.log('in do request');
  if (opts.stubData) {
    return stubRequest(opts);
  }

  return sidedRequest(opts);
};

const request = METHODS.reduce((req, method) => {
  req[method] = opts => doRequest({ ...opts, method });
  return req;
}, {});

export default request;
