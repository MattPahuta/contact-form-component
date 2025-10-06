function TextareaInput({
  inputRef,
  label,
  name,
  id,
  value,
  onChange,
  error,
  required = false,
}) {

  const errorId = `${id}-error`;

  return (
    <div className="grid space-y-2 sm:col-span-full">
      <label
        htmlFor={id}
        className="text-base after:text-brand-green-600 after:text-xl after:content-['*'] after:ml-1">
        {label}
        <span className="sr-only">required</span>
      </label>
      <textarea
        ref={inputRef}
        name={name}
        required={required}
        value={value}
        id={id}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`block cursor-pointer box-content h-[3lh] resize-y rounded-lg bg-white px-4 py-3.5 text-base sm:text-lg outline-1 -outline-offset-1 autofill:bg-white focus:outline-2 focus:-outline-offset-2 hover:outline-2 hover:outline-brand-green-600 focus:outline-brand-green-600 ${
          error ? 'outline-brand-alert' : 'outline-brand-grey-500'
        }`}></textarea>
      {error && (
        <span
          id={errorId}
          className="text-brand-alert"
          aria-live="polite">
          {error}
        </span>
      )}
    </div>
  );
}

export default TextareaInput;
