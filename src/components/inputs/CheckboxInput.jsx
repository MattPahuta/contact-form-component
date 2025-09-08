import { FaAsterisk } from 'react-icons/fa';

function CheckboxInput({
  label,
  name,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="flex items-center gap-4 sm:col-span-full">
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        required={required}
        className="size-5"
      />
      <label
        htmlFor={name}
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
