function Review() {
    const reviews = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Parent",
            content: "Digontom Future Kids has been a game-changer for my son. He used to just play video games all day, but now he is actually building his own! The instructors are incredibly patient and the curriculum is top-notch.",
            rating: 5,
            initials: "SJ"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Parent",
            content: "I am amazed by the robotics projects my daughter brings home. The hands-on learning approach here is exactly what she needed. It's not just theory; they are actually building and coding real devices.",
            rating: 5,
            initials: "MC"
        },
        {
            id: 3,
            name: "Priya Sharma",
            role: "Parent",
            content: "The best investment we've made in our child's education. The AI & Automation course was challenging but the teachers broke it down so well. My 12-year-old is now confident in Python programming!",
            rating: 5,
            initials: "PS"
        },
        {
            id: 4,
            name: "David Rodriguez",
            role: "Parent",
            content: "A fantastic environment for kids to learn and grow. The focus on logical thinking and problem solving is exactly what schools are missing today. Highly recommend Digontom Future Kids!",
            rating: 5,
            initials: "DR"
        }
    ];

    return (
        <section className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 relative overflow-hidden" id="reviews">
            {/* Background glowing effects */}
            <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-amber-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm mb-4">
                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                            Testimonials
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        What Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Say</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl text-lg">
                        Hear from the parents of our students about how our programs have transformed their children's learning experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review) => (
                        <div 
                            key={review.id} 
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
                        >
                            {/* Star Rating */}
                            <div className="flex text-amber-500 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            
                            {/* Review Content */}
                            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                                "{review.content}"
                            </p>
                            
                            {/* Reviewer Info */}
                            <div className="flex items-center space-x-4 mt-auto">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center font-bold text-white text-lg">
                                    {review.initials}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{review.name}</h4>
                                    <span className="text-sm text-gray-500">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Review;
