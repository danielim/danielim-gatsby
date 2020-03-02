// @format
import React from "react";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          pathname={`${this.props.location.pathname}`}
          title={`Blog Roll`}
          description={`List of articles, notes, and fleeting thoughts written by Daniel Chen.`}
        />
        <header
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.png')`
          }}
        >
          <h1
            style={{
              boxShadow: "0.5rem 0 0 #cc0000, -0.5rem 0 0 #cc0000",
              padding: "1rem",
              textAlign: "center"
            }}
          >
            Ramblings of a clueless tinkerer
          </h1>
        </header>
        <section className="container">
          <BlogRoll />
        </section>
      </Layout>
    );
  }
}
