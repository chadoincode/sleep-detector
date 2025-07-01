import React from "react"
import { SleepTips } from "../data/SleepTips"
import type { SleepQuality } from "../data/SleepTips"
import ScrollAnimation from "../animations/ScrollAnimation"

type SleepTipsCardProps = {
  result: SleepQuality
}

const SleepTipsCard: React.FC<SleepTipsCardProps> = ({ result }) => {
  const {tips, emoji, color, medicalAdvice} = SleepTips[result]
  return (
    <div className="">
      <div className="">
        <p className="">Tips Kualitas Tidur {emoji}</p>
        <div>
          <ul className="">
            {
              tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="">
        <p className="">Saran</p>
        <p className="">{medicalAdvice}</p>
      </div>
    </div>
  );
}

export default SleepTipsCard