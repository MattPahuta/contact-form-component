function RadioInput({label, name, value, onChange, required = false}) {
  return (
    <label className="flex items-center gap-5 rounded-lg bg-white px-4 py-3.5 cursor-pointer outline-1 -outline-offset-1 outline-brand-grey-500 has-checked:bg-brand-green-200 has-checked:outline-brand-green-600 has-focus:-outline-2 has-focus:-outline-offset-2 has-focus:outline-brand-green-600 has-focus:ring-2 has-focus:ring-brand-green-600/40">
      <input
        type="radio"
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="relative size-5 appearance-none rounded-full outline -outline-offset-1 outline-brand-grey-500 before:absolute before:inset-1 before:rounded-full before:bg-brand-green-600 not-checked:before:hidden checked:border-brand-green-600 checked:bg-brand-green-200 checked:border-2 checked:outline-brand-green-600 focus-visible:border focus-visible:outline-brand-green-600 forced-colors:appearance-auto forced-colors:before:hidden"
      />
      {label}
    </label>
  );
}

export default RadioInput;