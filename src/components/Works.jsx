import React from 'react'
import { SectionWrapper } from '../hoc'
import { textVariant, fadeIn } from '../utils/motion'
import { works } from '../constants'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'

const WorksCard = ({ index, title, description, image, onClick, tags }) => {
  return (
<motion.div
  onClick={onClick}
  variants={fadeIn("up", "spring", index * 0.5, 0.75)}
  className="relative bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[460px] cursor-pointer
             transition-all duration-300 ease-in-out
             hover:scale-105 hover:shadow-[0_0_25px_6px_rgba(0,255,200,0.8)]"
  style={{ transform: "translateZ(0)" }} // force hardware acceleration
  whileHover={{ scale: 1.05 }} // ✅ Framer Motion way
>

      {/* GitHub icon top right */}
      <div className="absolute inset-0 z-10 flex justify-end m-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full black-gradient">
          <img
            src={github}
            alt="github"
            className="object-contain w-1/2 h-1/2"
          />
        </div>
      </div>

      {/* Project Image */}
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>

      {/* Text Section */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags?.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done</p>
        <h2 className={`${styles.sectionHeadText}`}>My Works</h2>
      </motion.div>

      <div className='flex flex-col w-full pb-10 mt-5 '>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These are some of the projects I have worked on myself:
        </motion.p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-0 sm:gap-10 lg:gap-20">
        {works.map((work, index) => (
          <WorksCard 
            key={`work-${index}`} 
            index={index} 
            {...work}
            onClick={() => window.open(work.link, "_blank")}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")
