function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Parent of a 10-year-old",
            text: "My son absolutely loves the robotics classes! He's always excited to build new things. The instructors are incredibly patient and make complex concepts easy to understand.",
            rating: 5,
        },
        {
            name: "Michael Thompson",
            role: "Parent of a 12-year-old",
            text: "Digontom Future Kids transformed my daughter's screen time into productive learning time. She just built her first fully functional app last month and she couldn't be prouder!",
            rating: 5,
        },
        {
            name: "Emily Rodriguez",
            role: "Parent of an 8-year-old",
            text: "The curriculum is perfectly structured for young minds. It's hands-on, highly engaging, and provides real-world skills. Best investment we've made in our child's education.",
            rating: 5,
        }
    ];

    return (
        <section className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 relative overflow-hidden" id="testimonials">
            {/* Background glowing effects */}
            <div className="absolute bottom-0 left-[-10%] w-96 h-96 bg-amber-600/10 rounded-full filter blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Trusted by  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Over 100+</span> Parents
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Don't just take our word for it. Hear from the parents who have seen their children grow and thrive with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(234,88,12,0.15)] hover:border-orange-500/30 transition-all duration-300 relative group"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-orange-500/20 group-hover:text-orange-500/40 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed relative z-10 italic">
                                "{testimonial.text}"
                            </p>

                            <div className="mt-auto border-t border-white/10 pt-4 flex items-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
