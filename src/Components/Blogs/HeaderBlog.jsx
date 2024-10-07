import { useEffect } from "react";
import bhead from "../../assets/Blogs/bhead.jpg";
import { toast } from "react-toastify";
import gsap from "gsap";

export const HeaderBlog = ({
  searchQuery,
  setSearchQuery,
  searchResults,
  setSearchResults,
  blog_list,
}) => {
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      toast.error("Please write something in input field");
      return;
    }

    const filteredBlogs = blog_list.filter(
      (item) =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredBlogs.length === 0) {
      toast.info("No matching blogs found.");
    }

    setSearchResults(filteredBlogs);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);

    // Reset results if input is cleared
    if (e.target.value.trim() === "") {
      setSearchResults(blog_list);
      // console.log("trim work");
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".b1",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power1.out",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <>
      <div className='relative font-[sans-serif]  before:absolute before:w-full before:h-full before:inset-0 before:bg-black/70 before:z-10'>
        <img
          src={bhead}
          alt='Banner Image'
          className='absolute inset-0 w-full h-full object-cover object-center '
        />
        <div className='min-h-[400px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 py-12'>
          <div className='max-w-3xl mx-auto text-center'>
            <h3 className='b1 text-white md:text-5xl text-4xl font-bold'>
              Latest Insights and Updates on BAOIAM Blog
            </h3>
            <p className='b1 text-gray-300 text-sm mt-6'>
              Explore our articles, news, and tips to stay informed and inspired
            </p>

            <div className='b1 max-w-lg mx-auto bg-gray-100 flex p-1 rounded-full text-left mt-12 border focus-within:border-gray-700'>
              <input
                type='text'
                placeholder='Search for articles...'
                className='w-full outline-none bg-transparent text-sm text-gray-800 px-4 py-3'
                value={searchQuery}
                onChange={handleInputChange}
              />

              <button
                type='button'
                onClick={handleSearch}
                className='bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all text-white tracking-wide text-sm rounded-full px-6 py-3'
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
