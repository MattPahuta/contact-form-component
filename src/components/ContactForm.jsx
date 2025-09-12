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
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({...prevErrors, [name]: ""}));
  }

  function validate() {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "This field is required";
    if (!formData.lastName.trim()) newErrors.lastName = "This field is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.query) newErrors.query = "Please select a query type";
    if (!formData.message) newErrors.message = "This field is required";
    if (!formData.consent) newErrors.consent = "To submit this form, please consent to being contacted";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 accent-brand-green-600 sm:grid-cols-2">
      <Input
        label="First Name"
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
        required
      />
      <Input
        label="Last Name"
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
        required
      />
      <Input
        label="Email Address"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        colSpanFull
      />
      <RadioFieldset legend="Query Type" id="query" onChange={handleChange} error={errors.query} />
      <TextareaInput
        label="Message"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
      />
      <CheckboxInput
        label="I consent to being contacted by the team"
        id="consent"
        name="consent"
        checked={formData.consent}
        onChange={handleChange}
        error={errors.consent}
        required
      />
      <button type="submit" className="py-3.5 col-span-full bg-brand-green-600 text-white font-bold rounded-lg cursor-pointer hover:bg-brand-green-900 transition focus-visible:bg-brand-green-900 focus-visible:outline-2 focus-visible:outline-brand-green-600/40 focus-visible:outline-offset-1">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;