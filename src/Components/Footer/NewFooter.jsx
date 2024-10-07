import React from "react";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";
import { LogoDark, LogoLight } from "../../assets/assets";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const NewFooter = ({ dark }) => {

    return (
        <footer className="bg-zinc-100 dark:bg-black dark:text-white py-8">
            <div className="container mx-auto px-4">
                {/* Main footer grid */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    {/* Logo section */}
                    <div className="lg:h-full lg:flex w-min lg:items-center ">
                        <div onClick={() => navigate("/")} className='px-4 w-52'>
                            <img
                                src={dark ? LogoDark : LogoLight}
                                className="w-full"
                                alt="Baoiam Innovation brand image."
                            />
                        </div>
                    </div>

                    {/* Links container - wraps all the link sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-1 px-4 lg:mr-8 xl:mr-0 text-black dark:text-white">
                        {/* Links section */}
                        <FooterLinks title="Quick Links" links={[
                            { name: "Our Team", to: "/team" },
                            { name: "About Us", to: "/about-us" },
                            { name: "Careers", to: "/career" },
                            { name: "Courses", to: "/courses" },
                            { name: "Blog", to: "/blogs" }
                        ]}
                        />

                        <FooterLinks title="Programs & Partnerships" links={[
                            { name: "Global Collabo Educational Partnership", to: "/gcep" },
                            { name: "Bridge", to: "/bridge" },
                            { name: "Intern Teach Intern Earn", to: "/itei" },
                            { name: "Pay After Placement", to: "/pap" },
                            { name: "Entrepreneurship", to: "/entrepreneurship" }
                        ]}
                        />

                        <FooterLinks
                            title="Help & Support"
                            links={[
                                { name: "Hire from us", to: "/hire" },
                                { name: "Contact", to: "/contact" },
                                { name: "FAQs", to: "/FAQ" },
                            ]}
                        />

                        <FooterLinks
                            title="Contact Us"
                            links={[
                                { name: "support@baoiam.com", to: "https://mail.google.com/mail/?view=cm&fs=1&to=support@baoiam.com", icon: <MdOutlineEmail className="min-w-6 text-xl aspect-square mt-1" /> },
                                { name: "08069640635", to: "tel:+91 8069640635", icon: <FiPhone className="min-w-6 text-xl aspect-square mt-1" /> },
                                { name: "H Block, Sector 62 201301 UP Noida, India.", to: "https://maps.app.goo.gl/wCB4YVBmkBdCbY3A9", icon: <HiOutlineLocationMarker className="min-w-6 text-xl aspect-square mt-1" /> }
                            ]}
                        />


                    </div>
                </div>

                {/* Bottom section */}
                <FooterBottom />
            </div>
        </footer>
    );
};

export default NewFooter;
