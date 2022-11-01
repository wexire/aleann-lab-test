import React from 'react'
import { IJob } from '../types'
import JobItem from './JobItem'

const JobsList = ({ jobs }: IJobsListProps) => {
  return (
    <div className="w-[91.15%] flex flex-col gap-2">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  )
}

interface IJobsListProps {
  jobs: IJob[]
}

export default JobsList
