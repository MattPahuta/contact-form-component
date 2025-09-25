import { FaAsterisk } from 'react-icons/fa';

function RadioGroup({
  legend,
  name,
  options,
  value,
  onChange,
  error,
  required = false,
}) {
  const errorId = `${name}-error`;

  return (
    <fieldset className="space-y-2 sm:col-span-full">
      <legend className="flex text-base space-y-2">
        {legend}
        <FaAsterisk
          focusable="false"
          className="size-1.5 m-1 fill-brand-green-600 inline-block"
        />
      </legend>
      <div className="grid gap-4 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-5 rounded-lg bg-white px-4 py-3.5 cursor-pointer outline-1 -outline-offset-1 outline-brand-grey-500 has-checked:bg-brand-green-200 has-checked:outline-brand-green-600 has-focus:-outline-2 has-focus:-outline-offset-2 has-focus:outline-brand-green-600 has-focus:ring-2 has-focus:ring-brand-green-600/40 hover:outline-2 hover:outline-brand-green-600">
            <input
              type="radio"
              name={name}
              required={required}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              aria-invalid={!!error}
              aria-describedby={error ? errorId : undefined}
              className="relative size-5 appearance-none rounded-full outline -outline-offset-1 outline-brand-grey-500 before:absolute before:inset-1 before:rounded-full before:bg-brand-green-600 not-checked:before:hidden checked:border-brand-green-600 checked:bg-brand-green-200 checked:border-2 checked:outline-brand-green-600 focus-visible:border focus-visible:outline-brand-green-600 forced-colors:appearance-auto forced-colors:before:hidden"
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && (
        <span id={errorId} className="text-brand-alert">
          {error}
        </span>
      )}
    </fieldset>
  );
}

export default RadioGroup;
