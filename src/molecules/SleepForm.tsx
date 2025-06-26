import type { SleepFormData } from "../data/SleepFormData";
import React from "react";
import Dropdown from "../atoms/Dropdown";
import InputField from "../atoms/Input";
import Range from "../atoms/Range";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const SleepForm = () => {
  const [formData, setFormData] = useState<SleepFormData>({
    age: '',
    gender: '',
    sleep_duration: '',
    stress_level: '',
    physical_activity_level: '',
    heart_rate: ''
  })

  const [loading, setLoading] = useState(false)
  // const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const dataToSend = {
      ...formData,
      age: parseInt(formData.age),
      sleep_duration: parseFloat(formData.sleep_duration),
      stress_level: parseInt(formData.stress_level),
      physical_activity_level: parseFloat(formData.physical_activity_level),
      heart_rate: parseFloat(formData.heart_rate),
      gender: formData.gender === "Male" ? 0 : 1
    }

    try {
      const res = await axios.post("", dataToSend)
      const hasil = res.data.hasil
      localStorage.setItem("hasil_tidur", hasil)
      // navigate("/result")
      window.location.href = "/result"
    } catch (error) {
      console.error("Gagal memprediksi: ", error)
    } finally {
      setLoading(false)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="border-2 w-fit h-fit p-3 m-5">
        <Dropdown 
          onChange={handleChange}
          value={formData.gender}
        />
        <InputField 
          label="Umur"
          type="number"
          placeholder="Masukkan umur Anda"
          min={1}
          max={99}
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
          label="Detak Jantung (bpm)"
          type="number"
          placeholder="Contoh: 72"
          name="heart_rate"
          onChange={handleChange}
          value={formData.heart_rate}
          step={0.1}
        />

        <Range 
          label="Tingkat Stress (1-10)"
          name="stress_level"
          onChange={handleChange}
          value={parseInt(formData.stress_level)}
          // min={1}
          // max={10}
          step={1}
          marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  )
}

export default SleepForm