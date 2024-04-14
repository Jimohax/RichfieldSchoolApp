import Image from "next/image";
import React from "react";

const Hero2 = () => {
	return (
		<>
        <main className="">
            <div className="w-full h-[40rem] bg-fixed relative bg-cover " style={{ backgroundImage: "url(/img/bg.jpg)"}} >
                
                <div className="bg-blue-950 w-full h-[50rem] opacity-90 absolute top-0 "></div>
                <div className="absolute top-5 text-white md:ml-[7rem] ml-[3rem] md:mt-[7rem] mt-[4rem] flex flex-col ">

                    <span className="text-[2rem] -mb-8">Welcome to</span><br />
                    <span className=" md:text-[5rem] text-[4rem] font-bold -mb-8">RICHFIELD <span className="font-light flex -mt-3">School</span> </span><br />
                    <span className="text-yellow-400 md:text-[2rem] text-[1.3rem]">All children deserve an excellent education</span>
                    <br /><span className="font-bold "> Preschool | Elementary | College </span>
                </div>
            </div>
            
        </main>
		</>
	);
};

export default Hero2;
