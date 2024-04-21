import Image from 'next/image'
import React from 'react'
import Facility1 from '../../public/img/facility1.jpg'
import Facility2 from '../../public/img/facility2.jpg'
import Facility3 from '../../public/img/facility3.png'

const Facilities = () => {
  return (
    <>
      <div className='bg-white min-h-[20rem] w-full flex flex-col p-3 text-blue-950 font-bold'>
        <span className='text-center text-2xl my-3'>Our Facilities</span>
        <div className='flex flex-col lg:flex-row gap-[2rem] mb-[2rem]'>
          <div className='m-auto'>
              <Image
                width={500}
                height={400}
                src={Facility1}
                alt='school facilities'
              />
              <span>Well equiped ICT room</span>
          </div>
          <div className='m-auto'>
              <Image
                width={500}
                height={400}
                src={Facility2}
                alt='school facilities'
              />
              <span>State of the art classroom</span>

          </div>
          <div className='m-auto'>
              <Image
                width={500}
                height={400}
                src={Facility3}
                alt='school facilities'
              />
              <span>Spacious halls</span>

          </div>
        </div>
      </div>
    </>
  )
}

export default Facilities