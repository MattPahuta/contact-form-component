import { useState } from "react";
import Input from "./inputs/Input";
import RadioFieldset from "./inputs/RadioFieldset";
import TextareaInput from "./inputs/TextareaInput";
import CheckboxInput from "./inputs/CheckboxInput";

function ContactForm() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    query: '',
    message: '',
    consent: false
  })

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 accent-brand-green-600 sm:grid-cols-2">
      <Input
        label="First Name"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <Input
        label="Last Name"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <Input
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        colSpanFull
      />
      <RadioFieldset legend="Query Type" onChange={handleChange} />
      <TextareaInput
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <CheckboxInput
        label="I consent to being contacted by the team"
        id="consent"
        name="consent"
        checked={formData.consent}
        onChange={handleChange}
        required
      />
      <button type="submit" className="py-3.5 col-span-full bg-brand-green-600 text-white font-bold rounded-lg cursor-pointer hover:bg-brand-green-900 transition focus-visible:bg-brand-green-900 focus-visible:outline-2 focus-visible:outline-brand-green-600/40 focus-visible:outline-offset-1">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;