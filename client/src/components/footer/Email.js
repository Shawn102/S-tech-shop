import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Divider } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
    const form = useRef();
  const [formValue, setFormValue] = useState("");
  useEffect(() => {
    setFormValue(form.value);
  }, [form]);
  const myServiceKey = process.env.REACT_APP_SERVICE_ID;
  const myTemplateId = process.env.REACT_APP_TEMPLATE_ID;
  const myPublicKey = process.env.REACT_APP_PUBLIC_KEY;

  //   console.log(myPublicKey);
  console.log(formValue);
  console.log(form.value);
  const sendEmail = (e) => {
    e.preventDefault();
      emailjs
        .sendForm(myServiceKey, myTemplateId, form.current, myPublicKey)
        .then((res) => {
          toast.success("Subscribed Successfully:)", {
            position: "top-center",
          });
        })
        .catch((error) => {
          toast.warn("An error occured, Plese try again");
        });
      e.target.reset();
  };
  return (
    <div className="padding-contact-form">
      <h3 className="titles-footer">Don't miss Out</h3>
      <Divider style={{ background: "crimson" }} />
      <p>Subscribe for latest products samples and coupons</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          
          type="email"
          name="email"
          placeholder="your@email.com"
          className="input-email-sec"
          required
          autoComplete="off"
        />
        <button type="submit" className="message-type-submit-contact">
          Subscribe
        </button>
      </form>
    </div>
  );
};
