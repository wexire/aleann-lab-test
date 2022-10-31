import Image from 'next/image'
import React from 'react'
import {
  locationImage,
  bookmarkImage,
  ratingImage,
  mobileRatingImage,
} from '../images'

const JobItem = () => {
  return (
    <div className="flex flex-row px-4 sm:py-6 py-3 w-full h-[10.25rem] bg-[#EFF0F5] sm:bg-white rounded-lg shadow-jobItem">
      <div className="sm:mr-7 mr-5">
        <Image
          src=""
          alt="office"
          className="rounded-full object-cover sm:w-imgDesktop sm:h-imgDesktop w-imgMobile h-imgMobile mt-8"
        />
      </div>

      <div className="flex sm:justify-between w-full sm:flex-row flex-col-reverse h-max">
        <div className="flex flex-col sm:gap-2 gap-1">
          <span className="text-main sm:font-bold font-main text-lg sm:text-xl">
            Title
          </span>
          <span className="text-secondary font-main text-base">Place</span>
          <div className="flex flex-row">
            <Image src={locationImage} alt="location" />
            <span className="text-secondary font-main ml-2 text-base">
              Location
            </span>
          </div>
        </div>
        <div className="flex flex-row sm:gap-8 items-center justify-between">
          <Image src={ratingImage} alt="rating" className="sm:block hidden" />
          <Image
            src={mobileRatingImage}
            alt="rating"
            className="block sm:hidden"
          />
          <div className="flex flex-col justify-between h-full">
            <div className="justify-end hidden sm:flex">
              <Image src={bookmarkImage} alt="bookmark" />
            </div>
            <span className="text-secondary text-sm sm:text-base sm:font-normal font-light">
              Post time
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobItem
