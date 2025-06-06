import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  RiSendPlaneLine,
  RiArrowRightUpLine,
  RiChat3Line,
  RiArrowRightLine,
} from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const formEl = form.current;
    const userName = (formEl.user_name as HTMLInputElement)?.value || "";
    const userEmail = (formEl.user_email as HTMLInputElement)?.value || "";
    const userMessage = (formEl.message as HTMLTextAreaElement)?.value || "";

    // Immediately reset and show toast
    formEl.reset();
    toast.success("Message submitted!", {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
    });

    // Fire off emails in background — no await, no blocking
    emailjs
      .sendForm(
        "service_wwa3qq9",
        "template_8vmvfcr",
        formEl,
        "ID5dZkGU3mFS7dmD-"
      )
      .catch((err) => {
        console.error("Admin email error:", err);
        // Optionally: notify admin via other means or log silently
      });

    emailjs
      .send(
        "service_wwa3qq9",
        "template_3e4qm4e",
        {
          user_name: userName,
          user_email: userEmail,
          message: userMessage,
        },
        "ID5dZkGU3mFS7dmD-"
      )
      .catch((err) => {
        console.error("Auto-reply email error:", err);
        // Optional silent fail
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid section__border">
        {/* Text Me Panel */}
        <div className="contact__content">
          <h3 className="contact__title">
            <RiChat3Line /> Text me
          </h3>
          <div className="contact__info">
            <div className="contact__data">
              <span className="contact__data-title">Email</span>
              <span className="contact__data-info">
                kishores.developer@gmail.com
              </span>
            </div>
            <div className="contact__data">
              <span className="contact__data-title">WhatsApp</span>
              <span className="contact__data-info">+91 9500041579</span>
              <a
                href="https://api.whatsapp.com/send?phone=9500041579&text=Get in Touch – Let’s Build Something Great!"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button"
              >
                Text me <RiArrowRightLine />
              </a>
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="contact__content">
          <h3 className="contact__title">
            <RiSendPlaneLine /> Have a query for me?
          </h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="user_name">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                placeholder="Your name"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="user_email">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                placeholder="Your email"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Ask me something?"
                className="contact__form-input"
              ></textarea>
            </div>

            <button type="submit" className="contact__button ms-5">
              Send <RiArrowRightUpLine />
            </button>
          </form>
        </div>
      </div>
<ToastContainer
  position="top-center"      // center top - easier to see on mobile
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
/>

    </section>
  );
};

export default Contact;
