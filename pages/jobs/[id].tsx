import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
} from 'next'
import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring'
import React, { useState } from 'react'
import ContactCard from '../../components/ContactCard'
import { bookmarkImage, shareImage } from '../../images'
import { getJobs } from '../../services'
import { geocodeCoords } from '../../services/geocode'
import { IJob } from '../../types'

const JobPage = ({ job }: IProps) => {
  const [location, setLocation] = useState('')
  geocodeCoords(job.location).then((data) => {
    const address = data.split(' ').slice(1).join(' ')
    setLocation(address ? address : 'Not Found')
  })

  return (
    <div className="bg-white h-screen">
      <div className="mx-auto pt-14 flex flex-row gap-[8.4rem] w-max">
        <div className="w-[45.25rem] mb-2">
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
          <div className="border-b-[1px] border-main w-full opacity-[0.13]" />
        </div>
        <ContactCard job={job} location={location} />
      </div>
    </div>
  )
}

interface IProps {
  job: IJob
}

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<GetStaticPropsResult<IProps>> => {
  const { id } = params as IParams
  const jobs = await getJobs()
  const job = jobs.find((item) => item.id === id) as IJob
  return {
    props: { job },
  }
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<IParams>
> => {
  const jobs = await getJobs()

  const paths = jobs.map(({ id }) => ({ params: { id } }))

  return {
    paths,
    fallback: false,
  }
}

export default JobPage
