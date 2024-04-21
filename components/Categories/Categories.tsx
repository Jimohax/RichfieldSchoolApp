import React from 'react'
import PreSchool  from '../../public/img/preSchool.jpg'
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
            <div className='bg-[#F8BC36] min-h-[13rem]  w-[25rem] p-3 relative rounded-md shadow-xl m-auto text-center'>
                <span className='text-black text-[2rem] font-bold '>Pre-School</span>
                <Image
                height={400}
                src={PreSchool}
                width={400}
                alt="preschool" 
                />
                    
                <span className='text-black'>Register your child with us and experience a complete turnaround </span>
            </div>
            {/* Card2 */}
            <div className='bg-[#F8BC36] min-h-[13rem]  w-[25rem] p-3 relative rounded-md shadow-xl m-auto text-center'>
                <span className='text-black text-[2rem] font-bold '>Elementary</span>
                <Image
                height={400}
                src={Elementary}
                width={400}
                alt="preschool" 
                />
                    
                <span className='text-black'>Register your child with us and experience a complete turnaround </span>
            </div>
            {/* Card3 */}
            <div className='bg-[#F8BC36] min-h-[13rem]  w-[25rem] p-3 relative rounded-md shadow-xl m-auto text-center'>
                <span className='text-black text-[2rem] font-bold '>College</span>
                <Image
                height={400}
                src={College}
                width={400}
                alt="preschool" 
                />
                    
                <span className='text-black'>Register your child with us and experience a complete turnaround </span>
            </div>
            
        </div>  
    </div>

    </>
  )
}

export default Categories