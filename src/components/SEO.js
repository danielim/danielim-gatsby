import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { withPrefix } from "gatsby"

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
            <html lang="en" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href={`${withPrefix("/")}img/apple-touch-icon.png`}
            />
            <link
              rel="icon"
              type="image/png"
              href={`${withPrefix("/")}img/favicon-32x32.png`}
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href={`${withPrefix("/")}img/favicon-16x16.png`}
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
              color="#ff4400"
            />
            <meta name="theme-color" content="#f5f2ed" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            <meta property="og:type" content={`${article ? "article": "website"}`} />
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.updatedTime && <meta property="og:updated_time" content={seo.updatedTime} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
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
