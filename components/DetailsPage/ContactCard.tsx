import Image from 'next/image'
import React, { useMemo } from 'react'
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import { locationImage, mapMarkerImage } from '../../images'
import { IJob } from '../../types'
import { mapSettings } from '../../utils/mapSettings'

const ContactCard = ({ job, location }: { job: IJob; location: string }) => {
  const position = useMemo(
    () => ({ lat: job.location.lat, lng: job.location.long }),
    []
  )
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN,
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <>
      <div className="sm:hidden">
        <div className="text-main text-[1.75rem] font-bold font-main">
          Contacts
        </div>
        <div className="border-b-[1px] border-main w-full opacity-[0.13] mb-4" />
      </div>
      <div className="w-[25rem] rounded-lg bg-[#2A3047] text-white pt-8 relative overflow-hidden h-max">
        <div className="bg-[#202336] rounded-full absolute h-[17rem] w-[17rem] -left-20 -top-5" />
        <div className="flex flex-col mx-auto w-[70%] bg-transparent relative z-10 mb-4">
          <span className="font-main font-bold text-xl text-whitishOne mb-2">
            {job.address}
          </span>
          <span className="font-secondary text-lg text-whitishTwo mb-2">
            <Image src={locationImage} alt="location" className="inline mr-2" />
            {location}
          </span>
          <div className="flex flex-col font-secondary text-lg text-whitishTwo">
            <span>{job.phone},</span>
            <span>{job.email}</span>
          </div>
        </div>
        <GoogleMap
          zoom={10}
          center={position}
          mapContainerClassName="h-[13.65rem]"
          options={{
            disableDefaultUI: true,
            styles: mapSettings,
          }}
        >
          <MarkerF position={position} icon={mapMarkerImage} />
        </GoogleMap>
      </div>
    </>
  )
}
export default ContactCard
