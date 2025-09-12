import { FaAsterisk } from 'react-icons/fa';

// size-5 focus-visible:outline-2 outline-offset-1 outline-brand-green-600/40
// flex items-center gap-4 sm:col-span-full

function CheckboxInput({
  label,
  id,
  name,
  checked,
  onChange,
  error,
}) {

  const errorId = `${id}-error`;

  return (
    <div className="grid items-center gap-x-4 gap-y-2 grid-cols-[24px_minmax(100px,_1fr)] sm:col-span-full">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className="size-5 place-self-center focus-visible:outline-2 outline-offset-1 outline-brand-green-600/40"
      />
      <label
        htmlFor={id}
        className="w-full flex text-base cursor-pointer">
        {label}
        <FaAsterisk
          focusable="false"
          aria-hidden="true"
          className="size-1.5 m-1 fill-brand-green-600 inline-block"
        />
      </label>
      {error && (
        <span id={errorId} className="text-brand-alert col-span-full">
          {error}
        </span>
      )}
    </div>
  );
}

export default CheckboxInput;
