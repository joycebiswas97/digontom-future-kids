import { useState } from 'react';
import faqImage from '../assets/FAQ.jpg';

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What age groups are your courses for?",
            answer: "Our courses are specifically designed for kids and teenagers ranging from 7 to 16 years old. We have tailored curriculums for different age brackets."
        },
        {
            question: "What are the prerequisites for joining?",
            answer: "No prior coding or technical experience is needed! Your child only needs a basic laptop or computer, a stable internet connection, and a curiosity to learn."
        },
        {
            question: "Do you offer online or offline classes?",
            answer: "We offer both! You can choose our fully interactive online sessions from the comfort of your home, or join our hands-on offline workshops if you are located nearby."
        },
        {
            question: "Are the classes live or pre-recorded?",
            answer: "All our sessions are 100% live and interactive. We believe kids learn best when they can ask questions in real-time and get immediate guidance from our expert mentors."
        },
        {
            question: "Will my child receive a certificate?",
            answer: "Yes, absolutely! Upon successful completion of any course, your child will receive a verified certificate of achievement to showcase their newly acquired skills."
        }
    ];

    const toggleFaq = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className="bg-[#0B0B15] text-white py-20 px-6 md:px-12 relative overflow-hidden" id="faq">
            {/* Background glowing effects for consistency */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full filter blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Questions</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Got questions? We've got answers. Here are some of the most common questions parents ask us.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Image Section (Left) */}
                    <div className="relative flex justify-center items-center w-full order-2 lg:order-1">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 rounded-3xl filter blur-3xl"></div>
                        <img 
                            src={faqImage} 
                            alt="FAQ illustration" 
                            className="relative z-10 w-full max-w-md rounded-2xl shadow-[0_0_30px_rgba(234,88,12,0.15)] border border-white/10 object-cover"
                        />
                    </div>

                    {/* FAQ Accordion (Right) */}
                    <div className="flex flex-col space-y-4 order-1 lg:order-2">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 overflow-hidden ${activeIndex === index ? 'shadow-[0_0_15px_rgba(234,88,12,0.2)] border-orange-500/30' : 'hover:border-white/20'}`}
                            >
                                <button 
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                >
                                    <span className={`font-semibold text-lg transition-colors duration-300 ${activeIndex === index ? 'text-orange-400' : 'text-gray-200'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180 bg-orange-500/20 text-orange-400' : 'text-gray-400'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                
                                <div 
                                    className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
