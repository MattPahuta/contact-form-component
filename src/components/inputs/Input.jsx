import { FaAsterisk } from 'react-icons/fa';
import { clsx } from 'clsx';

function Input({
  label,
  type,
  name,
  id,
  value,
  onChange,
  required = false,
  colSpanFull
}) {

  const formGroupClassNames = clsx('grid space-y-2', {
    'sm:col-span-full': colSpanFull
  });

  return (
    <div className={formGroupClassNames}>
      <label htmlFor="firstName" className="flex text-base">
        {label}
        {required && (
          <FaAsterisk aria-focusable="false" className="size-1.5 m-1 fill-brand-green-600 inline-block" />
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="block w-full rounded-lg bg-white px-4 py-3.5 text-base text-brand-grey-900 outline-1 -outline-offset-1 outline-brand-grey-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green-600"
      />
    </div>
  );
}

export default Input;
