import { FaAsterisk } from 'react-icons/fa';
import { clsx } from 'clsx';

function Input({
  label,
  type,
  id,
  name,
  value,
  onChange,
  error,
  colSpanFull
}) {

  const errorId = `${id}-error`;

  const formGroupClassNames = clsx('grid space-y-2', {
    'sm:col-span-full': colSpanFull
  });

  return (
    <div className={formGroupClassNames}>
      <label htmlFor={name} className="flex text-base">
        {label}
        <FaAsterisk
          focusable="false"
          aria-hidden="true"
          className="size-1.5 m-1 fill-brand-green-600 inline-block"
        />
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`block w-full cursor-pointer rounded-lg bg-white px-4 py-3.5 text-base outline-1 -outline-offset-1 focus:-outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 focus:ring-2 focus:ring-brand-green-600/40 hover:outline-2 hover:outline-brand-green-600 ${error ? "outline-brand-alert" : "outline-brand-grey-500" }`}
      />
      {error && (
        <span id={errorId} className="text-brand-alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;
