import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import { e1,e2} from "../../assets/index";

const Education = () => {
  return (
    <section id="education" className="w-full py-20 border-b-[1px] border-b-black">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Texas A&M University, College Station"
            subTitle="Masters in Computer Science, Aug 2022 - May 2024 | GPA: 4.0/4.0"
            image={e1}
            des="Relevant Coursework: Software Engineering | Analysis of Algorithms | Distributed & Cloud Computing | Deep Learning | Information Retrieval | Operating Systems
            Network Security | Artificial Intelligence | Internet Protocol Modelling"
          />
          <ResumeCard
            title="Indian Institute of Technology, Kharagpur"
            subTitle="Integrated (M.Tech + B.Tech) in Manufacturing Science and Industrial Engineering (Aug 2015 - July 2020) | GPA: 8.1/10"
            image={e2}
            des="Relevant Coursework:  Data Structures and Algorithms | Soft Computing | Advanced Decision Modelling 
            | Applied Multivariate Statistical Modelling | Logistics and Supply Chain Management 
            | Data Analytics | Game Theory"
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
    </section>
  );
}

export default Education