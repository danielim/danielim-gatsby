// @format
import React from 'react';
import {Link, graphql, StaticQuery} from 'gatsby';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state to show if burger menu is open
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the burger active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      },
    );
  };

  render() {
    const {data} = this.props;
    console.log(data.logo);
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <Link className="logo" to="/">
          {/*
          <PreviewCompatibleImage
            className="logo"
            imageInfo={{
              image: data.logo,
              alt: 'ren logo',
            }}
          />
          */}
          <img src={data.logo.childImageSharp.fixed.src} alt="ren logo" />
        </Link>
        {/* Hamburger menu */}
        <div
          className={`navbar-burger-logo ${this.state.navBarActiveClass}`}
          data-target="navMenu"
          onClick={() => this.toggleHamburger()}>
          {/*
          <PreviewCompatibleImage
            className="navbar-burger-logo-image"
            imageInfo={{
              image: data.burger,
              alt: 'ren logo',
            }}
          />
          */}
          <img src={data.burger.childImageSharp.fixed.src} alt="ren logo" />
          <span className="pad-left">Menu</span>
        </div>
        <ul
          id="navMenu"
          className={`navbar-menu ${this.state.navBarActiveClass}`}>
          <li className="navbar-item item-burger-close">
            <div
              className={`navbar-burger-close ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}>
              Close
            </div>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link navbar-link-home" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/about">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

//export default () => (
//  <StaticQuery
//    query={graphql`
//      query NavbarQuery {
//        logo: file(relativePath: {eq: "logo.png"}) {
//          childImageSharp {
//            fixed(width: 100, quality: 100) {
//              ...GatsbyImageSharpFixed
//            }
//          }
//        }
//        burger: file(relativePath: {eq: "logo.png"}) {
//          childImageSharp {
//            fluid(maxWidth: 40, quality: 100) {
//              ...GatsbyImageSharpFluid
//              presentationWidth
//            }
//          }
//        }
//      }
//    `}
//    render={data => {
//      return <Navbar data={data} />;
//    }}
//  />
//);
export default () => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        logo: file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            fixed(width: 100, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        burger: file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            fixed(width: 40, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      return <Navbar data={data} />;
    }}
  />
);
