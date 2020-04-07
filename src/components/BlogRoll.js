// @format
import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';

class BlogRoll extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;
    return (
      <div className="blogroll-wrapper">
        {posts &&
          posts.map(({node: post}) => (
            <section
              key={post.id}
              className={`blogroll-item ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}>
              <h2 className="blogroll-blog-title">
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </h2>
              <span className="blogroll-blog-date">
                {post.frontmatter.date}
              </span>
              <p>
                {post.excerpt}
                <br />
                <Link className="blogroll-keep-reading" to={post.fields.slug}>
                  Continue reading "{post.frontmatter.title}" →
                </Link>
              </p>
            </section>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
