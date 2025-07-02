import React from "react"
import { SleepTips } from "../data/SleepTips"
import type { SleepQuality } from "../data/SleepTips"
import FadeIn from "../animations/FadeIn"

type SleepTipsCardProps = {
  result: SleepQuality
}

const SleepTipsCard: React.FC<SleepTipsCardProps> = ({ result }) => {
  const {tips, emoji, color, medicalAdvice} = SleepTips[result]
  return (
    <div className="grid col-end-1 gap-3">
      <FadeIn delay={0.3}>
        <div className={`p-3 ${color} rounded-2xl border-2`}>
          <p className="text-sm md:text-lg font-semibold">Tips Kualitas Tidur {emoji}</p>
          <div className="pt-2">
            <ul className="text-xs md:text-sm lg:text-md pt-2 list-disc pl-5 mb-3 space-y-1">
              {
                tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.4}>
        <div className="bg-success p-3 rounded-2xl text-black">
          <p className="text-sm md:text-md lg:text-lg font-semibold">Saran</p>
          <p className="text-xs md:text-sm lg:text-md pt-2">{medicalAdvice}</p>
        </div>        
      </FadeIn>
    </div>
  );
}

export default SleepTipsCard