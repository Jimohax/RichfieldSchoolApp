import Image from "next/image";
import React from "react";

const NavBar = () => {
	return (
		<>
			<div className="text-red-600 text-center font-bold  ">Admission is still on</div>
			<div className="navbar bg-blue-900">
				<div className="navbar-start mx-[5rem] text-white">
					<div className="dropdown">
						<div
							tabindex="0"
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>w
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						{/* Menu */}
						<ul
							tabindex="0"
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a>About</a>
							</li>
							<li>
								<a>School</a>
								<ul className="p-2">
									<li>
										<a>Pre-school</a>
									</li>
									<li>
										<a>Elementary</a>
									</li>
                                    <li>
										<a>College</a>
									</li>
								</ul>
							</li>
							<li>
								<a>Contact</a>
							</li>
						</ul>
					</div>
					<a className="btn btn-ghost text-xl">RICHFIELD</a>
					<Image src="/img/richfield_logo.png" height={100} width={100} alt="logo"/>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							
							<a href="/about">About</a>
						</li>
						<li>
							<details>
								<summary>School</summary>
								<ul className="p-2 z-10">
									<li>
										<a>Pre-school</a>
									</li>
									<li>
										<a>Elementary</a>
									</li>
                                    <li>
										<a>College</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<a>Contact</a>
						</li>
					</ul>
				</div>
				<div className="navbar-end mx-[4rem]">
					<a className="btn bg-[#f7de3e] text-black">Join Us</a>
				</div>
			</div>

			
		</>
	);
};

export default NavBar;
