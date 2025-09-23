import { FaAsterisk } from 'react-icons/fa';

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
      {/* {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 18 18">
          <path
            fill="#0C7D69"
            d="M16.5 0h-15A1.5 1.5 0 0 0 0 1.5v15A1.5 1.5 0 0 0 1.5 18h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 16.5 0Zm-3.22 7.28-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 0 1 1.06 1.06Z"
          />
        </svg>
      )} */}
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
