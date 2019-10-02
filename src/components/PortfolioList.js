// @format
import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class PortfolioList extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: entrys} = data.allMarkdownRemark;

    console.log(entrys);
    return (
      <div className="portfolio-list">
        {entrys &&
          entrys.map(({node: entry}) => (
            <section
              key={entry.id}
              className={`portfolio-item ${
                entry.frontmatter.featuredentry ? 'is-featured' : ''
              }`}>
              {entry.frontmatter.featuredimage ? (
                <div className="portfolio-list-image">
                  <Link
                    className="portfolio-list-image-link"
                    to={entry.fields.slug}>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: entry.frontmatter.featuredimage,
                        alt: `featured image thumbnail for entry ${entry.title}`,
                      }}
                    />
                  </Link>
                </div>
              ) : (
                <div className="portfolio-list-image portfolio-list-placeholder">
                  <Link
                    className="portfolio-list-image-link"
                    to={entry.fields.slug}>
                    {entry.frontmatter.title[0]}
                  </Link>
                </div>
              )}
              <div className="portfolio-entry-meta">
                <Link className="portfolio-entry-title" to={entry.fields.slug}>
                  <h2>{entry.frontmatter.title}</h2>
                </Link>
                <p>{entry.frontmatter.description}</p>
              </div>
            </section>
          ))}
      </div>
    );
  }
}

PortfolioList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioListQuery {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "portfolio-entry"}}}
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                featuredentry
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PortfolioList data={data} count={count} />}
  />
);
