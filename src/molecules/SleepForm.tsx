import type { SleepFormData } from "../data/SleepFormData";
import React from "react";
import Dropdown from "../atoms/Dropdown";
import InputField from "../atoms/Input";
import { useState } from "react";
import axios from "axios";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form data yang dikirim:", formData);
    e.preventDefault()
    setLoading(true)
   
    const dataToSend = {
      ...formData,
      age: parseFloat(formData.age),
      sleep_duration: parseFloat(formData.sleep_duration),
      stress_level: parseFloat(formData.stress_level),
      physical_activity_level: parseFloat(formData.physical_activity_level),
      heart_rate: parseFloat(formData.heart_rate),
      gender: formData.gender
    }

    try {
      const res = await axios.post("http://localhost:5000/predict", dataToSend)
      const hasil = res.data.hasil
      localStorage.setItem("hasil_tidur", hasil)
      window.location.href = "/result"
      console.log(res.data)
    } catch (error) {
      console.error("Gagal memprediksi: ", error)
    } finally {
      setLoading(false)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="border-2 w-fit h-fit p-3 m-5 ">
        <Dropdown 
          name="gender"
          onChange={(e)  => setFormData({...formData, gender: e.target.value})}
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
          placeholder="Contoh: 6.5 jam"
          name="sleep_duration"
          onChange={handleChange}
          value={formData.sleep_duration}
          step={0.1}
        />

        <InputField 
          label="Detak Jantung (bpm)"
          type="number"
          placeholder="Contoh: 72 bpm"
          name="heart_rate"
          onChange={handleChange}
          value={formData.heart_rate}
          step={0.1}
        />

        <InputField 
          label="Tingkat Stress (1-10)"
          type="number"
          placeholder="Contoh: 6"
          name="stress_level"
          onChange={handleChange}
          value={formData.stress_level}
          step={0.1}
          min={1}
          max={10}
        />

        <InputField 
          label="Aktivitas Fisik (1-10)"
          type="number"
          placeholder="Contoh: 8"
          name="physical_activity_level"
          onChange={handleChange}
          value={formData.physical_activity_level}
          step={0.1}
        />
        <button type="submit" className={`btn btn-primary mt-3 w-full ${loading ? "btn-disabled" : ""}`}>
          {
            loading ? "Memroses..." : "Prediksi Kualitas Tidur"
          }
        </button>
      </div>
    </form>
  )
}

export default SleepForm