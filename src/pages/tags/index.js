// @format
import React from 'react';
import {kebabCase} from 'lodash';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import Layout from '../../components/Layout';

const TagsPage = ({
  data: {
    allMarkdownRemark: {group},
    site: {
      siteMetadata: {title},
    },
  },
}) => (
  <Layout>
    <Helmet title={`Tags | ${title}`} />
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
