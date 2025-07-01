import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import SleepTipsCard from "../atoms/SleepTipsCard";

const ResultPage = () => {
  const [result, setResult] = useState<string | null>(null)

  useEffect(() => {
    if(typeof window !== "undefined"){
      const savedResult = localStorage.getItem("hasil_tidur")
      setResult(savedResult)
    }
  }, [])

  return(
    <div className="">
      <div className="">
        <p className=""> 
          Hasil Prediksi
        </p>
      </div>
        <div className="">
          <p className=""> 
            {result}
          </p>
        </div>
        <div>
          <SleepTipsCard result="Buruk" />
        </div>
        <div className="">
          <Button label='Coba prediksi lagi!' href='/' type=''/>
        </div>
    </div>
  )
}

export default ResultPage