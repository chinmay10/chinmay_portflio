import React, { useState } from 'react';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaDatabase, FaCode, FaCogs, FaBrain, FaFileCode } from 'react-icons/fa';
import { DiDjango, DiJavascript1, DiRuby, DiMongodb, DiMysql, DiPostgresql, DiHtml5, DiCss3, DiGit, DiLinux } from 'react-icons/di';
import { AiOutlineAntDesign, AiOutlineCloud, AiOutlineApi } from 'react-icons/ai';
import Title from '../layouts/Title'

const skillsData = {
  programmingLanguages: [
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <FaFileCode /> },
    { name: 'JavaScript', icon: <DiJavascript1 /> },
    { name: 'Objective-C', icon: <FaCode /> },
    { name: 'Ruby on Rails', icon: <DiRuby /> },
    { name: 'R', icon: <FaBrain /> },
  ],
  databases: [
    { name: 'MySQL', icon: <DiMysql /> },
    { name: 'PostgreSQL', icon: <DiPostgresql /> },
    { name: 'Dynamo DB', icon: <AiOutlineApi /> },
    { name: 'Microsoft SQL Server', icon: <FaDatabase /> },
    { name: 'MongoDB', icon: <DiMongodb /> },
  ],
  softwareTechStack: [
    { name: 'Django', icon: <DiDjango /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Kubernetes', icon: <AiOutlineAntDesign /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'XCode', icon: <FaCode /> },
    { name: 'Linux', icon: <DiLinux /> },
    { name: 'Git', icon: <DiGit /> },
    { name: 'HTML', icon: <DiHtml5 /> },
    { name: 'CSS', icon: <DiCss3 /> },
    { name: 'Jenkins', icon: <AiOutlineCloud /> },
    { name: 'AWS (EC2, Cloud9, S3)', icon: <FaAws /> },
  ],
  mlDataTechStack: [
    { name: 'PyTorch', icon: <FaBrain /> },
    { name: 'Apache Spark', icon: <AiOutlineAntDesign /> },
    { name: 'TensorFlow', icon: <FaBrain /> },
    { name: 'Scikit-learn', icon: <FaBrain /> },
    { name: 'Azure (Data Factory, Databricks)', icon: <AiOutlineCloud /> },
    { name: 'OpenCV', icon: <AiOutlineApi /> },
    { name: 'Airflow', icon: <AiOutlineCloud /> },
    { name: 'Hadoop', icon: <AiOutlineAntDesign /> },
  ],
};

const Skills = () => {
  
  const [activeTab, setActiveTab] = useState('programmingLanguages');

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#ffffff',
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #000',
  };

  const tabsStyle = {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  };

  const tabStyle = {
    padding: '10px',
    cursor: 'pointer',
    color: '#ff4757',
    fontSize: '20px',
    fontWeight: 'bold',
    borderBottom: '3px solid transparent',
  };

  const activeTabStyle = {
    ...tabStyle,
    color: '#ffffff',
    borderBottom: '3px solid #ff4757',
  };

  const skillsRowStyle = {
    display: 'flex',
    flexDirection: 'row', // Align skill items in a row
    justifyContent: 'space-around', // Distribute space around items evenly
    flexWrap: 'wrap', // Wrap items to the next line if not enough space
    width: '100%', // Use the full width
  };
  
  const skillItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    fontSize: '20px',
  };
  
  const renderSkills = (skills) => {
    return (
      <div style={skillsRowStyle}>
        {skills.map((skill, index) => (
          <div key={index} style={skillItemStyle}>
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="experience" className="w-full py-20 border-b-[1px] border-b-black">
    <div>
      <div className="flex justify-center items-center text-center">
        <Title
          des="Skills"
        />
      </div>
      
    
      <div style={tabsStyle}>
        <div
          style={activeTab === 'programmingLanguages' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('programmingLanguages')}
        >
          Programming Languages
        </div>
        <div
          style={activeTab === 'databases' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('databases')}
        >
          Databases
        </div>
        <div
          style={activeTab === 'softwareTechStack' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('softwareTechStack')}
        >
          Software Tech Stack
        </div>
        <div
          style={activeTab === 'mlDataTechStack' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('mlDataTechStack')}
        >
          ML/Data Tech Stack
        </div>
      </div>
      <div>{renderSkills(skillsData[activeTab])}</div>
    </div>
    </section>
  );
  
};

export default Skills;
