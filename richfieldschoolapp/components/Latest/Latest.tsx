import Image from 'next/image'
import React from 'react'
import College from '../../public/img/college.jpg'

const Latest = () => {
  return (
    <>
    <div className='bg-blue-600 w-full h-[23rem] p-3 m-auto'>
        <div className='text-lg'>Latest Video </div>
        <div>
            
        <Image
                height={400}
                src={College}
                width={400}
                alt="preschool" 
                />
            <span>Mothers Day Celebration</span>
            {/* <iframe className="w-full aspect-video ..." src="https://www.youtube.com/..."></iframe> */}

        </div>

    </div>
    
    </>

  )
}

export default Latest