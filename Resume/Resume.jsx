import React from 'react'
import { FaInstagram,FaLinkedin,FaGithub,FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Resume.css"


export default function Resume() {
  return (
    <div className='container-fluid rmain'>
          <footer class="bg-black text-white">
	<div class="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-700">
		<ul class="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
			<li>Shop</li>
			<li>About</li>
			<li>Blog</li>
			<li>Pricing</li>
			<li>Contact</li>
		</ul>
		<div class="flex flex-col justify-center pt-6 lg:pt-0">
			<div class="flex justify-center space-x-4">
				<a rel="noopener noreferrer" href="#home" title="Instagram" class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800 text-white hover:bg-violet-600">
        <FaLinkedin class="w-4 h-4"/>
					
				</a>
				<a rel="noopener noreferrer" href="#home" title="Pinterest" class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800 text-white hover:bg-violet-600">
        <FaWhatsappSquare class="w-4 h-4"/>
				</a>
				<a rel="noopener noreferrer" href="#home" title="Twitter" class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800 text-white hover:bg-violet-600">
        <MdEmail class="w-4 h-4"/>
				</a>
				<a rel="noopener noreferrer" href="#home" title="Facebook" class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800 text-white hover:bg-violet-600">
        <FaInstagram class="w-4 h-4"/>
				</a>
				<a rel="noopener noreferrer" href="#home" title="Gmail" class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800 text-white hover:bg-violet-600">
        <FaGithub class="w-4 h-4"/>
				</a>
			</div>
		</div>
	</div>
</footer>

    </div>
  )
}
