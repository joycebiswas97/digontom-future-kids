function About() {
    return (
        <section className="bg-[#0a0a0a] text-white py-20 px-6 md:px-12 relative overflow-hidden" id="about">
            {/* Background effects */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 transform -translate-y-1/2"></div>
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* About Content */}
                <div className="flex flex-col space-y-6">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                            About Digontom Future Kids
                        </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                        Empowering the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Innovators</span>
                    </h2>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                        At Digontom Future Kids, we believe that every child has the potential to shape the future. Our mission is to bridge the gap between traditional education and the rapidly evolving tech landscape.
                    </p>
                    
                    <p className="text-gray-400 text-md leading-relaxed pb-4">
                        We provide hands-on learning experiences in robotics, IoT, and coding, designed to foster creativity, critical thinking, and problem-solving skills. Our interactive courses ensure that technology isn't just something kids consume, but something they create.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="flex flex-col space-y-2 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-colors duration-300">
                            <h3 className="text-3xl font-bold text-white">500+</h3>
                            <p className="text-sm text-gray-400">Students Trained</p>
                        </div>
                        <div className="flex flex-col space-y-2 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-colors duration-300">
                            <h3 className="text-3xl font-bold text-white">50+</h3>
                            <p className="text-sm text-gray-400">Projects Completed</p>
                        </div>
                    </div>
                </div>

                {/* About Visual/Image area */}
                <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-amber-500/10 rounded-3xl filter blur-2xl"></div>
                    <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm overflow-hidden flex flex-col p-8 justify-center items-center">
                         {/* Abstract illustration elements */}
                         <div className="w-24 h-24 mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)] rotate-3 hover:rotate-6 transition-transform duration-300">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                             </svg>
                         </div>
                         <h3 className="text-2xl font-bold text-white text-center mb-4">Future-Ready Skills</h3>
                         <p className="text-gray-400 text-center max-w-sm">
                             Our curriculum is crafted by industry experts to give your child a head start in tomorrow's tech-driven world.
                         </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
