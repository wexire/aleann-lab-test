import axios, { AxiosResponse } from 'axios'
import { ILocationRes } from '../types'

interface IProps {
  lat: number
  long: number
}

export const geocodeCoords = async ({ lat, long }: IProps) => {
  const location: AxiosResponse<ILocationRes> = await axios.get(
    'https://maps.googleapis.com/maps/api/geocode/json',
    {
      params: {
        latlng: `${lat},${long}`,
        key: process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN,
        language: 'en',
      },
    }
  )
  return location.data.results[0].formatted_address
}
