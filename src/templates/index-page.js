// @format
import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import instagram from '../img/social/instagram.svg';
import linkedin from '../img/social/linkedin.svg';
import twitter from '../img/social/twitter.svg';
import codepen from '../img/social/codepen.svg';
import github from '../img/social/github.svg';

import Layout from '../components/Layout';

export const IndexPageTemplate = ({title, heading, social}) => (
  <main className="index-center">
    <h1 className="index-title">{title}</h1>
    <h2 className="index-heading">{heading}</h2>
    <aside>
      <ul className="social-list">
        <li className="social-item">
          <a
            title="@imdanielch"
            href={social.twitter}
            rel="noopener noreferrer"
            target="_blank">
            <img src={twitter} alt="Twitter" className="social-icon" />
          </a>
        </li>
        <li className="social-item">
          <a
            title="danielim"
            href={social.github}
            rel="noopener noreferrer"
            target="_blank">
            <img src={github} alt="GitHub" className="social-icon" />
          </a>
        </li>
        <li className="social-item">
          <a
            title="imdanielch"
            href={social.linkedin}
            rel="noopener noreferrer"
            target="_blank">
            <img src={linkedin} alt="Linkedin" className="social-icon" />
          </a>
        </li>
        <li className="social-item">
          <a
            title="danielim"
            href={social.codepen}
            rel="noopener noreferrer"
            target="_blank">
            <img src={codepen} alt="CodePen" className="social-icon" />
          </a>
        </li>
        <li className="social-item">
          <a
            title="@imdanielchen"
            href={social.instagram}
            rel="noopener noreferrer"
            target="_blank">
            <img src={instagram} alt="Instagram" className="social-icon" />
          </a>
        </li>
      </ul>
    </aside>
    <svg xmlns="<http://www.w3.org/2000/svg>" version="1.1">
      <defs>
        <filter id="social-filter">
          <feColorMatrix
            colorInterpolationFilters="sRGB"
            type="matrix"
            values="0.8 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0 "
          />
        </filter>
      </defs>
    </svg>
  </main>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  social: PropTypes.object,
};

const IndexPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        social={frontmatter.social}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        heading
        social {
          twitter
          linkedin
          github
          instagram
          codepen
        }
      }
    }
  }
`;
