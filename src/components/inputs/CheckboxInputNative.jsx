function CheckboxInputNative({
  inputRef,
  label,
  id,
  name,
  checked,
  onChange,
  required = false,
  error,
}) {

  const errorId = `${id}-error`;

  return (
    <div className="grid items-center gap-x-4 gap-y-2 grid-cols-[24px_minmax(100px,_1fr)] sm:col-span-full">
      <input
        ref={inputRef}
        type="checkbox"
        id={id}
        name={name}
        required={required}
        checked={checked}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className="size-5 place-self-center focus-visible:outline-2 outline-offset-1 outline-brand-green-600/40"
      />
      <label
        htmlFor={id}
        className="w-full text-base cursor-pointer after:text-brand-green-600 after:text-xl after:content-['*'] after:ml-1">
        {label}
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

export default CheckboxInputNative;
