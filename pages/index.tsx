import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import JobsList from '../components/ListPage/JobsList'
import Pagination from '../components/ListPage/Pagination'
import { ITEMS_PER_PAGE } from '../consts'
import { getJobs } from '../services'
import { IJob } from '../types'

const Home: NextPage<IProps> = ({ jobs }: IProps) => {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE)

  return (
    <main>
      <Head>
        <title>Jobs Board</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.cdnfonts.com/css/proxima-nova-2"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex mt-[1.8rem] mb-16 flex-col">
        <JobsList jobs={jobs} page={page} />
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </main>
  )
}

interface IProps {
  jobs: IJob[]
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<IProps>
> => {
  const jobs = await getJobs()
  return {
    props: { jobs },
  }
}

export default Home
