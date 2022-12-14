import React from 'react'
import { EMPLOYMENT } from '../../consts'

interface IInfoBoxProps {
  type: string
  text: string
}

const InfoBox = ({ type, text }: IInfoBoxProps) => {
  return (
    <div
      className={`sm:w-56 w-max py-4 sm:px-0 px-3 font-main font-bold text-base flex justify-center rounded-lg ${
        type === EMPLOYMENT
          ? 'bg-[#e1e6f4] border-[#c0c8e0] border-[1px] text-[#55699E]'
          : 'bg-[#fff8d9] border-[#FFCF00] border-[1px] text-[#988B49]'
      }`}
    >
      {text}
    </div>
  )
}

export default InfoBox
