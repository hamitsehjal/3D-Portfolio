import { styles } from '../styles'
import React from 'react'
// import { ComputersCanvas } from '../canvas';
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flew-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'> Hamit</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            I help organizations create efficient and responsive Software Solutions <br className='sm:block hidden' />
            with Technical Expertise and a Customer-Focused Approach
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero