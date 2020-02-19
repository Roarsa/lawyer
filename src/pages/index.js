import React, { Fragment } from "react"

import HomePage from '../components/HomePage';
import SEO from "../components/seo"

import '../styles/styles.scss';

const IndexPage = () => (
  <Fragment>
    <SEO
      lang="ru"
      meta={[
        {
          name: 'yandex-verification',
          content: '4299b1a51009a72f',
        },
        {
          name: 'google-site-verification',
          content: 'MBmM9oYBd-YjTAfetyxGeRtzvqeyJwSJifXdXd8Ijl4',
        }
      ]}/>
    <HomePage />
  </Fragment>
)

export default IndexPage
