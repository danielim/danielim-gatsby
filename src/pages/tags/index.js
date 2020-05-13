// @format
import React from 'react';
import {kebabCase} from 'lodash';
import {Link, graphql} from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const TagsPage = ({
  location,
  data: {
    allMarkdownRemark: {group},
    site: {
      siteMetadata: {title},
    },
  },
}) => (
  <Layout>
    <SEO
      pathname={`${location.pathname}`}
      title={`Tags`}
      description={`list of tags which allow you to browse through the content of this website by topic.`} />
    <section className="container">
      <h1>Tags</h1>
      <ul className="tag-list">
        {group.map(tag => (
          <li className="tag-item" key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
