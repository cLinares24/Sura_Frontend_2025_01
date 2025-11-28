import { UseFormRegister } from "react-hook-form";

interface ValuesSelect {
  value: string;
  label: string;
}

interface InputComponentsProps {
  label: string;
  typeElement: string;
  listValues?: ValuesSelect[];
  placeHolder: string;
  className?: string;
  classLabel?: string;
  registerName: string;
  register?: UseFormRegister<any>;
}

// Usaremos props específicos para input y select
export default function InputComponents({
  label,
  typeElement,
  listValues,
  placeHolder,
  className,
  classLabel,
  registerName,
  register,
  ...rest
}: InputComponentsProps &
  (React.InputHTMLAttributes<HTMLInputElement> | React.SelectHTMLAttributes<HTMLSelectElement>)) {
  return (
    <>
      <label className={classLabel}>{label}</label>

      {listValues?.length ? (
        <select
          {...(register && registerName ? register(registerName) : {})}
          {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>)} // forzamos el tipo
          className={className}
        >
          {listValues.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...(register && registerName ? register(registerName) : {})}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} // forzamos el tipo
          type={typeElement}
          placeholder={placeHolder}
          className={className}
        />
      )}
    </>
  );
}
