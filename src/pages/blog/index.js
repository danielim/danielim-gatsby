import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
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
              textAlign: 'center'
            }}
          >
            Ramblings of a clueless tinkerer
          </h1>
        </div>
        <section className="container">
          <BlogRoll />
        </section>
      </Layout>
    )
  }
}
