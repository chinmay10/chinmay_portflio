import React from 'react'

const ResumeCard = ({title,subTitle,image,des}) => {
  return (
    <div className="flex flex-col lg:flex-row w-full group">
      <div className="flex-initial lg:w-10 h-auto lg:h-full py-4 lg:py-0 flex justify-center lg:justify-start items-center lg:items-start">
        <div className="lg:w-10 h-6 relative">
          <span className="absolute w-5 h-5 rounded-full -top-2 -left-2 lg:-left-3 flex justify-center items-center bg-black bg-opacity-60">
            <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
          </span>
        </div>
      </div>
      <div className="flex-grow bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lg:px-10 flex flex-col justify-center gap-6 lg:gap-10 shadow-shadowOne">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-red duration-300">
              {title}
            </h3>
            <p className="text-s mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <img src={image} alt="logo of card" className="w-24 h-24 lg:w-32 lg:h-32 object-contain p-2 bg-white rounded-lg flex justify-center items-center text-sm font-medium" />
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard
