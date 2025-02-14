import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50'/>
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> company to the <span className='text-purple'>next level</span>?
            </h1>
            {/* <p className='text-white-200 md:mt-10 text-center'>Reach out to me today</p> */}
            <a href="mailto:sakshambirlauni@gmail.com">
                <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Saksham Singh Birla</p>
            </div>
            <div className='flex items-center md:gap-3 gap-6 mt-5'>
                    {socialMedia.map((profile) =>(
                        <a
                            key={profile.id}
                            href={profile.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border border-black-300'
                        >
                            <img src={profile.img} alt="" width={20} height={20} />
                        </a>
                    ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer