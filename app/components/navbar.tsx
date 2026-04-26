"use client";
import {useState} from "react";
import Image from "next/image"
import Link from "next/link"

export function Navbar() {

    const [open, setOpen] = useState(false);

    return(
    /* Navigation */
    <header className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white shadow-sm sticky top-0 z-50">
    <div className="mx-auto flex max-w-6xl items-center justify-between">

        <Link href="/">
        <Image src="/logo.png" alt="QiMinerals Logo" width={120} height={60} priority unoptimized className="bg-transparent"/>
        </Link>

        <button className="md:hidden text-4xl mr-8 cursor-pointer" onClick={() => {
                setOpen(!open);

        }}>
            ☰
        </button>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">

        <a href="/">Home</a>
        <a href="/about" className="hover:text-black">About Us</a>
        <a href="/consulting">Schedule Meeting</a>

        {/* Services Dropdown */}
        <div className="relative group">
            <button className="hover:text-black">Services</button>
            <div className="absolute left-0 mt-3 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100">Minerals</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100">Process Improvement</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Productivity Improvement</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Global Logistics</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Mining</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Ore</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Supply Chain</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Catalyst</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Energy</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Sustainability</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Time to Market</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Strategy</a>
            </div>
        </div>

        {/* Learning Dropdown */}
        <div className="relative group">
            <button className="hover:text-black">Learning</button>
            <div className="absolute left-0 mt-3 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100">Awareness</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100">Certification</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100">Standardization</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Community Awareness</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Government Awareness</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Market Awareness</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black">Research</a>
            
            </div>
        </div>

        {/* Events Dropdown */}
        <div className="relative group">
            <button className="hover:text-black">Events</button>
            <div className="absolute left-0 mt-3 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            <a href="#training" className="block px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100">Training</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100">Workshop</a>
            <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100">Conferences</a>
            </div>
        </div>

        <a href="/#contact" className="hover:text-black">Contact Us</a>
        </nav>

    </div>

        {open && (
        <div className="md:hidden min-h-screen bg-white border-t text-sm flex flex-col text-center">
          <a href="#">About Us</a>
          <a href="/consulting">Schedule Meeting</a>
          <a href="#">Services</a>
          <a href="#">Learning</a>
          <a href="#training">Events</a>
          <a href="/#contact">Contact Us</a>
        </div>
      )}

    </header>
    )
};

