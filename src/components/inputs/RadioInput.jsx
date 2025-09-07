function RadioInput() {
  return (
    // <label className="text-base text-brand-grey-900 flex items-center gap-5 pl-5 py-3.5 outline-1 -outline-offset-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 rounded-lg hover:cursor-pointer">
    //   <input
    //     type="radio"
    //     name="query"
    //     value="general"
    //     className="relative size-5 appearance-none rounded-full border border-brand-grey-500 bg-white before:absolute before:inset-1 before:rounded-full before:bg-brand-green-600 not-checked:before:hidden checked:border-brand-green-600 checked:bg-brand-green-200 checked:border-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-600 forced-colors:appearance-auto forced-colors:before:hidden"
    //   />
    //   <span>General Request</span>
    // </label>
    // <div className="form-group border border-brand-grey-500 rounded-lg focus:outline-brand-green-600">
    //   <input type="radio" id="secondary" name="query" value="secondary" required />
    //   <label htmlFor="secondary">Secondary Request</label>
    // </div>

    <label
      className="border border-brand-grey-500 rounded-lg has-checked:bg-brand-green-200 has-checked:ring-brand-green-600">
      <input
        type="radio"
        name="query"
        value="secondary"
        className=""
      />
      Secondary Request
    </label>
  );
}

export default RadioInput;