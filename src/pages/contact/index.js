// @format
import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <SEO
          pathname={`${this.props.location.pathname}`}
          title={`Contact`}
          description={`Contact page for Daniel Chen. Please fill in your name, e-mail, and message. I'll try to get back to you as soon as possible.`}
        />
        <div className="container">
          <div className="content">
            <h1>Contact</h1>
            <p>
              You can use this contact form to message me or you can reach out
              to me on <a href="https://twitter.com/imdanielch">twitter</a> or{" "}
              <a href="https://www.linkedin.com/in/imdanielch/">linkedin</a>.
            </p>
            <form
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="contact-input-group">
                <label className="label" htmlFor={"name"}>
                  Your name
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                  />
                </div>
              </div>
              <div className="contact-input-group">
                <label className="label" htmlFor={"email"}>
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                  />
                </div>
              </div>
              <div className="contact-input-group">
                <label className="label" htmlFor={"message"}>
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name={"message"}
                    onChange={this.handleChange}
                    id={"message"}
                    required={true}
                  />
                </div>
              </div>
              <div className="">
                <button className="button is-link" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}
