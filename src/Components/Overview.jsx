import React from 'react'
import Navbar from './Navbar'
import overview from '../images/overview.png'
import ggg from '../images/public.png'
import project from '../images/projects.png'
import uuu from '../images/packegs.png'
import stars from '../images/stars.png'
import profile from '../images/profile.png'
import follower from '../images/followers.png'
import red from '../images/red.jpeg'
import fork from '../images/fork.png'
import purple from '../images/purple.jpeg'
import yellow from '../images/yellow.png'
import './style.css'
const Overview = () => {
  return (
    <div>
      <Navbar name="Farhad Rahimi KLIE"/>
      <div className=' absolute top-[4rem] w-[85.4rem] h-[2rem] flex flex-row bg-black'>
        <a href="/overview">
      <span className='absolute left-[3.6rem] mt-1 text-white font-bold cursor-pointer hover:underline'>Overview</span>
        <img src={overview} alt="" className='w-9 absolute left-4'/>
        </a>
        <a href="/newrepo">
        <span className='absolute left-[11rem] text-white font-bold cursor-pointer hover:underline'>Repositories</span>
        <img src={ggg} alt="" className='w-5 absolute left-[9.2rem]'/>
        </a>
        <span className='absolute left-[20rem] text-white font-bold cursor-pointer hover:underline'>Projects</span>
        <img src={project} alt="" className='w-8 absolute left-[17.6rem]'/>
        <span className='absolute left-[27rem] text-white font-bold cursor-pointer hover:underline'>Packages</span>
        <img src={uuu} alt="" className='w-8 absolute left-[24.4rem]'/>
        <span className='absolute left-[34.3rem] text-white font-bold cursor-pointer hover:underline'>Stars</span>
        <img src={stars} alt="" className='w-7 absolute -mt-1 left-[32rem]'/>
      </div>
      <div className='bg-black px-[20rem] py-[19.6rem]'>
          <img src={profile} alt="" className='w-[12rem] -ml-[20rem] -mt-[13rem]'/>
          <h1 className='-ml-[19rem] text-lg font-bold text-white'>FarhadRahimiKLIE</h1><br />
          <span className='py-[1rem] px-[8rem] rounded-md text-lg font-bold jjj -ml-[19rem] mt-[9rem] cursor-pointer'>Follow</span>
          <span className='-ml-[17rem] absolute top-[24.5rem] text-white cursor-pointer'>12.9k followers</span>
          <img src={follower} alt="" className='w-5 -ml-[19rem] mt-[2rem]'/>
          <span className='-ml-[9rem] absolute bottom-[13.6rem] text-white cursor-pointer'>0 following</span>
      </div>
      <h1 className='absolute top-[7rem] ml-[21rem] text-lg font-bold text-white'>Popular repositories</h1>
      <div className='overflow-y-scroll'>
      <div className='w-[28rem] h-[14rem] bg-black border rounded-md absolute top-[10rem] left-[21rem]'>
        <h1 className='text-lg font-bold text-blue-600 ml-4'>Sigma web-Dev</h1>
        <span className='py-0.5 text-white px-2 rounded-md bg-black ml-[23rem]'>Public</span>
        <p className='ml-4 text-yellow-100'>Source Code for Sigma web Development Course</p>
        <img src={red} alt="" className='w-6 mt-[6rem] ml-4'/> <span className='ml-11 absolute top-[10.8rem] text-white'>HTML</span>
        <img src={stars} alt="" className='w-6 ml-[8rem] -mt-6'/> <span className='ml-[10rem] absolute top-[10.8rem] text-white'>1.5k</span>
        <img src={fork} alt="" className='w-6 ml-[13rem] -mt-6'/> <span className='ml-[15rem] absolute top-[10.8rem] text-white'>455</span>
      </div>
      <div className='w-[28rem] h-[14rem] bg-black border rounded-md absolute top-[25rem] left-[21rem]'>
        <h1 className='text-lg font-bold text-blue-600 ml-4'>iNotebook-React</h1>
        <span className='py-0.5 text-white px-2 rounded-md bg-black ml-[23rem]'>Public</span>
        <p className='ml-4 text-yellow-100'>Source Code for Sigma web Development Course</p>
        <img src={purple} alt="" className='w-6 mt-[6rem] ml-4'/> <span className='ml-11 absolute top-[10.8rem] text-white'>CSS</span>
        <img src={stars} alt="" className='w-6 ml-[8rem] -mt-6'/> <span className='ml-[10rem] absolute top-[10.8rem] text-white'>2.1k</span>
        <img src={fork} alt="" className='w-6 ml-[13rem] -mt-6'/> <span className='ml-[15rem] absolute top-[10.8rem] text-white'>115</span>
      </div>
      <div className='w-[28rem] h-[14rem] bg-black border rounded-md absolute top-[10rem] left-[54rem]'>
        <h1 className='text-lg font-bold text-blue-600 ml-4'>DemoRepository</h1>
        <span className='py-0.5 text-white px-2 rounded-md bg-black ml-[23rem]'>Public</span>
        <p className='ml-4 text-yellow-100'>Source Code for Sigma web Development Course</p>
        <img src={yellow} alt="" className='w-6 mt-[6rem] ml-4'/> <span className='ml-11 absolute top-[10.8rem] text-white'>JavaScript</span>
        <img src={stars} alt="" className='w-6 ml-[8rem] -mt-6'/> <span className='ml-[10rem] absolute top-[10.8rem] text-white'>22</span>
        <img src={fork} alt="" className='w-6 ml-[13rem] -mt-6'/> <span className='ml-[15rem] absolute top-[10.8rem] text-white'>444</span>
      </div>
      <div className='w-[28rem] h-[14rem] bg-black border rounded-md absolute top-[25rem] left-[54rem]'>
        <h1 className='text-lg font-bold text-blue-600 ml-4'>DanceWebsite</h1>
        <span className='py-0.5 text-white px-2 rounded-md bg-black ml-[23rem]'>Public</span>
        <p className='ml-4 text-yellow-100'>Source Code for Sigma web Development Course</p>
        <img src={red} alt="" className='w-6 mt-[6rem] ml-4'/> <span className='ml-11 absolute top-[10.8rem] text-white'>Python</span>
        <img src={stars} alt="" className='w-6 ml-[8rem] -mt-6'/> <span className='ml-[10rem] absolute top-[10.8rem] text-white'>5.5k</span>
        <img src={fork} alt="" className='w-6 ml-[13rem] -mt-6'/> <span className='ml-[15rem] absolute top-[10.8rem] text-white'>99</span>
      </div>
      </div>
    </div>
  )
}

export default Overview
