import Image from "next/image";
import NavBar from '../components/navBar/NavBar'
import Hero from '../components/Hero/Hero'

export default function Home() {
	return (
		<>
    <NavBar/>
    <Hero/>
			<div className="pl-9 text-blue-800 font-bold text-lg bg-lime-600">
				Here we go again
			</div>
			<div className="bg-blue-500 h-9 w-full text-white">Hey bro</div>
		</>
	);
}
