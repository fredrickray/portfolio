import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am Fredrick Anyanwu, i'm on quest to enhance my
        professional skills, capabilities and knowledge in
        an organisation which recognises the value of hard
        work and trusts him with responsibilities and challenges.
        I specialises in the front-end with expertise in Html, CSS,
        Javascript, React, and On the back-end, I thrive in the world
        of Node.js and databases. I have a solid grasp of database design
        and management, with experience in both MySQL and PostgreSQL. Knex.js
        is my go-to when it comes to working with databases. I'm skilled in building
        RESTful APIs, ensuring data flows smoothly between the client and the server.
        Let's work together to bring your ideas to life!
      </motion.p>

      <motion.div variants={textVariant()} className="text-white">
        <a href="https://docs.google.com/document/d/1AI2_WUmKGnhcyDuqt-hYMgENJVgFscm2XRUNFLF3csE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <h2 className={`${styles.heroSubText} cursor-pointer`} style={{ marginTop: "5%" }}>View Resumé <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></h2>
        </a>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
