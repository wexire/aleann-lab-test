import React from 'react'

interface IButtonProps {
  text: string
}

const DetailsButton = ({ text }: IButtonProps) => {
  return (
    <div className="rounded-lg bg-darkBlue px-[1.875rem] py-[1.125rem] text-white font-semibold font-main w-max text-xs">
      {text}
    </div>
  )
}

export default DetailsButton
