import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
} from 'next'
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
  const [location, setLocation] = useState('')
  geocodeCoords(job.location).then((data) => {
    const address = data.split(' ').slice(1).join(' ')
    setLocation(address ? address : 'Not Found')
  })

  return (
    <div className="bg-white h-max">
      <div className="mx-auto pt-14 py-44 flex flex-row gap-[8.4rem] w-max">
        <div className="flex flex-col w-[45.25rem]">
          <MainDetails job={job} />
          <AdditionalInfo job={job} />
          <ReturnButton />
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
