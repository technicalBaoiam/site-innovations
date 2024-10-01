import React, { useState, useRef, useEffect } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'
import { School } from '../../Data'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FaBullseye } from 'react-icons/fa6'

const SearchBox = ({ courses }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState()
    const inputRef = useRef()

    useEffect(() => {
        axios.get(`https://api.baoiam.com/api/courses/?search=${searchQuery}`)
            .then(response => {
                setSearchResults(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [searchQuery]);

    // console.log(searchResults);

    // Detect window resize and toggle between mobile/desktop behavior
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768) // Change behavior for screens smaller than 768px
        }
        window.addEventListener('resize', handleResize)
        handleResize() // Initial check on component mount

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className='relative'>
            <div className='hidden md:flex items-center border focus:outline focus:outline-orange-500 bg-slate-100 dark:bg-slate-200 dark:text-white border-slate-400 rounded-3xl w-40'>
                <input
                    type="text"
                    className='w-32 bg-transparent py-2 pl-3 text-slate-500 dark:text-white text-xs outline-none'
                    placeholder='Search...'
                    ref={inputRef}
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <RiSearch2Line size={16} className='text-slate-500'  />
            </div>

            {searchQuery && (
                <div className='absolute top-7 -right-2 bg-white text-black w-80 z-30 max-h-80 overflow-auto shadow-lg rounded-md mt-2'>
                    {searchResults.length > 0 ? (
                        searchResults.map((c, i) => (
                            <Link
                                to={`/course/${c.title}/${c.id}`}
                                onClick={() => {setIsExpanded(false); setSearchQuery('')}} // Collapse search box when a result is clicked
                                className='py-2 px-4 block hover:bg-gray-200'
                                key={i}
                            >
                                {c.title}
                            </Link>
                        ))
                    ) : (
                        <div className='py-2 px-4 text-gray-500'>No courses found</div>
                    )}
                </div>
            )}


            {/* Mobile and smaller screen behavior: Pop-up modal */}
            {isMobile && (
                <>
                    {/* Clicking the Search Icon on mobile opens the full-screen pop-up */}
                    <RiSearch2Line
                        onClick={() => setIsMobilePopupOpen(true)}
                        size={20}
                        className='cursor-pointer'
                    />

                    {/* Full-screen pop-up modal for small screens */}
                    {isMobilePopupOpen && (
                        <div className='fixed inset-0 z-50 bg-slate-200/50 backdrop-blur-sm p-4 w-[100vw] h-[100vh]'>
                            <div className='relative flex flex-col items-start justify-start w-full h-full'>
                                {/* Close Button */}
                                <RxCross2
                                    onClick={() => setIsMobilePopupOpen(false)}
                                    className='text-black absolute top-2 right-2 cursor-pointer'
                                    size={25}
                                />

                                {/* Search Input Field */}
                                <div className='bg-white relative  text-black flex items-center w-full px-6 py-1 border border-black rounded-3xl mt-16'>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        placeholder='Search courses'
                                        className='py-2 focus:outline-none w-full'
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                    <RiSearch2Line size={20} />
                                </div>

                                {/* Results Box */}
                                {searchQuery && (
                                    <div className='bg-white text-black w-full max-h-80 overflow-auto rounded-md py-4 mt-4'>
                                        {searchResults.length > 0 ? (
                                            searchResults.map((c, i) => (
                                                <Link
                                                    to={`/course/${c.title}/${c.id}`}
                                                    onClick={() => {setIsMobilePopupOpen(false); setSearchQuery('')}} // Close the pop-up when a result is clicked
                                                    className='py-2 px-6 block hover:bg-gray-200'
                                                    key={i}
                                                >
                                                    {c.title}
                                                </Link>
                                            ))
                                        ) : (
                                            <div className='py-2 px-6 text-gray-500'>No courses found</div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </>
            )
            }
        </div >
    )
}

export default SearchBox
