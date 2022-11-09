import Image from 'next/image'
import React from 'react'
import { BENEFITS, EMPLOYMENT } from '../../consts'
import { IJob } from '../../types'
import InfoBox from './InfoBox'

interface IAdditionalInfoProps {
  job: IJob
}

const AdditionalInfo = ({ job }: IAdditionalInfoProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-[5.375rem]">
        <div className="text-main text-[1.75rem] font-bold font-main">
          Additional info
        </div>
        <div className="border-b-[1px] border-main w-full opacity-[0.13] mb-4" />
        <div className="flex flex-col mb-6">
          <span className="text-main text-lg font-secondary mb-2">
            Employment type
          </span>
          <div className="flex flex-row gap-2">
            {job.employment_type.map((type, idx) => (
              <InfoBox key={idx} type={EMPLOYMENT} text={type} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-main text-lg font-secondary mb-2">
            Benefits
          </span>
          <div className="flex flex-row gap-2">
            {job.benefits.map((benefit, idx) => (
              <InfoBox key={idx} type={BENEFITS} text={benefit} />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-[5.5rem]">
        <div className="text-main text-[1.75rem] font-bold font-main">
          Attached images
        </div>
        <div className="border-b-[1px] border-main w-full opacity-[0.13] mb-4" />
        <div className="flex flex-row gap-2">
          {job.pictures.map((img, idx) => (
            <div key={idx} className="w-[200px] h-[116px] relative">
              <Image
                alt="job-image"
                src={img}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdditionalInfo
