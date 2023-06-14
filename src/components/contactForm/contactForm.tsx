import { useState } from "react";
import texts from "utils/texts.json";
import { toast } from "react-hot-toast";
import "./contactForm.css";
import { SEND_EMAIL_URL } from "utils/consts";

export type EmailProps = {
  from: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [emailFrom, setEmailFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(SEND_EMAIL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({emailFrom, subject, message}),
      });

      if (response.ok) {
        toast.success("E-mail sent successfully");
        setEmailFrom("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("Error sending E-mail");
      }
    } catch (error) {
      toast.error(`Network error ${error}`);
    }
  };

  return (
    <>
      <div className="contact-form-title"> {texts.CONTACT_ME} </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-item">
          <div style={{ margin: "1rem" }}>Your E-mail:</div>
          <input
            type="email"
            placeholder="Type your e-mail address"
            value={emailFrom}
            onChange={(e) => setEmailFrom(e.target.value)}
            required={true}
          />
        </div>
        <div className="form-item">
          <div style={{ margin: "1rem" }}>Subject:</div>
          <input
            type="text"
            placeholder="Type the subject of your e-mail"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required={true}
            autoComplete="subject"
          />
        </div>
        <div className="form-item">
          <div style={{ margin: "1rem" }}>Message:</div>
          <textarea
            placeholder="Type the message of your e-mail"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required={true}
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
