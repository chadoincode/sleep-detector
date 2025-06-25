import React from "react";

type DropdownProps = {
  value: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const Dropdown = ({value, onChange}: DropdownProps) => {
  return(
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Jenis Kelamin</legend>
      <select 
        defaultValue="Masukkan Jenis Kelamin Anda"
        className="select select-primary"
        value={value}
        onChange={onChange}
        required
      >
        <option disabled={true} value="">Masukkan Jenis Kelamin Anda</option>
        <option value="Male">Laki-laki</option>
        <option value="Female">Perempuan</option>
      </select>
    </fieldset>
  )
}

export default Dropdown