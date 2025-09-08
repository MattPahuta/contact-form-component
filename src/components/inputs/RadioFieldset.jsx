import RadioInput from './RadioInput';
import { FaAsterisk } from 'react-icons/fa';

function RadioFieldset({legend, onChange}) {
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
        <RadioInput
          label="General Request"
          name="query"
          value="general"
          onChange={onChange}
          required
        />
        <RadioInput
          label="Support Request"
          name="query"
          value="support"
          onChange={onChange}
          required
        />
      </div>
    </fieldset>
  );
}

export default RadioFieldset;
