import { useState } from 'react';

function Enroll() {
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        childAge: '',
        email: '',
        phone: '',
        selectedCourse: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enrollment submitted:', formData);
        alert("Enrollment successful! We will contact you soon with the next steps.");
        setFormData({ parentName: '', childName: '', childAge: '', email: '', phone: '', selectedCourse: '' });
    };

    return (
        <section className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 relative overflow-hidden min-h-screen" id="enroll">
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

            <div className="max-w-4xl mx-auto w-full relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm mb-4">
                        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                            Join Us
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Enrollment</span>
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        Secure your child's spot in our upcoming sessions. Fill out the form below to get started.
                    </p>
                </div>

                <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm shadow-[0_0_30px_rgba(234,88,12,0.1)]">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="parentName" className="block text-sm font-medium text-gray-300 mb-2">Parent/Guardian Name</label>
                                <input
                                    type="text"
                                    id="parentName"
                                    name="parentName"
                                    value={formData.parentName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all"
                                    placeholder="jane@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="childName" className="block text-sm font-medium text-gray-300 mb-2">Child's Name</label>
                                <input
                                    type="text"
                                    id="childName"
                                    name="childName"
                                    value={formData.childName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-300 mb-2">Child's Age</label>
                                    <input
                                        type="number"
                                        id="childAge"
                                        name="childAge"
                                        min="5"
                                        max="18"
                                        value={formData.childAge}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all"
                                        placeholder="10"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all"
                                        placeholder="+91..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="selectedCourse" className="block text-sm font-medium text-gray-300 mb-2">Select a Course</label>
                            <select
                                id="selectedCourse"
                                name="selectedCourse"
                                value={formData.selectedCourse}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-[#0a0a0a]/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all appearance-none"
                            >
                                <option value="" disabled className="text-gray-500">Choose a course...</option>
                                <option value="Web Development">Web Development (10-15 Years)</option>
                                <option value="Mobile App Development">Mobile App Development (12+ Years)</option>
                                <option value="AI & Automation">AI & Automation (13+ Years)</option>
                                <option value="Game Development">Game Development (9-14 Years)</option>
                                <option value="Python Programming">Python Programming (10+ Years)</option>
                                <option value="Robotics Fundamentals">Robotics Fundamentals (8-14 Years)</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 mt-4 bg-gradient-to-r from-orange-600 to-amber-500 rounded-xl font-bold text-white hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(234,88,12,0.3)] text-lg"
                        >
                            Complete Enrollment
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Enroll;
