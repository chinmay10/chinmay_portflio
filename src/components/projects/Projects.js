import React from 'react'
import Title from '../layouts/Title'
import { p1,p2,p3,p4,p5,p6 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Meme Recommender"
          des="Developed a meme recommender Django based web-app using BERT that recommends new memes dynamically based on user interaction. Improved app performance by using DynamoDB database and Redis Caching to quickly generate real time feed for seamless user experience."
          src={p1}
          link="https://github.com/sidbav/public-health-app-v2"
        />
        <ProjectsCard
          title="Texas A&M Health Connect App"
          des="Developed a Ruby on Rails based public health app for Texas A&M Health Department for surveying patients for health conditions and
          connecting them to location-based food and health recourses in Texas based on survey scores."
          src={p2}
          link="https://github.com/sidbav/public-health-app-v2"
        />
        <ProjectsCard
          title="Operating System Implementation"
          des="Designed and implemented a Simple Operating System in C and C++ with different functionalities like file system, multi-level page table, thread
          support, Job scheduling, interrupt support, thread-safe blocking disk etc. as a part of a graduate-level Operating System Course project."
          src={p3}
          link="https://github.com/chinmay10/Simple_Operating_System"
        />
        <ProjectsCard
          title="Algorithmic Network Optimization"
          des="Developed solutions for the maximum bandwidth problem in a network using algorithms like modified Dijkstra’s algorithm implemented with
          Max Heap and Kruskal Maximum Spanning Tree Algorithm with Union-Find algorithm from scratch using C++."
          src={p4}
          link="https://github.com/chinmay10/Network_Optimization"
        />
        <ProjectsCard
          title="Image Classification with DenseNet"
          des="Implemented modified DenseNet with multiple dense and transition layers along with using bottleneck and reduction to achieve image classification accuracy of 94.66% on the public CIFAR- 10 test data."
          src={p5}
          link="https://github.com/chinmay10/Image_Classification_DenseNet"
        />
        <ProjectsCard
          title="AI-based Paraphraser Web App"
          des="Developed an AI-based tool to paraphrase input text using Facebook’s BART, a denoising autoencoder for training seq-to-seq models. Designed a web application for the paraphrasing tool utilizing React for the front end, Django for the backend and Docker to deploy the app."
          src={p6}
          link="https://github.com/chinmay10/AI_Paraphraser_Generator"
        />
      </div>
    </section>
  );
}

export default Projects