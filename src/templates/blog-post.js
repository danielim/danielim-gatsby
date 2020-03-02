// @format
import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { graphql, Link } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="container content">
      {helmet || ""}
      <h1 className="">{title}</h1>
      <p>{description}</p>
      <PostContent content={content} />
      <p>
        Got comments or issues with what I wrote? Please let me know by{" "}
        <a href="https://github.com/danielim/danielim-gatsby/issues">
          submitting an issue with the blog title :)
        </a>
      </p>
      {tags && tags.length ? (
        <div style={{ marginTop: `4rem`, marginBottom: `12rem` }}>
          <h4>Tags</h4>
          <ul className="tag-list">
            {tags.map(tag => (
              <li className="tag-item" key={tag + `-tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ location, data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <SEO
            title={`${post.frontmatter.title}`}
            updatedTime={`${post.frontmatter.updatedTime}`}
            image={`${(post.frontmatter.featuredimage &&
              post.frontmatter.featuredimage.childImageSharp.fixed.src) ||
              undefined}`}
            imageAlt={post.frontmatter.featuredimagealt}
            article={true}
            description={`${post.frontmatter.description}`}
            pathname={`${location.pathname}`}
          />
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        updatedTime: date
        title
        description
        featuredimage {
          childImageSharp {
            fixed(width: 1200, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        featuredimagealt
        tags
      }
    }
  }
`;
