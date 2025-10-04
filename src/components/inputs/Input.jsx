import { useId } from "react";
import { clsx } from "clsx";

function Input({
  inputRef,
  label,
  type,
  name,
  autocomplete = "off",
  required = false,
  value,
  onChange,
  error,
  colSpanFull
}) {

  const inputId = useId();
  const errorId = `${inputId}-error`;

  const formGroupClassNames = clsx('grid auto-rows-min space-y-2', {
    'sm:col-span-full': colSpanFull,
  });

  return (
    <div className={formGroupClassNames}>
      <label
        htmlFor={inputId}
        className="text-base after:text-brand-green-600 after:content-['*'] after:ml-1 after:text-xl">
        {label}
        <span className="sr-only">required</span>
      </label>
      <input
        ref={inputRef}
        id={inputId}
        name={name}
        autoComplete={autocomplete}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`block w-full cursor-pointer rounded-lg bg-white px-4 py-3.5 text-base autofill:bg-white outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 hover:outline-2 hover:outline-brand-green-600 ${
          error ? 'outline-brand-alert' : 'outline-brand-grey-500'
        }`}
      />
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

export default Input;
