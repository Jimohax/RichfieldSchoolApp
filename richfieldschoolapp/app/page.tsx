import Image from "next/image";
import NavBar from '../components/navBar/NavBar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import HeadOfSchool from '../components/HeadOfSchool/HeadOfSchool'
import Categories from "@/components/Categories/Categories";
import Latest from "@/components/Latest/Latest";
import Facilities from "@/components/Facilities/Facilities";
import Downloads from "@/components/Downloads/Downloads";

export default function Home() {
	return (
		<>
			<NavBar/>
			<Hero/>
			<Categories/>
			<Latest/>
			<HeadOfSchool/>
			<Facilities/>
			<Downloads/>





			<Footer/>

		</>
	);
}
