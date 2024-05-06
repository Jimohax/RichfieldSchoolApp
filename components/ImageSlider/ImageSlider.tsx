// 'use client'

import Image from 'next/image'
import React from 'react'
// import Play from "/img/landingImage/playground.jpg"
// import basketball from "img/landingImage/basketball.jpg"
// import hall from "img/landingImage/Hall.jpg"
// import lab from "img/landingImage/lab.jpg"
// import post2 from "img/landingImage/post2.png"



const ImageSlider = ({slides}) => {

 
  return (
    <>
      <div className='overflow-hidden'>

        <div className='flex'>
          {slides.map((s, index)=>{
            
            return <Image key={index} style={{width: "auto", height: "auto"}} height={200} width={200} alt='slide' src={s}/>
          })}
        </div>
      </div>
        <div>HELLO</div>
    </>
  )
}

export default ImageSlider