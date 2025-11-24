import React from 'react';
import Header from '../components/Header';
import RegisterInterestForm from '../components/RegisterInterestForm';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const About = () => {
    const {t} = useTranslation();
    return (
        <div>
            {/* ✅ Header Section */}
            <div className="p-2 md:p-4 bg-white">
                <Header
                    backgroundImage="/newpro.jpg"
                    showFilter={false}
                    title= {t("ABOUT_HEADING")}
                    subtitle={t("WHO_WE_ARE")}
                    description={t("ABOUT_TEXT")}
                />
            </div>

            {/* ✅ About Content Section */}
            <section className="p-4 md:p-8 lg:p-12">
                <div className="max-w-[1440px] mx-auto bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-16">

                    {/* 🏙️ Left Image */}
                    <div className="flex-1">
                        <img
                            src="/BULDINGS.png"
                            alt="About Briskbold"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* 📝 Right Text */}
                    <div className="flex-1 px-4 md:px-8 py-4 flex items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                                {t("ABOUT_BRISKBOLD_PROPERTIES")}
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
                               {t("BRISKBOLD_TEXT")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ Register Interest Form Section */}
            <RegisterInterestForm
                backgroundImage="abouthead.jpg"
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
                            {t("OUR_VISION_HEADING")}
                        </h3>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                           {t("OUR_VISION_TEXT")}
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="flex-1 bg-[#EAF2F5] rounded-3xl p-8 lg:p-12 shadow-md">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {t("OUR_MISSION_HEADING")}
                        </h3>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                           {t("OUR_MISSION_TEXT")} 
                        </p>
                    </div>

                </div>
            </section>
            <Footer />


        </div>
    );
};

export default About;
