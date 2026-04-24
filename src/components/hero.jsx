import heroImage from "../assets/hero.jpeg";

function Hero() {
    return (
        <section className="bg-[#0a0a0a] text-white min-h-[90vh] flex items-center justify-center relative overflow-hidden px-6 md:px-12 py-20">
            {/* Background glowing effects for premium tech feel */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-[128px] opacity-30"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-600 rounded-full mix-blend-screen filter blur-[128px] opacity-30"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Hero Text Content */}
                <div className="flex flex-col items-start justify-center space-y-6 lg:pr-8">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 pb-2">
                            Worried About Your
                        </span>
                        <span className="block text-white">
                            Child's Future?
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                        We are here to help them build it. Equip your kids with the real-world tech skills they need to become confident and future-ready.
                    </p>
                    <div className="pt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full font-bold text-white hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(234,88,12,0.4)] w-full sm:w-auto">
                            Enroll Now
                        </button>
                        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full font-bold text-white backdrop-blur-sm transition-all duration-300 w-full sm:w-auto">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Hero Image Content */}
                <div className="relative flex justify-center items-center w-full">
                    {/* Subtle glow behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 rounded-3xl filter blur-3xl"></div>
                    <img 
                        src={heroImage} 
                        alt="Child learning tech skills" 
                        className="relative z-10 w-full max-w-lg rounded-2xl shadow-2xl border border-white/10 object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;