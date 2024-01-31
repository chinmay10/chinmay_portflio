import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
import { j1,j2,j3 } from "../../assets/index";

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 border-b-[1px] border-b-black">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Apple"
            subTitle="Software Engineer Intern | May 2023 - Jan 2024"
            image={j1}
            des="Developed a Django-based web application used by 1000+ engineers across Apple to monitor and analyze hardware testing data in real-time. Improved the average page loading speed by 70% by implementing in-memory Redis cache, reducing and optimizing database queries, and
            utilizing multi-threading for concurrent processing. Worked on several independent backend and front end features, built microservies on Kubernetes for weeekly reporting and data automation."
          />
          <ResumeCard
            title="Fractal Analytics"
            subTitle="Software Engineer Machine Learning | Sept 2020 - Aug 2022"
            image={j2}
            des="Engineered end-to-end AI/ML solutions empowering Ad Intelligence and E-commerce analytics for Fortune 50 clients, like P&G and Rakuten. Worked on building data pipelines, ETL process using Spark Azure Data Factory, developing and deploying ML Models, and building interactive tools and PowerBI dashboards."
          />
          <ResumeCard
            title="Swisslog"
            subTitle="Software Engineering Intern | May 2019 – Aug 2019"
            image={j3}
            des="Developed a vision-based placement error detection system with 3mm accuracy for a robot arm using Instance Segmentation with MASK R-CNN and Depth Sensing."
          />
        </div>
      </div>
    </motion.div>
    </section>
  );
};

export default Experience;
