import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { bookmarkImage, shareImage } from '../../images'
import { IJob } from '../../types'
import DetailsButton from './DetailsButtons'

interface IMainDetailsProps {
  job: IJob
}

const MainDetails = ({ job }: IMainDetailsProps) => {
  return (
    <div className="mb-20">
      <div className="flex flex-row justify-between">
        <div className="text-main text-[1.75rem] font-bold font-main">
          Job Details
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex flex-row gap-4 font-secondary text-main text-lg items-center">
            <Image src={bookmarkImage} alt="bookmark" />
            Save to my list
          </div>
          <div className="flex flex-row gap-4 font-secondary text-main text-lg items-center">
            <Image src={shareImage} alt="share" />
            Share
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-main w-full opacity-[0.13] mb-10" />
      <DetailsButton text="APPLY NOW" />
      <div className="flex flex-row justify-between mt-8 mb-2">
        <div className="flex flex-col w-[65%] gap-2">
          <span className="font-main text-main font-bold text-2xl">
            {job.title}
          </span>
          <span className="text-[rgba(56, 65, 93)] font-secondary text-lg opacity-[0.35]">
            Posted {moment(job.createdAt).fromNow()}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-main text-main font-bold text-xl">
            € {job.salary.replaceAll('k', ' 000')}
          </span>
          <span className="font-secondary text-main text-lg">
            {job.name}, per year
          </span>
        </div>
      </div>
      <div className="text-main flex flex-col mb-8">
        <span className="font-secondary text-lg">
          At WellStar, we all share common goals. That’s what makes us so
          successful – and such an integral part of our communities. We want the
          same things, for our organization, for our patients, and for our
          colleagues. As the most integrated healthcare provider in Georgia,
          this means we pride ourselves on investing in the communities that we
          serve. We continue to provide innovative care models, focused on
          improving quality and access to healthcare.
        </span>
        <span className="font-main font-bold text-xl mt-8 mb-2">
          Responsibilities
        </span>
        <span className="font-secondary text-lg mb-6">
          Wellstar Medical Group, a physician-led multi-specialty group in
          Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic
          surgeon to join their existing cardiovascular program. This is an
          opportunity to play a key role on a multidisciplinary team of
          cardiologists and surgeons. The ideal candidate will have five or more
          years of experience in cardiac surgery.
        </span>
        <span className="font-secondary text-lg mb-6">
          This candidate should be facile with off-pump revascularization,
          complex aortic surgery, minimally invasive valve and valve repair,
          transcatheter valve replacement, surgical atrial fibrillation
          ablation, ventricular assist device placement, and extra corporeal
          membrane oxygenation.
        </span>
        <span className="font-secondary text-lg mb-6">
          Wellstar is one of the largest integrated healthcare systems in the
          Southeast with 11 hospitals in Atlanta metro region. With two open
          heart programs at Kennestone Regional Medical Center and Atlanta
          Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac
          procedures per year. The cardiac service line is the only center in
          Georgia with the Joint Commission’s Comprehensive Cardiac Center
          certification.
        </span>
        <span className="font-main font-bold text-xl my-2">
          Compensation & Benefits:
        </span>
        <ol className="font-secondary text-lg">
          <span>Our physicians enjoy a wide range of benefits, including:</span>
          <li className="customSquare">
            Very competitive compensation package with bonuses
          </li>
          <li className="customSquare">
            Medical, Dental, and Vision Insurance
          </li>
          <li className="customSquare">
            Occurrence-based Malpractice Coverage
          </li>
          <li className="customSquare">
            Short-term and Long-term Disability Insurance and life insurance
          </li>
        </ol>
      </div>
      <DetailsButton text="APPLY NOW" />
    </div>
  )
}

export default MainDetails
