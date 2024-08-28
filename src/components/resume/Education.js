import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech In Production & Industrial Engineering"
            subTitle="IIT Roorkee (2020 - 2024)"
            result="7.16/10"
            des="Gained a strong foundation in engineering principles, problem-solving, and analytical thinking, preparing me to tackle complex challenges in technology and software development."
          />
          <ResumeCard
            title="12th"
            subTitle="Rao Man Singh (2018-2019)"
            result="87.2%"
            des="Completed my higher secondary education, building a strong academic foundation that prepared me for higher studies."
          />
          <ResumeCard
            title="10th"
            subTitle="Integral Model School (2017-2018)"
            result="9/10"
            des="Completed my secondary education, laying the groundwork for advanced studies and skill development."
          />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
}

export default Education