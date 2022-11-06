import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { PAGE_BUTTON_SEEN_RADIUS } from '../consts'
import { arrowImage } from '../images'

const Pagination = ({ page, totalPages, setPage }: IPaginationProps) => {
  const threeDotString = '...'
  const pageNumArr: (number | string)[] = Array.from(Array(totalPages).keys())
  const initialArrLength = pageNumArr.length
  pageNumArr.splice(1, 0, threeDotString)
  pageNumArr.splice(pageNumArr.length - 1, 0, threeDotString)

  return (
    <div className="mx-auto w-[32rem] h-[3.5rem] bg-white shadow-default rounded-[10px] relative flex items-center flex-row justify-center">
      <Image
        src={arrowImage}
        alt="arrow"
        className="absolute left-6 cursor-pointer"
        onClick={() => setPage(page === 0 ? 0 : page - 1)}
      />
      <Image
        src={arrowImage}
        alt="arrow"
        className="rotate-180 absolute right-6 cursor-pointer"
        onClick={() =>
          setPage(page === totalPages - 1 ? totalPages - 1 : page + 1)
        }
      />
      <div className="border-r-[1.3px] h-8 absolute left-[4.25rem] border-lightGray" />
      <div className="border-r-[1.3px] h-8 absolute right-[4.25rem] border-lightGray" />
      <div className="flex flex-row">
        {pageNumArr.map((pageNum, idx) =>
          typeof pageNum === 'number'
            ? (Math.abs(page - pageNum) <= PAGE_BUTTON_SEEN_RADIUS ||
                pageNum === 0 ||
                pageNum === initialArrLength - 1) && (
                <div className="relative" key={pageNum}>
                  <div
                    className={`font-bold font-main text-xl mx-3 cursor-pointer ${
                      page === pageNum ? 'text-brightBlue' : 'text-gray'
                    }`}
                    onClick={() => setPage(pageNum)}
                  >
                    {pageNum + 1}
                  </div>
                  <div
                    className={`border-b-[2.6px] w-8 absolute -bottom-[0.85rem] left-[0.2rem] border-brightBlue ${
                      page === pageNum ? 'block' : 'hidden'
                    }`}
                  />
                </div>
              )
            : idx === 1
            ? page > PAGE_BUTTON_SEEN_RADIUS + 1 && (
                <div
                  key="beginThreeDot"
                  className={`font-bold font-main text-xl mx-3 text-gray`}
                >
                  {pageNum}
                </div>
              )
            : page + 1 < initialArrLength - PAGE_BUTTON_SEEN_RADIUS - 1 && (
                <div
                  key="endThreeDot"
                  className={`font-bold font-main text-xl mx-3 text-gray`}
                >
                  {pageNum}
                </div>
              )
        )}
      </div>
    </div>
  )
}

interface IPaginationProps {
  page: number
  totalPages: number
  setPage: Dispatch<SetStateAction<number>>
}

export default Pagination
