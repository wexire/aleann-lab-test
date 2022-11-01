import Image from 'next/image'
import React from 'react'
import moment from 'moment'
import {
  locationImage,
  bookmarkImage,
  ratingImage,
  mobileRatingImage,
} from '../images'
import { IJob } from '../types'

const JobItem = ({ job }: IJobItemProps) => {
  return (
    <div className="flex flex-row px-4 sm:py-6 py-3 w-full h-[10.25rem] bg-[#EFF0F5] sm:bg-white rounded-lg shadow-jobItem transition duration-500 transform hover:scale-95 cursor-pointer">
      <div className="sm:mr-7 mr-5 sm:w-imgDesktop sm:h-imgDesktop w-imgMobile h-imgMobile mt-8 sm:mt-0 relative">
        <Image
          src={job.pictures[0]}
          alt="office"
          fill
          className="rounded-full object-cover"
        />
      </div>

      <div className="flex sm:justify-between w-full sm:h-full h-max sm:flex-row flex-col-reverse">
        <div className="flex flex-col sm:gap-2 gap-1 sm:mt-0 mt-1">
          <span className="text-main sm:font-bold font-main text-lg sm:text-xl overflow-hidden max-h-14 sm:max-h-max">
            {job.title}
          </span>
          <span className="text-secondary font-main text-base">
            {job.address}
          </span>
          <div className="flex flex-row">
            <Image src={locationImage} alt="location" />
            <span className="text-secondary font-main ml-2 text-base">
              {`${job.location.lat}, ${job.location.long}`}
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
              Posted {moment(job.createdAt).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface IJobItemProps {
  job: IJob
}

export default JobItem
