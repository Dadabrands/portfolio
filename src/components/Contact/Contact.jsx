import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_to5t0e9",
        "template_9zkpxko",
        form.current,
        "qMQOrXe6TjO5gfHZV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies i have worked with includes
        </p>
        <div className="clientImgs">
          <img
            src="../../assets/walmart.png"
            alt="Client"
            className="clientImg"
          />
          <img
            src="../../assets/adobe.png"
            alt="Client"
            className="clientImg"
          />
          <img
            src="../../assets/microsoft.png"
            alt="Client"
            className="clientImg"
          />
          <img
            src="../../assets/facebook.png"
            alt="Client"
            className="clientImg"
          />
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunity
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img
              src="../../assets/facebook-icon.png"
              alt="Facebook"
              className="link"
            />
            <img
              src="../../assets/twitter.png"
              alt="Twitter"
              className="link"
            />
            <img
              src="../../assets/youtube.png"
              alt="Youtube"
              className="link"
            />
            <img
              src="../../assets/instagram.png"
              alt="Instagram"
              className="link"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
