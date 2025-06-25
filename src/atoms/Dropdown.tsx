import React from "react";

type DropdownProps = {
  value: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const Dropdown = ({value, onChange}: DropdownProps) => {
  return(
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1">Jenis Kelamin</div>
      <select 
        name="gender"
        value={value}
        onChange={onChange}
        className=""
        required
      >
        <option value="Male">Laki-laki</option>
        <option value="Female">Perempuan</option>
      </select>
    </div>
  )
}

export default Dropdown