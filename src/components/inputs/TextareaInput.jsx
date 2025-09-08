import { FaAsterisk } from 'react-icons/fa';

function TextareaInput({label, name, value, onChange, required = false}) {
  return (
    <div className="grid space-y-2 sm:col-span-full">
      <label htmlFor={name} className="flex text-base">
        {label}
        {required && (
          <FaAsterisk
            focusable="false"
            aria-hidden="true"
            className="size-1.5 m-1 fill-brand-green-600 inline-block"
          />
        )}
      </label>
      <textarea
        name={name}
        value={value}
        id={name}
        onChange={onChange}
        required={required}
        className="block w-full rounded-lg bg-white px-4 py-3.5 text-base sm:text-lg outline-1 -outline-offset-1 outline-brand-grey-500 focus:-outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 focus:ring-2 focus:ring-brand-green-600/40"></textarea>
    </div>
  );
}

export default TextareaInput;
