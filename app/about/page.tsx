'use client';
import Image from 'next/image';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Company Section */}
                <div className="bg-white rounded-lg shadow-xl shadow-black-500 p-8 md:p-12 mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: 'var(--font-playfair)'}}>Our Company</h2>
                    <p className="text-gray-600 text-lg mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi delectus ipsa cum, asperiores, non nisi labore ipsam, reiciendis repellendus facere qui esse nam impedit numquam cupiditate? Exercitationem porro animi, dolorem et amet sequi fuga architecto quod nobis, magnam repellat quibusdam ullam odit vero quas officiis nihil voluptatum assumenda ea incidunt odio id repellendus, consectetur aliquam. Vel ipsa eius nesciunt perferendis. Fuga pariatur nulla optio omnis maiores iure minima error, nam odio quia recusandae temporibus itaque dolores repellendus magnam dicta dignissimos! Odit pariatur blanditiis dolor explicabo expedita amet perspiciatis laborum iste ad sunt, porro dolore, id inventore numquam quas consequatur?
                    </p>
                </div>

                {/* Founder Section */}
                <div className="bg-white rounded-lg shadow-xl shadow-black-500 p-8 md:p-12">
                    <p style={{fontFamily: 'var(--font-playfair)'}} className='italic text-2xl mb-2 rounded-full'>FOUNDER</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        
                        {/* Left Text */}
                        <div>
                            <h2 className="text-6xl font-bold text-gray-900 mb-4" style={{fontFamily: 'var(--font-playfair)'}}><i>DR. <br/>PRAKASH B. MALLA</i></h2>
                            <div className="flex gap-2 m-1">
                                <a href="https://www.linkedin.com/in/prakash-malla-7aa2276/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-blue-700 hover:text-blue-900 transition">
                                    <svg className="w-8 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.42-.103.249-.129.597-.129.946v5.439h-3.554s.05-8.836 0-9.753h3.554v1.381c.43-.664 1.195-1.61 2.902-1.61 2.12 0 3.71 1.384 3.71 4.362v5.62zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.957-1.71 1.187 0 1.915.759 1.915 1.71 0 .951-.728 1.71-1.957 1.71zm1.582 11.019H3.755V9.679h3.164v10.773zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                                </a>
                                <a href="https://scholar.google.com/citations?user=5_R6_TUAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" title='Google Scholar' className="transition hover:opacity-80">
                                    <svg className="w-8 h-6" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC04"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                                </a>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div className="flex justify-center">
                            <div className="w-96 h-96 rounded-lg flex items-center justify-center overflow-hidden relative">
                                <Image src="/Profile.jpg" alt="Dr. Prakash B. Malla" width={512} height={512} className="object-cover w-full h-full absolute rounded-full"/>
                            </div>
                        </div>

                        {/* Right Text */}
                        <div>
                            <p style={{fontFamily: 'var(--font-playfair)'}} className='p-4'>
                                Dr. Prakash Malla is President and Principal Consultant of Quantum Industrial Minerals. He retired as Director of R&D at Thiele Kaolin Company, Georgia, USA, in 2024 where he contributed over 31 years of distinguished service. <br/>At Thiele, Dr. Malla led a team focused on fundamental and applied research in clay mineralogy, innovative mineral processing technologies, surface chemistry and paper and paperboard coating. Their work advanced the development of new kaolin and silica products and processes, improving quality in paper coating and filling, as well as expanding applications in industries such as paints and coatings, ceramics, plastics, and cement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}