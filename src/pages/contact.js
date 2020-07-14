import React from "react";
import { navigate } from "gatsby-link";
import Footer from "../components/footer";
import "../styles/contact.css";
import SEO from "../components/seo";
import HeaderPage from "../components/header";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <div>
      <SEO title="Contact" />
      <HeaderPage />
      <div className="work">
        <h2>
          Let's Work Together <b>🤝</b> Shall We?
        </h2>
        <h4>
          I'm currently available to work on any project and I'm happy to
          discuss new opportunities. I work with a selected number of clients at
          a time to ensure delivery of meaningful high quality results. If I
          think that I won’t be a good fit for your idea, I’ll tell you so and
          recommend you other solutions.
          <br />
          <br />
          As a designer, developer and photographer with a business background
          I’m focused on creating projects, which are delightful and profitable
          at the same time.
        </h4>
        <p>
          Got a proposal, job offer or just want to say hello? Go ahead and fill
          the form!
        </p>
      </div>
      <div className="ContactForm">
        <form
          action="/success/"
          className="contact-form"
          name="Contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form1">
            <div className="input1">
              <label for="full-name"> Your Name </label>
              <input
                id="full-name"
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="What's your name?"
                required="required"
              />
            </div>
            <div className="input2">
              <label for="email">Your Email Address</label>
              <input
                id="email"
                type="email"
                name="_replyto"
                onChange={handleChange}
                placeholder="What's your email address?"
                required="required"
              />
            </div>
          </div>
          <div className="formselect">
            <div className="selectforms">
              <label for="service">Select Service</label>
              <select
                id="service"
                name="service"
                onChange={handleChange}
                required
                tabIndex="0"
              >
                <option value selected disabled>
                  What are you interested in?
                </option>
                <option value="Need help with a one-off project">
                  Need help with a one-off project
                </option>
                <option value="Looking for a long term patnership">
                  Looking for a long term patnership
                </option>
                <option value="Want to hire me full-time">
                  Want to hire me full-time
                </option>
                <option value="Just wanted to say hi!">
                  Just wanted to say hi!
                </option>
              </select>
            </div>
          </div>
          <div className="form2">
            <div className="input3">
              <label for="message">Your Message</label>
              <textarea
                rows="1"
                id="message"
                name="message"
                onChange={handleChange}
                required="required"
                placeholder="Hi, I need ABC for XYZ. How soon can we have a
              discussion regarding this?"
                minLength="30"
              />
            </div>
          </div>
          <button type="submit" id="submit-button">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
