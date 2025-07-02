import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import SleepTipsCard from "../atoms/SleepTipsCard";
import FadeIn from "../animations/FadeIn";
import type { SleepQuality } from "../data/SleepTips";

const mapToLabel = (hasilTidur: string): SleepQuality => {
  if (hasilTidur.includes("Buruk")) return "Buruk"
  if (hasilTidur.includes("Sedang")) return "Sedang"
  return "Baik" // default
}

const getResultMessage = (label: SleepQuality) => {
  switch(label){
    case "Buruk":
      return "Kualitas Tidur Kamu Buruk ☹️"
    case "Sedang":
      return "Kualitas Tidur Kamu Cukup 🙂"
    case "Baik":
      return "Kualitas Tidur Kamu Baik 😄"
    default:
      return ""
  }
}

const ResultPage = () => {
  const [result, setResult] = useState<SleepQuality | null>(null)
  // const [prediction, setPrediction] = useState<"Baik" | "Sedang" | "Buruk" | null>(null)

  useEffect(() => {
    if(typeof window !== "undefined"){
      const savedResult = localStorage.getItem("hasil_tidur")
      if(savedResult){
        const mappedResult = mapToLabel(savedResult)
        setResult(mappedResult)
      }
    }
  }, [])

  return(
    <div className="flex justify-center">
        <div className="py-5 px-15 sm:py-11 sm:px-20 m-2 w-[600px] md:w-[900px]">
        <FadeIn delay={0.1}>
            <div className="">
              <p className="text-2xl sm:text-3xl font-bold text-center">Hasil Prediksi</p>
            </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="bg-secondary p-3 rounded-lg text mt-9 mb-3">
            <p className="text-md sm:text-2xl font-semibold"> 
              {result && getResultMessage(result)}
            </p>
          </div>
        </FadeIn>
          <div>
            {result && <SleepTipsCard result={result} />}
          </div>
        <FadeIn delay={0.5}>
          <div className="py-6 sm:py-10 flex justify-center w-full">
            <Button label='Coba prediksi lagi!' href='/' type=''/>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default ResultPage