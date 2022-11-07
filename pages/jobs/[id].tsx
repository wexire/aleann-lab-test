import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
} from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { bookmarkImage, shareImage } from '../../images'
import { getJobs } from '../../services'
import { IJob } from '../../types'

const JobPage = ({ job }: IProps) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  return (
    <div className="ml-[22rem] mr-[19.5rem] mt-14 ">
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
    </div>
  )
}

interface IProps {
  job: IJob | undefined
}

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<GetStaticPropsResult<IProps>> => {
  const { id } = params as IParams
  const jobs = await getJobs()
  const job = jobs.find((item) => item.id === id)
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
