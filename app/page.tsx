import Image from "next/image";
import NavBar from '../components/navBar/NavBar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import HeadOfSchool from '../components/HeadOfSchool/HeadOfSchool'
import Categories from "@/components/Categories/Categories";
import Latest from "@/components/Latest/Latest";
import Facilities from "@/components/Facilities/Facilities";
import Downloads from "@/components/Downloads/Downloads";
import LatestNews from "@/components/LatestNews/LatestNews";
import Blog from "@/components/Blog/Blog";
import Hero2 from "@/components/Hero2/Hero2";
import Subscribe from "@/components/Subscribe/Subscribe";
import ImageSlider from "@/components/ImageSlider/ImageSlider";

import play from '../public/img/landingImage/playground.jpg'
import basketball from "../public/img/landingImage/basketball.jpg"
import hall from "../public/img/landingImage/Hall.jpg"
import lab from "../public/img/landingImage/lab.jpg"
import post2 from "../public/img/landingImage/post2.png"
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {

		let slides = [
			{image: play,
				title: "Kiddies Playground"
			},
			
			{image: basketball,
				title: "basketball court"
			},
			{image: hall,
				title: "school hall"
			},
			{image: lab,
				title: "science lab"
			},
			{image: post2,
				title: "instagram feed"
			},
		];

		let posts = [
			{image: play,
				
			},
			
			{image: basketball,
				
			},
			{image: hall,
				
			},
			{image: lab,
				
			},
			{image: post2,
				
			},
		];
		

	return (
		<>
			<NavBar/>
			<Hero2/>
			<Hero/>
			<Carousel>
				{posts.map((p, index)=>(
					<Image height={200} width={200} src={p.image} alt="posts" key={index}/>
				))}
			</Carousel>
			<Categories/>
			<div className="">
				<ImageSlider slides={slides}/>
			</div>
			<HeadOfSchool/>
			<Latest/>
			<Facilities/>
			<Downloads/>
			<div className="flex">

				<LatestNews/>	
				<Blog/>
			</div>



			<Subscribe/>
			<Footer/>

		</>
	);
}
