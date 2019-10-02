import React from 'react'

import Layout from '../../components/Layout'
import PortfolioList from '../../components/PortfolioList'

export default class PortfolioIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.png')`,
          }}
        >
          <h1
            style={{
              boxShadow: '0.5rem 0 0 #cc0000, -0.5rem 0 0 #cc0000',
              padding: '1rem',
            }}
          >
            Portfolio
          </h1>
        </div>
        <section className="container">
          <PortfolioList />
        </section>
      </Layout>
    )
  }
}
