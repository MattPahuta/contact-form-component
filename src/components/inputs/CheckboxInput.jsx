import { FaAsterisk } from 'react-icons/fa';

// size-5 focus-visible:outline-2 outline-offset-1 outline-brand-green-600/40

function CheckboxInput({
  label,
  id,
  name,
  checked,
  onChange,
  required = false,
}) {
  return (
    <div className="flex items-center gap-4 sm:col-span-full">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
        className="size-5 focus-visible:outline-2 outline-offset-1 outline-brand-green-600/40"
      />
      <label
        htmlFor={id}
        className="w-full flex text-base cursor-pointer">
        {label}
        {required && (
          <FaAsterisk
            focusable="false"
            aria-hidden="true"
            className="size-1.5 m-1 fill-brand-green-600 inline-block"
          />
        )}
      </label>
    </div>
  );
}

export default CheckboxInput;
