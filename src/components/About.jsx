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
          <h2 className={`${styles.heroSubText} cursor-pointer`} style={{ marginTop: "5%" }}>View Resumé <svg width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Icon/Button-arrow" transform="translate(-5.000000, -5.000000)"><g id="arrow-group-right-link" transform="translate(6.000000, 6.000000)"><circle id="Oval" stroke="#EFE3E3" cx="18" cy="18" r="18"></circle><g id="Group-2" transform="translate(11.000000, 13.000000)" stroke="#EFE3E3" stroke-width="2"><polyline id="Path-2" stroke-linecap="square" points="8 0 13 5 8 10"></polyline><path d="M0,5 L13,5" id="Path-3"></path></g></g></g></g></svg></h2>
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
