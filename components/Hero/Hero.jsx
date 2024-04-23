"use client";

import React from "react";
import Image from "next/image";
import student from "../../public/img/student.png";
import event1 from "../../public/img/event1.jpg";
import event2 from "../../public/img/event2.jpg";
import event3 from "../../public/img/event3.jpg";
import event4 from "../../public/img/event4.jpg";

const Hero = () => {
	return (
		<>
			<div className="bg-blue-950  w-full flex align-center  min-h-[20rem] justify-around relative  flex-col md:flex-row">
				<div>
					<div className=" p-3 m-3 relative  flex flex-col text-center">
						<span className="text-white ">Give your child </span> <br />
						<div className="flex md:flex-row flex-col">

							<span className="font-bold md:text-7xl text-5xl  text-white ">
								Quality 
								
							</span><br />
							<span className="bg-yellow-300 text-blue-950 font-bold md:text-7xl text-5xl">Education</span>
						</div>
						<br />
						<span className="text-white">This is the right school for your ward</span>
					</div>
					<div className="relative  md:ml-6 flex gap-4 justify-center mb-7">
						<button className="bg-[rgb(248,188,54)] text-blue-900 py-4 hover:bg-white px-10  rounded-full font-bold">
							Enrol Now
						</button>

					</div>
				</div>
				
			</div>
			<div className="carousel w-full">
				<div id="slide1" className="carousel-item relative  ">
					<Image
						src={event1}
						width={400}
						height={300}
						alt="Picture of a girl-student "
						// className="w-full"
					/>

					
				</div>
				<div id="slide2" className="carousel-item relative ">
					<Image
						src={event2}
						width={400}
						height={300}
						alt="Picture of a girl-student "
						// className="w-full"
					/>
					
				</div>
				<div id="slide3" className="carousel-item relative ">
					<Image
						src={event3}
						width={400}
						height={300}
						alt="Picture of a girl-student "
						// className="w-full"
					/>
					
				</div>
				<div id="slide4" className="carousel-item relative ">
					<Image
						src={event4}
						width={400}
						height={300}
						alt="Picture of a girl-student "
						// className="w-full"
					/>
					
				</div>
			</div>
		</>
	);
};

export default Hero;
