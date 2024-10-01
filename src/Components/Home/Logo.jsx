import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LogoDark, LogoLight } from '../../assets/assets';
import { gsap } from 'gsap';

const Logo = ({ isDark }) => {
    const logoRef = useRef(null);

    useEffect(() => {
        // Animate logo on mount
        gsap.fromTo(logoRef.current, 
            { opacity: 0, y: -20 }, // Initial state
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" } // Final state
        );
    }, []);

    return (
        <Link
            rel="canonical"
            to={"/"}
            className={`md:w-24 pl-2 xl:ml-4 md:h-14 w-16 h-10`}
            ref={logoRef} // Attach the ref to the logo element
        >
            <img
                src={isDark ? LogoDark : LogoLight}
                className={`w-full h-full`}
                alt="logo"
            />
        </Link>
    );
}

export default Logo;
