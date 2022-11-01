import axios from 'axios'
import { IJob } from '../types'

const API = axios.create({
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
})

export const getJobs = async (): Promise<IJob[]> => {
  const jobs = await API.get(process.env.NEXT_PUBLIC_API_URL)
  return jobs.data
}
