"use client";
import {useState} from "react";
import Image from "next/image"
import Link from "next/link"
import Dialog from "./dialog"

export function Navbar() {

    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialog = () => {
      setDialogOpen((x) => !x);
    };

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
            <button onClick={handleDialog} className="hover:text-black cursor-pointer">Services</button>
            <div className="absolute left-0 mt-3 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100 cursor-pointer">Minerals</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100 cursor-pointer">Process Improvement</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Productivity Improvement</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Global Logistics</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Mining</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Ore</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Supply Chain</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Catalyst</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Energy</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Sustainability</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Time to Market</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Strategy</button>
            </div>
        </div>

        {/* Learning Dropdown */}
        <div className="relative group">
            <button onClick={handleDialog} className="hover:text-black cursor-pointer">Learning</button>
            <div className="absolute left-0 mt-3 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100 cursor-pointer">Awareness</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100 cursor-pointer">Certification</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100 cursor-pointer">Standardization</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Community Awareness</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Government Awareness</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Market Awareness</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black cursor-pointer">Research</button>
            
            </div>
        </div>

        {/* Events Dropdown */}
        <div className="relative group">
            <button className="hover:text-black">Events</button>
            <div className="absolute left-0 mt-3 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            <a href="#training" className="block px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100">Training</a>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100 cursor-pointer">Workshop</button>
            <button onClick={handleDialog} className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-black border-b border-gray-100 cursor-pointer">Conferences</button>
            </div>
        </div>

        <a href="/#contact" className="hover:text-black">Contact Us</a>
        </nav>

    </div>

        {open && (
        <div className="md:hidden min-h-screen text-center bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col gap-0 py-4">
            <a href="/" className="px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors font-medium">Home</a>
            <a href="/about" className="px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors font-medium">About Us</a>
            <a href="/consulting" className="px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors font-medium">Schedule Meeting</a>
            <button onClick={handleDialog} className="w-full text-left px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors font-medium cursor-pointer">Services</button>
            <button onClick={handleDialog} className="w-full text-left px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors font-medium cursor-pointer">Learning</button>
            <a href="#training" className="px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors font-medium">Events</a>
            <a href="/#contact" className="px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">Contact Us</a>
          </div>
        </div>
      )}

      <Dialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />

    </header>
    )
};

