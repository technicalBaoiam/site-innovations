import React, { useState, useRef, useEffect } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { School } from "../../Data";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaBullseye } from "react-icons/fa6";
import { useSelector } from "react-redux";

const SearchBox = ({ courses }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const data = useSelector((state) => state.courses.allCourses);
  // const suggession = data[0].courses
  //   .concate(data[1].courses)
  //   .concate(data[2].courses);
  const inputRef = useRef();

  const staticSuggestions = [
    { id: 2, title: "Creative Writing" },
    { id: 1, title: "Public Speaking" },
    { id: 3, title: "Arts & Crafts (DIY)" },
    { id: 30, title: "Digital Marketing" },
    { id: 29, title: "Web Development" },
    { id: 9, title: "Entrepreneurship and Innovation" },
    { id: 14, title: "Data Analytics" },
    { id: 37, title: "Machine Learning with AI" },
  ];

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`https://api.baoiam.com/api/courses/?search=${searchQuery}`)
        .then((response) => {
          setSearchResults(response.data);
          // console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // console.log(searchResults);

  // Detect window resize and toggle between mobile/desktop behavior
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change behavior for screens smaller than 768px
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // useEffect(() => {
  //   if (searchQuery) {
  //     setIsExpanded(false);
  //   }
  // }, [searchQuery]);
  useEffect(() => {
    console.log(isExpanded);
  }, [isExpanded]);

  const handleLinkClick = (course) => {
    // () => {
    console.log("course.title");
    setIsExpanded(false);
    setSearchQuery("");
    // }
  };

  return (
    <div className="relative">
      {/* <div className={isExpanded?"fixed w-full h-full inset-0 bottom-0 bg-black/40":"hidden"} onClick={()=>setIsExpanded(false)}></div> */}
      <div className="hidden md:flex items-center border focus:outline focus:outline-orange-500 bg-slate-100 dark:bg-slate-200 dark:text-white border-slate-400 rounded-3xl w-40">
        <input
          type="text"
          className="w-32 bg-transparent py-2 pl-3 text-slate-500 dark:text-white text-xs outline-none"
          placeholder="Search..."
          ref={inputRef}
          value={searchQuery}
          onChange={handleSearchChange}
          // onFocus={() => setIsExpanded(true)}
        />
        <RiSearch2Line size={16} className="text-slate-500" />
      </div>

      {/* Show Suggestions when the input is focused and no query is entered */}

      {isExpanded && !searchQuery && (
        <div className="absolute top-7 hidden md:block -right-2 bg-white text-black w-80 z-30 max-h-80 overflow-auto shadow-lg rounded-md mt-2">
          {staticSuggestions.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.title}/${course.id}`}
              className="py-2 px-4 block hover:bg-gray-200"
              onClick={() => handleLinkClick(course)}
            >
              {course.title}
            </Link>
          ))}
        </div>
      )}

      {searchQuery && (
        <div className="absolute top-7 -right-2 bg-white text-black w-80 z-30 max-h-80 overflow-auto shadow-lg rounded-md mt-2">
          {searchResults.length > 0 ? (
            searchResults.map((c, i) => (
              <Link
                to={`/course/${c.title}/${c.id}`}
                onClick={() => {
                  setIsExpanded(false);
                  setSearchQuery("");
                }} // Collapse search box when a result is clicked
                className="py-2 px-4 block hover:bg-gray-200"
                key={i}
              >
                {c.title}
              </Link>
            ))
          ) : (
            <div className="py-2 px-4 text-gray-500">No courses found</div>
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
            className="cursor-pointer"
          />

          {/* Full-screen pop-up modal for small screens */}
          {isMobilePopupOpen && (
            <div className="fixed inset-0 z-50 bg-slate-200/50 backdrop-blur-sm p-4 w-[100vw] h-[100vh]">
              <div className="relative flex flex-col items-start justify-start w-full h-full">
                {/* Close Button */}
                <RxCross2
                  onClick={() => setIsMobilePopupOpen(false)}
                  className="text-black absolute top-2 right-2 cursor-pointer"
                  size={25}
                />

                {/* Search Input Field */}
                <div className="bg-white relative  text-black flex items-center w-full px-6 py-1 border border-black rounded-3xl mt-16">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search courses"
                    className="py-2 focus:outline-none w-full"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => setIsExpanded(true)}
                  />
                  <RiSearch2Line size={20} />
                </div>

                {isExpanded && !searchQuery && (
                  <div className="bg-white text-black w-full max-h-80 overflow-auto rounded-md py-4 mt-4">
                    {staticSuggestions.map((course) => (
                      <Link
                        key={course.id}
                        to={`/course/${course.title}/${course.id}`}
                        className="py-2 px-6 block hover:bg-gray-200"
                        onClick={() => {
                          setIsExpanded(false);
                          setSearchQuery("");
                          setIsMobilePopupOpen(false);
                        }}
                      >
                        {course.title}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Results Box */}
                {searchQuery && (
                  <div className="bg-white text-black w-full max-h-80 overflow-auto rounded-md py-4 mt-4">
                    {searchResults.length > 0 ? (
                      searchResults.map((c, i) => (
                        <Link
                          to={`/course/${c.title}/${c.id}`}
                          onClick={() => {
                            setIsMobilePopupOpen(false);
                            setSearchQuery("");
                          }} // Close the pop-up when a result is clicked
                          className="py-2 px-6 block hover:bg-gray-200"
                          key={i}
                        >
                          {c.title}
                        </Link>
                      ))
                    ) : (
                      <div className="py-2 px-6 text-gray-500">
                        No courses found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchBox;
