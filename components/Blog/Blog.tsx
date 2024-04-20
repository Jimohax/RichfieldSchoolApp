import React from "react";
import collegeGirl from '../../public/img/collegeGirl.jpg'
import Image from "next/image";

const Blog = () => {
	return (
		<>
			<div className="p-3">
				<span className="text-black font-bold">School Blog</span><br />
				<span className="font-bold text-gray-800  mb-3">
					Welcome to <span className="text-red-600 ">Richfield College</span> on your first day
				</span>
                <hr className="font-bold bg-slate-600" />
				<div className="flex gap-2 flex-col md:flex-row">
					<Image src={collegeGirl} height={200} width={200} alt="" />
					<div>
						<span>
							Welcome to <span>Richfield College</span> on your
							first day
						</span>

						<span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis accusamus neque ex excepturi non aspernatur omnis reprehenderit reiciendis, praesentium porro!</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
