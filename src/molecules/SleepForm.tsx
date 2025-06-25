import type { SleepFormData } from "../data/SleepFormData";
import Dropdown from "../atoms/Dropdown";
import InputField from "../atoms/Input";
import Range from "../atoms/Range";
import { useState } from "react";

const SleepForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    sleep_duration: '',
    stress_level: '',
    physical_activity_level: '',
    heart_rate: ''
  })

  const handleChange = () => {

  }
  return(
    <div className="border-2 w-fit h-fit p-3 m-5">
      <Dropdown 
        onChange={handleChange}
        value={formData.gender}
      />
      <InputField 
        label="Umur"
        type="number"
        placeholder="Masukkan umur Anda"
        value={formData.age}
        onChange={handleChange}
        name="age"
      />

      <InputField 
        label="Durasi Tidur (jam)"
        type="number"
        placeholder="Contoh: 6.5"
        name="sleep_duration"
        onChange={handleChange}
        value={formData.sleep_duration}
        step={0.1}
      />
      <InputField 
        label="Detak Jantung"
        type="number"
        placeholder="Contoh: 6.5"
        name="sleep_duration"
        onChange={handleChange}
        value={formData.sleep_duration}
        step={0.1}
      />

      <Range 
        label="Aktivitas Fisik (1-10)"
        name="physical_activity_level"
        onChange={handleChange}
        value={parseInt(formData.physical_activity_level)}
        // min={1}
        // max={10}
        step={1}
        marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      />
    </div>
  )
}

export default SleepForm