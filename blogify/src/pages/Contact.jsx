import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Contact Us Page
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <ContactForm/>
      </div>
    </div>
  );
}

export default Contact;
