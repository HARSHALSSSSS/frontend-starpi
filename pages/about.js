import React from "react";
import Wrapper from "@/components/Wrapper";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {/* Hero Section */}
                <div className="text-center max-w-[1000px] mx-auto mb-[50px] md:mb-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        About Our Shoe Store
                    </div>
                    <div className="text-md md:text-xl text-black/[0.7] px-4">
                        Discover the perfect blend of style, comfort, and performance in every step you take.
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-[50px] md:mb-[80px]">
                    {/* Left Column - Our Story */}
                    <div className="px-4 md:px-0">
                        <div className="text-[24px] md:text-[28px] font-semibold mb-5 text-center lg:text-left">
                            Our Story
                        </div>
                        <div className="text-md md:text-lg text-black/[0.7] leading-relaxed space-y-4">
                            <p>
                                Founded in 2020, our shoe store began with a simple mission: to provide 
                                high-quality footwear that doesn't compromise on style or comfort. What 
                                started as a small family business has grown into a trusted destination 
                                for shoe enthusiasts worldwide.
                            </p>
                            <p>
                                We believe that the right pair of shoes can transform not just your outfit, 
                                but your entire day. Whether you're running a marathon, heading to the office, 
                                or enjoying a casual weekend, we have the perfect shoes to accompany your journey.
                            </p>
                            <p>
                                Our carefully curated collection features the latest trends and timeless 
                                classics from top brands, ensuring that every customer finds their perfect match.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="px-4 md:px-0">
                        <div className="bg-gray-100 rounded-lg p-8 h-[300px] md:h-[400px] flex items-center justify-center">
                            <img 
                                src="/product-1.webp" 
                                alt="About us" 
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-[50px] md:mb-[80px]">
                    <div className="text-[24px] md:text-[28px] font-semibold mb-8 text-center">
                        Our Values
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Quality */}
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <div className="text-4xl mb-4">👟</div>
                            <div className="text-lg font-semibold mb-2">Quality First</div>
                            <div className="text-sm md:text-base text-black/[0.7]">
                                We source only the finest materials and partner with trusted manufacturers 
                                to ensure every shoe meets our high standards.
                            </div>
                        </div>

                        {/* Customer Service */}
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <div className="text-4xl mb-4">🤝</div>
                            <div className="text-lg font-semibold mb-2">Customer Care</div>
                            <div className="text-sm md:text-base text-black/[0.7]">
                                Your satisfaction is our priority. Our dedicated team is here to help 
                                you find the perfect fit and provide exceptional service.
                            </div>
                        </div>

                        {/* Innovation */}
                        <div className="text-center p-6 bg-gray-50 rounded-lg md:col-span-2 lg:col-span-1">
                            <div className="text-4xl mb-4">💡</div>
                            <div className="text-lg font-semibold mb-2">Innovation</div>
                            <div className="text-sm md:text-base text-black/[0.7]">
                                We stay ahead of trends and technology to bring you the latest 
                                innovations in footwear design and comfort.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="bg-black text-white rounded-lg p-8 md:p-12 mb-[50px] md:mb-[80px]">
                    <div className="text-center mb-8">
                        <div className="text-[24px] md:text-[28px] font-semibold mb-4">
                            Why Choose Us?
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
                        <div>
                            <div className="text-2xl md:text-3xl font-bold mb-2">10K+</div>
                            <div className="text-sm md:text-base text-white/[0.7]">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold mb-2">500+</div>
                            <div className="text-sm md:text-base text-white/[0.7]">Shoe Models</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold mb-2">50+</div>
                            <div className="text-sm md:text-base text-white/[0.7]">Top Brands</div>
                        </div>
                        <div>
                            <div className="text-2xl md:text-3xl font-bold mb-2">4.8★</div>
                            <div className="text-sm md:text-base text-white/[0.7]">Customer Rating</div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="text-center">
                    <div className="text-[24px] md:text-[28px] font-semibold mb-5">
                        Meet Our Team
                    </div>
                    <div className="text-md md:text-lg text-black/[0.7] max-w-[600px] mx-auto px-4">
                        Our passionate team of footwear experts is dedicated to helping you find 
                        the perfect shoes. With years of experience in the industry, we're here 
                        to guide you every step of the way.
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default About;
