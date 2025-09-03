function ContactForm() {
  return (
    <div className="my-8 mx-4 p-6 rounded-2xl bg-white">
      <h1 className="text-heading font-bold mb-8">Contact Us</h1>
      <form className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-1">
          <label htmlFor="firstName" className="block text-base">
            First Name *
          </label>
          <input
            id="firstName"
            type="text"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-brand-grey-900 outline-1 -outline-offset-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600"
          />
        </div>

        <div className="space-y-2 sm:col-span-1">
          <label htmlFor="lastName" className="block text-base">
            Last Name *
          </label>
          <input
            id="lastName"
            type="text"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-brand-grey-900 outline-1 -outline-offset-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="email" className="block text-base">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-brand-grey-900 outline-1 -outline-offset-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600"
          />
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="space-y-2 block text-base">
            Query Type
          </legend>

          <div className="mt-4 grid gap-2">
            <div className="flex items-center gap-2 pl-4 py-3.5 outline-1 -outline-offset-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 rounded-md">
              <input
                id="general"
                type="radio"
                name="query-type"
                value="general"
                className="h-4 w-4 accent-brand-green-600"
              />
              <label htmlFor="general" className="block text-base">
                General Enquiry
              </label>
            </div>

            <div className="flex items-center gap-2 pl-4  py-3.5 outline-1 -outline-offset-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 rounded-md">
              <input
                id="support"
                type="radio"
                name="query-type"
                value="support"
                className="h-4 w-4 accent-brand-green-600"
              />
              <label htmlFor="support" className="block text-base">
                Support Request
              </label>
            </div>
          </div>
        </fieldset>

        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="message" className="block text-base">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full border border-brand-grey-500 rounded-lg"></textarea>
        </div>

        <div>
          <input type="checkbox" id="contactConsent" />
          <label for="contactConsent">
            I consent to being contacted by the team
          </label>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;