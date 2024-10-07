import React from 'react'
import { Link } from 'react-router-dom';

const ScrollableList = ({ array, linkClickHandler }) => {
    return (
        <div className=" w-full py-3 text-gray-600 dark:text-gray-400 bg-white dark:bg-slate-950 dark:border-white border-[1px] rounded-md  border-black/20  text-sm p-1 shadow-lg z-50 h-64 md:h-fit overflow-auto flex flex-col max-h-56 divide-y gap-2">
            {array.map((course, i) => {
                return (
                    <Link
                        onClick={linkClickHandler}
                        key={i}
                        to={`/course/${course.title}/${course.id}`}
                        className="px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200"
                    >
                        {course.title}
                    </Link>
                );
            })}
        </div>
    )
}

export default ScrollableList