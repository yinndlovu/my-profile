import { useState, useEffect } from "react";
import "./ContactForm.css";
import { useForm, ValidationError } from "@formspree/react";
import tickIcon from "../assets/icons/tick_icon.png";
import redXIcon from "../assets/icons/red_x_icon.png";
import { FiX } from "react-icons/fi";

const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const [state, handleSubmit] = useForm("xqaedrze");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className={`popup-overlay ${show ? "show" : ""}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`popup ${show ? "show" : ""}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="contact-form-x-button"
          onClick={handleClose}
          aria-label="Close contact form"
          type="button"
        >
          <FiX size={28} />
        </button>
        <h2>Contact Me</h2>
        {state.succeeded ? (
          <div className="success-message">
            <p className="message-sent">Message sent!</p>
            <img src={tickIcon} alt="Tick icon" className="tick-icon" />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email:
              <input id="email" type="email" name="email" required />
            </label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="message">
              Message:
              <textarea id="message" name="message" required />
            </label>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}
              className="contact-form-submit-button"
            >
              Send Message
            </button>
          </form>
        )}
        {state.errors && (
          <div className="fail-message">
            <p>Something went wrong...</p>
            <img src={redXIcon} alt="Red X icon" className="x-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
