// @format
import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state to show if burger menu is open
      active: false,
      navBarActiveClass: ""
    };
  }

  handleKeyDownBurger = ev => {
    if (ev.keyCode === 13) {
      return this.toggleHamburger();
    }
  };
  handleClickBurger = () => {
    return this.toggleHamburger();
  };
  toggleHamburger = () => {
    // toggle the burger active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    const { data } = this.props;
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <Link className="logo" to="/">
          <img src={data.logo.childImageSharp.fixed.src} alt="ren logo" />
        </Link>
        {/* Hamburger menu */}
        {/* https://github.com/reactjs/react-a11y/blob/master/docs/rules/interactive-supports-focus.md */}
        <div
          role="button"
          tabindex="0"
          className={`navbar-burger-logo ${this.state.navBarActiveClass}`}
          data-target="navMenu"
          onKeyDown={this.handleKeyDownBurger}
          onClick={this.handleClickBurger}
        >
          <img
            style={{ width: "40px" }}
            src={data.logo.childImageSharp.fixed.src}
            alt="ren logo"
          />
          <span className="pad-left">Menu</span>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${this.state.navBarActiveClass}`}
        >
          <ul className={`navbar-menu-list`}>
            <li className="navbar-item item-burger-close">
              <div
                tabindex="0"
                role="button"
                className={`navbar-burger-close ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onKeyDown={this.handleKeyDownBurger}
                onClick={this.handleClickBurger}
              >
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
        </div>
      </nav>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 100, quality: 100) {
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
