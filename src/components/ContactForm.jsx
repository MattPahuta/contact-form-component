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
    hasConsent: false
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className="grid gap-6 accent-brand-green-600 sm:grid-cols-2">
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
        name="consent"
        value={formData.hasConsent}
        onChange={handleChange}
        required
      />
      <button className="py-3.5 col-span-full bg-brand-green-600 text-white font-bold rounded-lg cursor-pointer hover:bg-brand-green-900 transition">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;