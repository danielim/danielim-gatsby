// @format
import React from 'react';
import PropTypes from 'prop-types';
import {kebabCase} from 'lodash';
import Helmet from 'react-helmet';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';
import PortfolioContent, {
  PortfolioHTMLContent,
} from '../components/PortfolioContent';

export const PortfolioEntryTemplate = ({
  content,
  contentComponent,
  coverImage,
  description,
  tags,
  title,
  helmet,
}) => {
  const EntryContent = contentComponent || PortfolioContent;

  return (
    <article>
      <header
        className="portfolio-cover"
        style={{
          backgroundImage: `url(${
            !!coverImage.childImageSharp
              ? coverImage.childImageSharp.fluid.src
              : coverImage
          })`,
          backgroundPosition: `center`,
          backgroundAttachment: `fixed`,
        }}>
        <h1 className="portfolio-title">{title}</h1>
        <div className="portfolio-description-background">
          <p className="container">{description}</p>
        </div>
      </header>
      {helmet || ''}
      <EntryContent className="container" content={content} />
      {tags && tags.length ? (
        <div
          className="container"
          style={{marginTop: `4rem`, marginBottom: `8rem`}}>
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
    </article>
  );
};

PortfolioEntryTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  coverImage: PropTypes.object,
  helmet: PropTypes.object,
};

const PortfolioEntry = ({data}) => {
  const {markdownRemark: entry} = data;
  console.log(entry.html);
  return (
    <Layout>
      <PortfolioEntryTemplate
        content={entry.html}
        contentComponent={PortfolioHTMLContent}
        coverImage={entry.frontmatter.coverimage}
        description={entry.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${entry.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${entry.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={entry.frontmatter.tags}
        title={entry.frontmatter.title}
      />
    </Layout>
  );
};

PortfolioEntry.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default PortfolioEntry;

export const pageQuery = graphql`
  query PortfolioEntryByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        coverimage {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        tags
      }
    }
  }
`;
