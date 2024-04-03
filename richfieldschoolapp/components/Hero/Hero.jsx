"use client";

import React from "react";
import Image from "next/image";
import student from "../../public/img/student.png";

const Hero = () => {
	return (
		<>
			<div className="bg-blue-900 h-[30rem] w-full flex align-center justify-around relative ">
				<div>
					<div className=" p-3 m-3 relative left-20 flex flex-col">
						<span>For a better </span> <br />
						<span className="text-lg font-bold text-7xl ">
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
						<button className="border p-2 border-[#F8BC36] border-2 px-4 rounded">
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
			

		</>
	);
};

export default Hero;
