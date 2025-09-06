import { useState } from "react";
import Input from "./inputs/Input";
import RadioFieldset from "./inputs/RadioFieldset";
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
    <form className="grid gap-6 sm:grid-cols-2">
      <Input
        label="First Name"
        type="text"
        name="firstName"
        id="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <Input
        label="Last Name"
        type="text"
        name="lastName"
        id="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <Input
        label="Email Address"
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
        colSpanFull
      />
      <RadioFieldset />

      <div className="space-y-2 sm:col-span-full">
        <label htmlFor="message" className="block text-base">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="w-full border border-brand-grey-500 rounded-lg"></textarea>
      </div>



      <button className="py-3.5 col-span-full bg-brand-green-600 text-white font-semibold rounded-lg cursor-pointer">Submit</button>
    </form>
  );
}

export default ContactForm;