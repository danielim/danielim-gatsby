// @format
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  helmet
}) => {
  const PageContent = contentComponent || Content;

  return (
    <article className="container about">
      {helmet || ""}
      <h1 className="">{title}</h1>
      <PageContent className="content" content={content} />
    </article>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ location, data }) => {
  const { markdownRemark: post } = data;
  console.log(location.pathname);
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        helmet={<SEO pathname={`${location.pathname}`} title={`About`} />}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
