import { useState, useRef } from "react";
import Input from "./inputs/Input";
import RadioGroup from "./inputs/RadioGroup";
import TextareaInput from "./inputs/TextareaInput";
import CheckboxInput from "./inputs/CheckboxInput";
import ModalDialog from "./ModalDialog";

function ContactForm() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const refs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    queryType: useRef(null),
    message: useRef(null),
    consent: useRef(null),
  };

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
    if (!formData.queryType) newErrors.queryType = "Please select a query type";
    if (!formData.message) newErrors.message = "This field is required";
    if (!formData.consent) newErrors.consent = "To submit this form, please consent to being contacted";
    
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstInvalidField = Object.keys(newErrors)[0];
      refs[firstInvalidField]?.current?.focus();
      return;
    }
    console.log("form submitted:", formData);

    setShowModal(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    });

  }

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit}
        className="grid gap-6 accent-brand-green-600 sm:grid-cols-2">
        <Input
          inputRef={refs.firstName}
          label="First Name"
          type="text"
          id="firstName"
          name="firstName"
          required
          autocomplete="given-name"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <Input
          inputRef={refs.lastName}
          label="Last Name"
          type="text"
          id="lastName"
          name="lastName"
          required
          autocomplete="family-name"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
        <Input
          inputRef={refs.email}
          label="Email Address"
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          colSpanFull
        />
        <RadioGroup
          inputRef={refs.queryType}
          legend="Query Type"
          name="queryType"
          required
          options={[
            { value: 'general', label: 'General Enquiry' },
            { value: 'support', label: 'Support Request' },
          ]}
          value={formData.queryType}
          onChange={handleChange}
          error={errors.queryType}
        />
        <TextareaInput
          inputRef={refs.message}
          label="Message"
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />
        <CheckboxInput
          inputRef={refs.consent}
          label="I consent to being contacted by the team"
          id="consent"
          name="consent"
          required
          checked={formData.consent}
          onChange={handleChange}
          error={errors.consent}
        />
        <button
          type="submit"
          className="py-3.5 col-span-full bg-brand-green-600 text-white font-bold rounded-lg shadow-xs cursor-pointer hover:bg-brand-green-900 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-900 focus-visible:bg-brand-green-900 ">
          Submit
        </button>
      </form>
      {showModal && (
        <ModalDialog onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default ContactForm;