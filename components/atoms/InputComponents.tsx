interface valuesSelect {
  value: string
  label: string
}

interface InputComponentsProps {
  label: string;
  typeElement: string;
  listValues?: valuesSelect[];
  placeHolder: string;
  className?: string;
  classLabel?: string;
  registerName: string;
  register: any;
}

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
}: InputComponentsProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <label className={classLabel}>{label}</label>

      {listValues?.length ? (
        <select
          {...(register && registerName ? register(registerName) : {})} // <-- AHORA PRIMERO
          {...rest}                                                     // <-- LUEGO EL RESTO
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
          {...(register && registerName ? register(registerName) : {})} // <-- PRIMERO
          {...rest}                                                     // <-- DESPUÉS
          type={typeElement}
          placeholder={placeHolder}
          className={className}
        />
      )}
    </>
  );
}
