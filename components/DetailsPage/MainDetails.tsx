import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { bookmarkImage, shareImage, starImage } from '../../images'
import { IJob } from '../../types'
import DetailsButton from './DetailsButtons'

interface IMainDetailsProps {
  job: IJob
}

const MainDetails = ({ job }: IMainDetailsProps) => {
  return (
    <div className="sm:mb-20 mb-[9.5rem]">
      <div className="flex sm:flex-row flex-col justify-between">
        <div className="text-main text-[1.75rem] font-bold font-main">
          Job Details
        </div>
        <div className="border-b-[1px] border-main w-full opacity-[0.13] mb-6 sm:hidden" />
        <div className="flex flex-row gap-8">
          <div className="flex flex-row gap-3 font-secondary text-main sm:text-lg text-base items-center">
            <Image src={starImage} alt="bookmark" className="sm:hidden" />
            <Image
              src={bookmarkImage}
              alt="bookmark"
              className="hidden sm:block"
            />
            Save to my list
          </div>
          <div className="flex flex-row gap-3 font-secondary text-main sm:text-lg text-base items-center">
            <Image src={shareImage} alt="share" />
            Share
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-main w-full opacity-[0.13] mb-10 sm:block hidden" />
      <div className="sm:block hidden">
        <DetailsButton text="APPLY NOW" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-8 sm:mb-2 mb-3">
        <div className="flex flex-col sm:w-[65%] gap-2 w-full">
          <span className="font-main text-main font-bold text-2xl">
            {job.title}
          </span>
          <span className="text-[rgba(56, 65, 93)] font-secondary text-lg opacity-[0.35] hidden sm:block">
            Posted {moment(job.createdAt).fromNow()}
          </span>
        </div>

        <div className="flex flex-row justify-between mt-2 sm:mt-0">
          <span className="text-[rgba(56, 65, 93)] font-main text-[13px] font-light opacity-[0.60] sm:hidden flex items-center">
            Posted {moment(job.createdAt).fromNow()}
          </span>
          <div className="flex sm:flex-col flex-col-reverse text-end">
            <span className="font-main text-main font-bold text-xl">
              € {job.salary.replaceAll('k', ' 000')}
            </span>
            <span className="font-secondary text-main text-lg">
              {job.name}, per year
            </span>
          </div>
        </div>
      </div>
      <div className="text-main flex flex-col mb-8">
        <span className="sm:font-secondary font-main text-lg">
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
        <span className="sm:font-secondary font-main text-lg mb-6">
          Wellstar Medical Group, a physician-led multi-specialty group in
          Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic
          surgeon to join their existing cardiovascular program. This is an
          opportunity to play a key role on a multidisciplinary team of
          cardiologists and surgeons. The ideal candidate will have five or more
          years of experience in cardiac surgery.
        </span>
        <span className="sm:font-secondary font-main text-lg mb-6">
          This candidate should be facile with off-pump revascularization,
          complex aortic surgery, minimally invasive valve and valve repair,
          transcatheter valve replacement, surgical atrial fibrillation
          ablation, ventricular assist device placement, and extra corporeal
          membrane oxygenation.
        </span>
        <span className="sm:font-secondary font-main text-lg mb-6">
          Wellstar is one of the largest integrated healthcare systems in the
          Southeast with 11 hospitals in Atlanta metro region. With two open
          heart programs at Kennestone Regional Medical Center and Atlanta
          Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac
          procedures per year. The cardiac service line is the only center in
          Georgia with the Joint Commission’s Comprehensive Cardiac Center
          certification.
        </span>
        <span className="font-main font-bold text-xl sm:my-2 mb-6">
          Compensation & Benefits:
        </span>
        <ol className="font-secondary text-lg">
          <span>Our physicians enjoy a wide range of benefits, including:</span>
          <li className="customSquare">
            <span>Very competitive compensation package with bonuses</span>
          </li>
          <li className="customSquare">
            <span>Medical, Dental, and Vision Insurance</span>
          </li>
          <li className="customSquare">
            <span>Occurrence-based Malpractice Coverage</span>
          </li>
          <li className="customSquare">
            <span>
              Short-term and Long-term Disability Insurance and life insurance
            </span>
          </li>
        </ol>
      </div>
      <div className="mx-auto sm:mx-0 w-max">
        <DetailsButton text="APPLY NOW" />
      </div>
    </div>
  )
}

export default MainDetails
