function RadioFieldset() {
  return (
    <fieldset className="sm:col-span-2 space-y-2">
      <legend className="block text-base space-y-2">
        Query Type
      </legend>
      <div className="grid gap-4">
        <div className="flex items-center gap-5 pl-5 py-3.5 outline-1 -outline-offset-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 rounded-lg">
          <input
            id="general"
            type="radio"
            name="query-type"
            value="general"
            className="relative size-5 appearance-none rounded-full border border-brand-grey-500 bg-white before:absolute before:inset-1 before:rounded-full before:bg-brand-green-600 not-checked:before:hidden checked:border-brand-green-600 checked:bg-brand-green-200 checked:border-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-600 forced-colors:appearance-auto forced-colors:before:hidden"
          />
          <label
            htmlFor="general"
            className="block font-base text-brand-grey-900 hover:cursor-pointer">
            General Enquiry
          </label>
        </div>
        <div className="flex items-center gap-5 pl-5 py-3.5 outline-1 -outline-offset-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 rounded-lg">
          <input
            id="support"
            type="radio"
            name="query-type"
            value="support"
            className="relative size-5 appearance-none rounded-full border border-brand-grey-500 bg-white before:absolute before:inset-1 before:rounded-full before:bg-brand-green-600 not-checked:before:hidden checked:border-brand-green-600 checked:bg-brand-green-200 checked:border-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-600 forced-colors:appearance-auto forced-colors:before:hidden"
          />
          <label
            htmlFor="support"
            className="text-base text-brand-grey-900 hover:cursor-pointer">
            Support Request
          </label>
        </div>

        <label
          htmlFor="label-as-parent"
          className="text-base text-brand-grey-900 flex items-center gap-5 pl-5 py-3.5 outline-1 -outline-offset-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 rounded-lg hover:cursor-pointer">
          <input
            id="label-as-parent"
            type="radio"
            name="query-type"
            value="label-as-parent"
            className="relative size-5 appearance-none rounded-full border border-brand-grey-500 bg-white before:absolute before:inset-1 before:rounded-full before:bg-brand-green-600 not-checked:before:hidden checked:border-brand-green-600 checked:bg-brand-green-200 checked:border-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-600 forced-colors:appearance-auto forced-colors:before:hidden"
          />
          <span>label as Parent</span>
        </label>
      </div>
    </fieldset>
  );
}

export default RadioFieldset;