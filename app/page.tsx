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

export default function Home() {
	return (
		<>
			<NavBar/>
			<Hero2/>
			<Hero/>
			<Categories/>
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
