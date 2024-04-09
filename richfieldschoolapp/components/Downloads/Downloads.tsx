import React from 'react'

const Downloads = () => {
  return (
    <>
        <div className=' bg-blue-300 w-full min-h-[25rem] flex'>
            <span className='text-blue-700'>Downloads</span>
            <div className='h-[20rem] w-[50rem] bg-white m-auto '>
                <div className='flex p-4 gap-2'>

                    <div className='bg-blue-700 h-6 w-6 '></div>
                    <a href="#">Download school calendar</a>
                </div>
                <div className='flex p-4 gap-2'>

                    <div className='bg-blue-700 h-6 w-6 '></div>
                    <a href="#">Download Admission form</a>
                </div>
                <div className='flex p-4 gap-2'>

                    <div className='bg-blue-700 h-6 w-6 '></div>
                    <a href="#">Download Newsletter</a>
                </div>\
                <div className='flex p-4 gap-2'>

                    <div className='bg-blue-700 h-6 w-6 '></div>
                    <a href="#">Download bus run schedule</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Downloads