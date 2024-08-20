import React from "react";

interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputField;
