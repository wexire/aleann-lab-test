import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
} from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React, { useState } from 'react'
import AdditionalInfo from '../../components/DetailsPage/AdditionalInfo'
import ContactCard from '../../components/DetailsPage/ContactCard'
import { ReturnButton } from '../../components/DetailsPage/DetailsButtons'
import MainDetails from '../../components/DetailsPage/MainDetails'
import { getJobs } from '../../services'
import { geocodeCoords } from '../../services/geocode'
import { IJob } from '../../types'

const JobPage = ({ job }: IProps) => {
  const router = useRouter()
  const [location, setLocation] = useState('')
  geocodeCoords(job.location).then((data) => {
    const address = data.split(' ').slice(1).join(' ')
    setLocation(address ? address : 'Not Found')
  })

  if (router.isFallback) return <div>Loading...</div>

  return (
    <div className="bg-white h-full w-full">
      <div className="mx-auto sm:pt-14 pt-6 sm:pb-44 pb-12 flex sm:flex-row flex-col sm:gap-[8.4rem] sm:w-max w-full">
        <div className="flex flex-col sm:w-[45.25rem] w-[88%] mx-auto">
          <MainDetails job={job} />
          <AdditionalInfo job={job} />
          <div className="sm:block hidden">
            <ReturnButton />
          </div>
        </div>
        <div className="sm:mx-0 mx-auto">
          <ContactCard job={job} location={location} />
        </div>
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
    fallback: true,
  }
}

export default JobPage
