import React from "react";

const ValueCard = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-teal-50 to-indigo-100 shadow-lg justify-center h-48 w-64 items-center p-4 gap-4 border rounded-lg">
      <div className="flex flex-col gap-1 justify-start items-center w-full">
        <Icon size={30} className="w-1/4 text-indigo-500 " />
        <h3 className="font-semibold text-xl dark:text-black text-center">
          {title}
        </h3>
      </div>
      <p className="text-slate-500 text-center h-1/2 text-sm">{description}</p>
    </div>
  );
};

export default ValueCard;
