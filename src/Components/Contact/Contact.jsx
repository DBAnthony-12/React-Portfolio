import React, { useState } from "react";
import "./Contact.css";
import phonecall from "../../assets/Call_Me.png";
import emailme from "../../assets/EmailMe.png";
import location from "../../assets/Pin_Location.png";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "2a591765-5d65-490d-9547-566393d613ca");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setSubmitting(false);

    if (res.success) {
      alert(res.message);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    } else {
      // Handle error scenario if needed
      alert("Failed to send message. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's Talk</h2>
          <p>
            I will be happy to take on new projects, so feel free to send me a
            message about anything and I will be happy to assist you on anything
            you want me to work on. Message me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={emailme} alt="" className="image" />{" "}
              <p>begumanthony@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={phonecall} alt="" className="image" />{" "}
              <p>074 731 8388</p>
            </div>

            <div className="contact-detail">
              <img src={location} alt="" className="image" />{" "}
              <p>Cape Town Western Cape</p>
            </div>
          </div>
        </div>

        <div class="form-container">
          <form onSubmit={onSubmit} class="contact-right">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />

            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />

            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="8"
              placeholder="Enter your message"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" class="contact-submit" disabled={submitting}>
              {submitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
