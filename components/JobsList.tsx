import React from 'react'
import JobItem from './JobItem'

const JobsList = () => {
  return (
    <div className="w-[91.15%] flex flex-col gap-2">
      <JobItem />
      <JobItem />
    </div>
  )
}

export default JobsList
