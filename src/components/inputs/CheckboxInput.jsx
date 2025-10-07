function CheckboxInput({
  inputRef,
  label,
  name,
  id,
  checked,
  onChange,
  required = false,
  error,
}) {

  const errorId = `${id}-error`;

  return (
    <div className="py-4 space-y-2 sm:col-span-full">
      <label
        className="text-base cursor-pointer grid items-center grid-cols-[1em_auto] gap-5">
        <input
          ref={inputRef}
          type="checkbox"
          name={name}
          id="consentInput"
          required={required}
          checked={checked}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className="grid place-content-center cursor-pointer appearance-none size-5 rounded-xs bg-white outline-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 checked:before:scale-100 transition-transform duration-120 ease-in-out checked:bg-brand-green-600 checked:outline-brand-green-600"
        />
        <span className="after:text-brand-green-600 after:text-xl after:content-['*'] after:ml-1">
          {label}
        </span>
        <span className="sr-only">required</span>
      </label>
      {error && (
        <span
          id={errorId}
          className="text-brand-alert col-span-full"
          aria-live="polite">
          {error}
        </span>
      )}
    </div>
  );
}

export default CheckboxInput;
