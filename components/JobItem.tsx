import Image from 'next/image'
import React from 'react'
import { locationImage, bookmarkImage, ratingImage } from '../images'

const JobItem = () => {
  return (
    <div className="flex justify-between px-4 py-6 w-full h-[10.25rem] bg-white rounded-lg shadow-jobItem">
      <div className="flex flex-row gap-8">
        <Image
          src=""
          alt="office"
          width={85}
          height={85}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col gap-2">
          <span className="text-main font-bold font-main text-xl">Title</span>
          <span className="text-secondary font-main text-base">Place</span>
          <div className="flex flex-row">
            <Image src={locationImage} alt="location" />
            <span className="text-secondary font-main ml-2 text-base">
              Location
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <Image src={ratingImage} alt="rating" />
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-end">
            <Image src={bookmarkImage} alt="bookmark" />
          </div>
          <span className="text-secondary text-base">Post time</span>
        </div>
      </div>
    </div>
  )
}

export default JobItem
