import { FaAsterisk } from 'react-icons/fa';

function RadioFieldset() {
  return (
    <fieldset className="sm:col-span-2 space-y-2">
      <legend className="flex text-base space-y-2">
        Query Type
        <FaAsterisk
          aria-focusable="false"
          className="size-1.5 m-1 fill-brand-green-600 inline-block"
        />
      </legend>
      <div className="grid gap-4">
        <label className="text-base text-brand-grey-900 flex items-center gap-5 pl-5 py-3.5 outline-1 -outline-offset-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 rounded-lg hover:cursor-pointer">
          <input
            type="radio"
            name="query"
            value="general"
            className="relative size-5 appearance-none rounded-full border border-brand-grey-500 bg-white before:absolute before:inset-1 before:rounded-full before:bg-brand-green-600 not-checked:before:hidden checked:border-brand-green-600 checked:bg-brand-green-200 checked:border-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-600 forced-colors:appearance-auto forced-colors:before:hidden"
          />
          <span>General Request</span>
        </label>
        <label className="text-base text-brand-grey-900 flex items-center gap-5 pl-5 py-3.5 outline-1 -outline-offset-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 rounded-lg hover:cursor-pointer">
          <input
            id="general-enquiry"
            type="radio"
            name="query"
            value="support"
            className="relative size-5 appearance-none rounded-full border border-brand-grey-500 bg-white before:absolute before:inset-1 before:rounded-full before:bg-brand-green-600 not-checked:before:hidden checked:border-brand-green-600 checked:bg-brand-green-200 checked:border-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-600 forced-colors:appearance-auto forced-colors:before:hidden"
          />
          <span>Support Enquiry</span>
        </label>
      </div>
    </fieldset>
  );
}

export default RadioFieldset;
