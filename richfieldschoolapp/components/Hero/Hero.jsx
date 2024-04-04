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
			<div className="bg-blue-900 h-[30rem] w-full flex align-center justify-around relative ">
				<div>
					<div className=" p-3 m-3 relative left-20 flex flex-col">
						<span>For a better </span> <br />
						<span className="font-bold text-7xl ">
							High Quality <br />
							<span>Education</span>
						</span>{" "}
						<br />
						<span>Find the right school for your ward</span>
					</div>
					<div className="relative left-20 ml-6 flex gap-4">
						<button className="bg-[#F8BC36] text-blue-900 p-2 rounded">
							Learn More
						</button>
						<button className="p-2 border-[#F8BC36] border-2 px-4 rounded">
							Join Us
						</button>
					</div>
				</div>
				<div className="">
					<Image
						src={student}
						width={700}
						height={500}
						alt="Picture of a girl-student "
					/>
				</div>
			</div>
			<div className="carousel w-full">
				<div id="slide1" className="carousel-item relative ">
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
