import React from "react";

type InputFieldProps = {
  label: string
  name: string
  type: string
  min: string
  max: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  step: string
  placeholder: string
}

const InputField = ({ 
  label,
  name,
  type,
  min,
  max,
  value,
  onChange,
  step,
  placeholder
}: InputFieldProps) => {
  return(
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <input 
        type={type}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="input" 
        placeholder={placeholder} 
        required
        step={step}
      />
      <p className="label">{label}</p>
    </fieldset>
  )
}

export default InputField