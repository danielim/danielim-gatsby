import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
const SEO = ({ titleTemplate, title, description, image, imageAlt, pathname, article, updatedTime }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultTitleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          defaultImageAlt,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        titleTemplate: titleTemplate || defaultTitleTemplate,
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
        updatedTime: updatedTime || null,
        imageAlt: `${ image ? imageAlt || title || defaultTitle : defaultImageAlt}`,
      }
      return (
        <>
          <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta name="og:url" property="og:url" content={seo.url} />}
            <meta name="og:type" property="og:type" content={`${article ? "article": "website"}`} />
            {seo.title && <meta name="og:title" property="og:title" content={seo.title} />}
            {seo.description && (
              <meta name="og:description" property="og:description" content={seo.description} />
            )}
            {seo.updatedTime && <meta name="og:updated_time" property="og:updated_time" content={seo.updatedTime} />}
            {seo.image && <meta name="og:image" property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content={seo.imageAlt} />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        </>
      )
    }}
  />
)
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultTitleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        defaultImageAlt: imageAlt
        twitterUsername
      }
    }
  }
`
