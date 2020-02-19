function gtag(title) {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({ // eslint-disable-line
    event: 'pageview',
    hostname: 'www.mantl.com',
    url: window.location.toString(),
    path: window.location.pathname,
    path_query: window.location.pathname + window.location.search,
    page_title: `MANTL | Modernize your account opening - ${title}`,
  });
}

export default gtag;
