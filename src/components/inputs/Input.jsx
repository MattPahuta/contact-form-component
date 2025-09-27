import { clsx } from 'clsx';

function Input({
  inputRef,
  label,
  type,
  id,
  name,
  autocomplete = "off",
  required = false,
  value,
  onChange,
  error,
  colSpanFull
}) {

  const errorId = `${id}-error`;

  const formGroupClassNames = clsx('grid content-start space-y-2', {
    'sm:col-span-full': colSpanFull
  });

  return (
    <div className={formGroupClassNames}>
      <label
        htmlFor={name}
        className="text-base after:text-brand-green-600 after:content-['*'] after:ml-1 after:text-xl">
        {label}
        <span className="sr-only">required</span>
      </label>
      <input
        ref={inputRef}
        id={name}
        name={name}
        autoComplete={autocomplete}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`block w-full cursor-pointer rounded-lg bg-white px-4 py-3.5 text-base outline-1 -outline-offset-1 autofill:bg-white focus:-outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 focus:ring-2 focus:ring-brand-green-600/40 hover:outline-2 hover:outline-brand-green-600 ${
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
