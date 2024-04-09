import React from "react";
import Image from "next/image";
import Head from '../../public/img/Head.jpg'


const HeadOfSchool = () => {
	return (
		<>
			<div className="hero min-h-[12rem] bg-gray-200">
				<div className="hero-content flex-col lg:flex-row">					
                    <Image
						src={Head}
						width={700}
						height={500}
						alt="Picture of a girl-student "
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Head of School</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Read More</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeadOfSchool;
