import React from "react"

type RangeProps = {
  label: string
  name: string
  min?: number
  max?: number
  step?: number
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  marks?: number[]
}

const Range = ({
  label,
  name,
  min,
  max,
  step,
  value, 
  onChange,
  marks
}: RangeProps) => {
  return(
    <div className="w-full max-w-xs">
      <legend className="fieldset-legend text-xs">{label}</legend>
      <input type="range" min={0} max="100" value="25" className="range bg-accent" step="25" />
      <div className="flex justify-between px-2.5 mt-2 text-xs">
        {
          marks?.map((_, i) => (
            <span key={i}>|</span>
          ))
        }
      </div>
      <div className="flex justify-between px-2.5 mt-2 text-xs">
        {
          marks?.map((mark) => (
            <span key={mark}>{mark}</span>
          ))
        }
      </div>
    </div>
  )
}

export default Range