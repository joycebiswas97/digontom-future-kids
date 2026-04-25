function Cta() {
    return (
        <section className="py-20 px-6 md:px-12 bg-[#0a0a0a]">
            <div className="max-w-5xl mx-auto rounded-3xl relative overflow-hidden shadow-2xl">
                {/* Orange Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-[50px] transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full filter blur-[50px] transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8">
                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                            Ready to Secure Your Child's Future?
                        </h2>
                        <p className="text-orange-50 text-lg md:text-xl max-w-xl opacity-90">
                            Give them the tools to succeed in a digital world. Join Digontom Future Kids today and watch them build tomorrow.
                        </p>
                    </div>
                    
                    <div className="flex-shrink-0">
                        <button className="px-10 py-5 bg-white text-orange-600 hover:bg-gray-50 rounded-full font-bold text-2xl hover:scale-105 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;
