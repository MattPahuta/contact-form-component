import { FaAsterisk } from 'react-icons/fa';

function TextareaInput({label, id, name, value, onChange, error}) {

  const errorId = `${id}-error`
  return (
    <div className="grid space-y-2 sm:col-span-full">
      <label htmlFor={id} className="flex text-base">
        {label}
        <FaAsterisk
          focusable="false"
          aria-hidden="true"
          className="size-1.5 m-1 fill-brand-green-600 inline-block"
        />
      </label>
      <textarea
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className="block cursor-pointer box-content h-[3lh] resize-y rounded-lg bg-white px-4 py-3.5 text-base sm:text-lg outline-1 -outline-offset-1 outline-brand-grey-500  focus:-outline-2 focus:-outline-offset-2 hover:outline-2 hover:outline-brand-green-600 focus:outline-brand-green-600 focus:ring-2 focus:ring-brand-green-600/40"></textarea>
      {error && (
        <span id={errorId} className="text-brand-alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default TextareaInput;
