import React from 'react'
import { ITEMS_PER_PAGE } from '../../consts/index'
import { IJob } from '../../types'
import JobItem from './JobItem'

const JobsList = ({ jobs, page }: IJobsListProps) => {
  const skip = page * ITEMS_PER_PAGE
  const pageJobs = jobs.slice(skip, skip + ITEMS_PER_PAGE)

  return (
    <div className="w-[91.15%] flex flex-col gap-2 mb-12 mx-auto">
      {pageJobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  )
}

interface IJobsListProps {
  jobs: IJob[]
  page: number
}

export default JobsList
