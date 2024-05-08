import React from 'react'
import PreSchool  from '../../public/img/landingImage/Preschool.jpg'
import Elementary  from '../../public/img/landingImage/Elementary.jpg'
import College  from '../../public/img/landingImage/College.jpg'
import Image from 'next/image'

const Categories = () => {
    let schools = [
        {image: PreSchool,
        title: "Preschool",
        },
        {image: Elementary,
            title: "Elementary",
            },
       {image: College,
            title: "College",
            },     
    ]

  return (
    <>
        <div className=''>

            <div className='m-4 flex justify-around items-center  '>
            
            {schools.map((s, index )=>(
                <div key={index}>

                    <Image
                        className=' max-h-[200px]'
                        height={200}
                        
                        src={s.image}
                        width={300}
                        alt="preschool" 
                        />
                    <div className='text-white p-3 text-center bg-blue-950 '>{s.title}</div>
                </div>
                    
                
            ))}            
                        
            
            </div>
        </div>
        

    </>
  )
}

export default Categories