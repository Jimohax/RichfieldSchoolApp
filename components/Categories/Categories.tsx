import React from 'react'
import PreSchool  from '../../public/img/landingImage/cretche.jpg'
import Elementary  from '../../public/img/elementary.jpg'
import College  from '../../public/img/college.jpg'
import Image from 'next/image'

const Categories = () => {
  return (
    <>
    <div>
        {/* categories */}
        <div className='bg-blue-950 h- text-white p-8 text-center m-3'>Categories</div> 
        <div className='flex flex-col gap-9 md:flex-row'>
            
            {/* Card 1 */}
            <div className=' min-h-[13rem]   p-3 relative rounded-md shadow-xl m-auto text-center'>
                <Image
                className='rounded-xl'
                height={400}
                src={PreSchool}
                width={400}
                alt="preschool" 
                />
                <div className='text-black bg-[#F8BC36] rounded text-[2rem] font-bold w-[25rem]'>Pre-School</div>
                    
                
            </div>
            {/* Card2 */}
            <div className='  relative rounded-md shadow-xl m-auto text-center'>
                <Image
                className='rounded-xl'
                height={400}
                src={Elementary}
                width={400}
                alt="preschool" 
                />
                <div className='text-white text-[2rem] font-bold bg-blue-950 p-3 rounded  w-[25rem]'>Elementary</div>
                    
                
            </div>
            {/* Card3 */}
            <div className='  relative rounded-md shadow-xl m-auto text-center  '>
                <Image
                className='rounded-xl'
                height={400}
                src={College}
                width={400}
                alt="preschool" 
                />
                <div className='text-white text-[2rem] font-bold w-[25rem] p-3 bg-gray-400 rounded '>College</div>
                    
                
            </div>
            
        </div>  
    </div>

    </>
  )
}

export default Categories