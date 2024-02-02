import React,{useState} from 'react'
import Title from '../layouts/Title';
import { contactImg } from "../../assets/index";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
        <div className="h-auto p-2"> 
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Contact</h2>
          </div>
          <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gapm-10">
          <div className="flex flex-col lg:flex-row w-full group gap-8">
            <img
              className="w-64 h-64 object-cover rounded-lg mb-2"
              src={contactImg}
              alt="contactImg"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-white">Chinmay Ajit Sawkar</h3>
              <p className="text-lg font-normal text-gray-400">
                Software Engineer
              </p>
              <p className="text-base text-gray-400 tracking-wide">
                I am looking for full time Software Engineer, ML Engineer or Data Scientist roles starting May 2024. I would love to connect and discuss if you have any opportunities.

              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Phone: <span className="text-lightText">+979-344-1586</span>
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Email: <span className="text-lightText">chinmay997@tamu.edu</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact