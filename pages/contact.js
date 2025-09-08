import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa/index.js";
import { IoMdSend } from "react-icons/io/index.js";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {/* Hero Section */}
                <div className="text-center max-w-[800px] mx-auto mb-[50px] md:mb-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Get in Touch
                    </div>
                    <div className="text-md md:text-xl text-black/[0.7] px-4">
                        Have questions about our products or need assistance? We're here to help!
                    </div>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[50px] md:mb-[80px] px-4 md:px-0">
                    {/* Phone */}
                    <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mb-4">
                            <FaPhone className="text-lg" />
                        </div>
                        <div className="font-semibold mb-2">Phone</div>
                        <div className="text-sm text-black/[0.7]">+1 (555) 123-4567</div>
                        <div className="text-sm text-black/[0.7]">Mon-Fri 9AM-6PM</div>
                    </div>

                    {/* Email */}
                    <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mb-4">
                            <FaEnvelope className="text-lg" />
                        </div>
                        <div className="font-semibold mb-2">Email</div>
                        <div className="text-sm text-black/[0.7]">info@shoestore.com</div>
                        <div className="text-sm text-black/[0.7]">24/7 Support</div>
                    </div>

                    {/* Address */}
                    <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mb-4">
                            <FaMapMarkerAlt className="text-lg" />
                        </div>
                        <div className="font-semibold mb-2">Address</div>
                        <div className="text-sm text-black/[0.7]">123 Shoe Street</div>
                        <div className="text-sm text-black/[0.7]">New York, NY 10001</div>
                    </div>

                    {/* Hours */}
                    <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mb-4">
                            <FaClock className="text-lg" />
                        </div>
                        <div className="font-semibold mb-2">Store Hours</div>
                        <div className="text-sm text-black/[0.7]">Mon-Sat: 10AM-8PM</div>
                        <div className="text-sm text-black/[0.7]">Sunday: 12PM-6PM</div>
                    </div>
                </div>

                {/* Contact Form and Map Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-[50px] md:mb-[80px]">
                    {/* Contact Form */}
                    <div className="px-4 md:px-0">
                        <div className="text-[24px] md:text-[28px] font-semibold mb-6 text-center lg:text-left">
                            Send us a Message
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Subject *</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-vertical"
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                            >
                                <IoMdSend />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map/Store Info */}
                    <div className="px-4 md:px-0">
                        <div className="text-[24px] md:text-[28px] font-semibold mb-6 text-center lg:text-left">
                            Visit Our Store
                        </div>
                        <div className="bg-gray-100 rounded-lg p-6 h-[300px] md:h-[400px] flex flex-col justify-center items-center text-center">
                            <div className="text-6xl mb-4">🗺️</div>
                            <div className="text-lg font-semibold mb-2">Store Location</div>
                            <div className="text-black/[0.7] space-y-1">
                                <p>123 Shoe Street</p>
                                <p>New York, NY 10001</p>
                                <p className="mt-4 font-medium">Coming Soon: Interactive Map</p>
                            </div>
                        </div>

                        {/* Store Features */}
                        <div className="mt-6 space-y-4">
                            <div className="text-lg font-semibold">What to Expect:</div>
                            <div className="space-y-2 text-sm md:text-base">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black rounded-full"></div>
                                    <span>Wide selection of premium footwear</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black rounded-full"></div>
                                    <span>Professional fitting services</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black rounded-full"></div>
                                    <span>Expert advice from our team</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black rounded-full"></div>
                                    <span>Comfortable shopping environment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                    <div className="text-[24px] md:text-[28px] font-semibold mb-6 text-center">
                        Frequently Asked Questions
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div className="font-semibold mb-2">What are your return policies?</div>
                            <div className="text-sm md:text-base text-black/[0.7]">
                                We offer 30-day returns on unworn items with original packaging.
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold mb-2">Do you offer shoe fitting services?</div>
                            <div className="text-sm md:text-base text-black/[0.7]">
                                Yes! Our trained staff provides professional fitting services in-store.
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold mb-2">Do you ship internationally?</div>
                            <div className="text-sm md:text-base text-black/[0.7]">
                                Currently we ship within the US, with international shipping coming soon.
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold mb-2">Can I track my order?</div>
                            <div className="text-sm md:text-base text-black/[0.7]">
                                Yes, you'll receive tracking information via email once your order ships.
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Contact;
