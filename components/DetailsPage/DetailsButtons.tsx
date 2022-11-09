import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { detailsArrowImage } from '../../images'

interface IButtonProps {
  text: string
}

const DetailsButton = ({ text }: IButtonProps) => {
  return (
    <div className="rounded-lg bg-darkBlue px-[1.875rem] py-[1.125rem] text-white font-semibold font-main w-max text-xs cursor-pointer">
      {text}
    </div>
  )
}

export const ReturnButton = () => {
  return (
    <Link
      href={'/'}
      className="rounded-lg w-max flex flex-row items-center gap-5 font-main text-xs font-semibold text-main bg-[#e4e5ea] px-6 py-4 relative -left-16 cursor-pointer"
    >
      <Image src={detailsArrowImage} alt="arrow" />
      RETURN TO JOB BOARD
    </Link>
  )
}

export default DetailsButton
