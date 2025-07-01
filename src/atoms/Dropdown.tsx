import React from "react";

type DropdownProps = {
  name: string,
  value: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const Dropdown = ({name, value, onChange}: DropdownProps) => {
  return(
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Jenis Kelamin</legend>
      <select 
        className="select select-primary"
        value={value}
        onChange={onChange}
        name={name}
        required
      >
        <option disabled={true} value="">Masukkan Jenis Kelamin Anda</option>
        <option value="0">Laki-laki</option>
        <option value="1">Perempuan</option>
      </select>
    </fieldset>
  )
}

export default Dropdown