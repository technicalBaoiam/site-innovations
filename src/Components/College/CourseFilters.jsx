import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const FilterSidebar = ({toggler,isOpen,setCategory,setDifficulty, setPrice}) => {
   // State to toggle the sidebar

  // Function to toggle the sidebar open and close
  const toggleSidebar = () => {
    toggler();
  };
  
  function handleFilterSelect(target){
    // console.log("filter select",target.name)
    if(target.name==="category"){
      setCategory(old=>{
        return target.checked?[...old,target.value]:old.filter(item=>item!==target.value)
      })
    }
    if(target.name==="difficulty"){
      setDifficulty(old=>{
        return target.checked?[...old,target.value]:old.filter(item=>item!==target.value)
      })
    }
    if(target.name==="price"){
      setPrice(old=>{
        return target.checked?[...old,target.value]:old.filter(item=>item!==target.value)
      })
    }
  }
  

  return (
    <div className="relative h-11/12 ">
      {/* Button to open the sidebar */}
      <button
        onClick={toggleSidebar}
        className="flex items-center z-20 p-1 pl-2 h-max shadow-md bg-white lg:hidden  rounded-lg border-2"
      >
        <div>Filters</div> 
        {/* <FaFilter size={16} /> */}
        <MdKeyboardArrowRight className='' size={20}/>
      </button>
 
      {/* Sidebar */}
      <div
        className={`fixed xl:text-lg inset-y-0 left-0 lg:mt-12 z-30 rounded-r-md w-64 xl:w-80 p-4 max-h-[80%] lg:pb-60 my-auto bg-white shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:w-64 lg:static lg:inset-auto`}
      >
        <h2 className="mb-4 text-lg xl:text-2xl font-bold">Filters</h2>
        <div className="space-y-4">


          {/* Example filter options */}



          <div>
            <h3 className="font-semibold">Category</h3>
            <label className="block">
              <input type="checkbox" name="category" value={"Frontend Development"} className="mr-2" onClick={(e)=>{
                // console.log(e.target.value)
                handleFilterSelect(e.target);
              }} /> Frontend Development
            </label>
            <label className="block">
              <input type="checkbox" name="category" value={"Backend Development"} className="mr-2" onClick={(e)=>{
                // console.log(e.target.value)
                handleFilterSelect(e.target);
              }} /> Backend Development
            </label>
            <label className="block">
              <input type="checkbox" name="category" value={"Full Stack Development"} className="mr-2" onClick={(e)=>{
                // console.log(e.target.value)
                handleFilterSelect(e.target);
              }} /> Full Stack Development
            </label>
          </div>
          <div>
            <h3 className="font-semibold">Difficulty Level</h3>
            <label className="block">
              <input type="checkbox" value="Beginner" name='difficulty' className="mr-2"  onClick={(e)=>{
                // console.log(e.target.value)
                handleFilterSelect(e.target);
              }} /> Beginner
            </label>
            <label className="block">
              <input type="checkbox" value="Intermediate" name='difficulty' className="mr-2"  onClick={(e)=>{
                // console.log(e.target.value)
                handleFilterSelect(e.target);
              }} /> Intermediate
            </label>
            <label className="block">
              <input type="checkbox" value="Advanced" name='difficulty' className="mr-2"  onClick={(e)=>{
                // console.log(e.target.value)
                handleFilterSelect(e.target);
              }} /> Advanced  
            </label>
          </div>
          <div>
            <h3 className="font-semibold">Price</h3>
            <label className="block">
              <input type="checkbox" name='price' value="Free" className="mr-2"  onClick={(e)=>{
                 handleFilterSelect(e.target);
              }} /> Free
            </label>
            <label className="block">
              <input type="checkbox" name='price' value="$" className="mr-2"  onClick={(e)=>{
                 handleFilterSelect(e.target);
              }} /> Paid
            </label>
          </div>
          {/* Add more filters as needed */}
        </div>
        {/* Close button for mobile view */}
        <button
          onClick={toggleSidebar}
          className="absolute flex items-center top-4 right-4 z-20 p-2 aspect-square bg-slate-200  rounded-full lg:hidden "
        >
          {/* <FaFilter size={20} /> */}
          <MdKeyboardArrowLeft size={20}/>
        </button>
      </div>
      
      {/* Overlay for closing the sidebar when clicking outside */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-10 bg-black opacity-50"
        ></div>
      )}
    </div>
  );
};

export default FilterSidebar;
