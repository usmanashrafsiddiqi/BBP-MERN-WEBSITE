import React from 'react';
import Header from '../components/Header';
import RegisterInterestForm from '../components/RegisterInterestForm';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            {/* ✅ Header Section */}
            <div className="p-2 md:p-4 bg-white overflow-hidden">
                <Header
                    backgroundImage="/aboutbase.jpg"
                    showFilter={false}
                    title="WELCOME TO BRISKBOLD PROPERTIES"
                    subtitle="Who We Are"
                    description="We’re reimagining how you buy, sell and rent. It’s now easier to get into a 
place you love. So let’s do this, together."
                />
            </div>

            {/* ✅ About Content Section */}
            <section className="p-4 md:p-8 lg:p-12">
                <div className="max-w-[1440px] mx-auto bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-16">

                    {/* 🏙️ Left Image */}
                    <div className="flex-1">
                        <img
                            src="/abouthead.jpg"
                            alt="About Briskbold"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* 📝 Right Text */}
                    <div className="flex-1 px-4 md:px-8 py-4 flex items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                                About BRISKBOLD PROPERTY
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
                                BriskBOLD Properties is a leading real estate brokerage firm in the UAE,
                                known for its expertise, professionalism, and commitment to delivering
                                exceptional client experiences. Our team of multilingual and highly
                                skilled agents ensures tailored solutions for every property need.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ Register Interest Form Section */}
            <RegisterInterestForm
                backgroundImage="/technology .png"
                title="Join Our Mission"
                subtitle="We’re here to connect you to smarter property solutions."
                buttonText="CONTACT OUR TEAM →"
                showLeftText={true}
                leftTitle="Core Competencies"
                leftDescription={`BRISKBOLD PROPERTY executes to execute projects with excellence and provides best property management solutions.\nOur competencies we possess include:`}
                leftBulletPoints={[
                    "Strong Management and Consultancy Infrastructure",
                    "Renowned Partnerships and Real Estate Portfolio",
                    "Deep Local Market Knowledge",
                    "Comprehensive Hospitality Services",
                    "Established Marketing and Publicity",
                    "Skilled Workforce and Maintenance Support",
                    "Broad Customer Base and Database",
                ]}
            />

            {/* ✅ Vision & Mission Section */}
            {/* ✅ Vision & Mission Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
                <div className="w-full flex flex-col lg:flex-row gap-10">

                    {/* Vision Card */}
                    <div className="flex-1 bg-[#EAF2F5] rounded-3xl p-8 lg:p-12 shadow-md">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Our Vision
                        </h3>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                            To become one of the leading providers of total real estate solutions,
                            delivering the most prominent portfolio of properties, innovative solutions,
                            and top-notch customer services in the Middle East, driven by quality,
                            high-end services, and an expert team of consultants.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="flex-1 bg-[#EAF2F5] rounded-3xl p-8 lg:p-12 shadow-md">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Our Mission
                        </h3>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                            To develop an energetic, research oriented, and results-driven focused work
                            environment, providing expert and definitive commercial and residential
                            property advice, driving meaningful value, and managing all clients’ property
                            interests with transparency and mutual trust.
                        </p>
                    </div>

                </div>
            </section>
            <Footer />


        </div>
    );
};

export default About;
