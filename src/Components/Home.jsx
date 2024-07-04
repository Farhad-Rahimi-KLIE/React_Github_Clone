import React from 'react'
import Navbar from './Navbar'
import New from '../images/new.jpg'
import profile from '../images/profile.png'
import filter from '../images/filter.jpg'
import hello from '../images/public.png'
import qatar from '../images/private.png';
const Home = () => {
  return (
    <div>
      <Navbar name="Dashboard"/>
      <div className='w-96 h-[656px] bg-black shadow-lg mt-[4rem] fixed hhh'>
        <a href="/newrepo">
      <img src={New} alt="" className='w-20 ml-[18rem] mt-[2rem] cursor-pointer'/>
      </a>
        <h1 className='-mt-[2rem] ml-3 text-white font-bold'>Top Repositories</h1>
    <input type="text" placeholder='Find a repository...' className='w-[22rem] mt-4 ml-4  border rounded-sm h-[2rem] bg-black font-bold' />
            <div className="flex  cursor-pointer">
                <img src={profile} alt="" className="w-6 h-6 rounded-full ml-4 mt-6"  />
                <p className="text-white font-bold mt-6 ml-4">Farhad-Rahimi-KLIE/javascript_Begginers</p>
            </div>
            <div className="flex  cursor-pointer">
                <img src={profile} alt="" className="w-6 h-6 rounded-full ml-4 mt-6"  />
                <p className="text-white font-bold mt-6 ml-4">Farhad-Rahimi-KLIE/Python_Begginers</p>
            </div>
            <div className="flex  cursor-pointer">
                <img src={profile} alt="" className="w-6 h-6 rounded-full ml-4 mt-6"  />
                <p className="text-white font-bold mt-6 ml-4">Farhad-Rahimi-KLIE/Php_Begginers</p>
            </div>
            <div className="flex  cursor-pointer">
                <img src={profile} alt="" className="w-6 h-6 rounded-full ml-4 mt-6"  />
                <p className="text-white font-bold mt-6 ml-4">Farhad-Rahimi-KLIE/Tailwend_Begginers</p>
            </div>
            <div className="flex  cursor-pointer">
                <img src={profile} alt="" className="w-6 h-6 rounded-full ml-4 mt-6"  />
                <p className="text-white font-bold mt-6 ml-4">Farhad-Rahimi-KLIE/Sass_Begginers</p>
            </div>
            <h1 className='ml-5 mt-2 text-white font-bold'>Recent activity</h1>
            <div className='w-[22rem] h-[8rem] border rounded-md m-auto mt-3'>
             <span className='ml-5'>When you take actions across Github, we'll <br /></span>
             <span className='ml-5'>provide links to that activity here.</span>
            </div>
     </div>
     <div className='w-[62rem] h-[37rem] ml-[24rem] mt-[4.1rem] bg-black fixed'>
      <img src={filter} alt="" className='w-[8rem] ml-[52rem] mt-4 cursor-pointer'/>
      <a href="/overflow" className=' text-blue-800 ml-[42rem] absolute top-9 text-lg'>Send feedback</a>
      <h1 className=' ml-3 font-bold -mt-6 text-white'>Home</h1>
      <div className='w-[60rem] h-[9rem] border rounded-sm m-auto mt-3'>
      <span className=' text-white absolute left-[59rem] mt-[0.5rem] cursor-pointer'>x</span>
        <h1 className='text-white font-bold ml-3 mt-3 mb-3'>Updates to your homepage feed</h1>
             <span className='ml-5 mb-7'>When you take actions across Github, we'll Lorem ipsum dolor sit. Lorem ipsum dolor sit amet. Lorem, ipsum dolor. <br /></span>
             <span className='ml-5'>provide links to that activity here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ratione?gflggk ;lggl</span><br />
             <a href="/overflow" className='ml-5 text-blue-800'>Learn more</a>
            </div>
            <div className='w-[60rem] h-[21rem] border rounded-sm m-auto mt-3'>
        <h1 className='text-white font-bold ml-3 mt-2 mb-1'>Start a new repository</h1>
             <span className='ml-5 mb-7'>A repository contains all of your project's files, revision history, and collaborator discussion.<br /></span>
             <label htmlFor="" className='ml-5 mt-3 text-white'>Farhad-Rahimi-KLIE / <input type="text" placeholder='name your new repository...' className='ml-3 w-[35rem] h-[2rem] border rounded-md bg-black' /></label><br />
             <input type="radio" className='bg-black ml-5 mt-3'/>
             <img src={hello} alt="" className='w-4 ml-12 -mt-6'/><h1 className='ml-20 -mt-5 text-white font-bold'>Public</h1>
             <p className='ml-[5rem] mt-1'>Anyone on the internet can see this repository</p><br />
             <input type="radio" className='bg-black ml-5'/>
             <img src={qatar} alt="" className='w-4 ml-12 -mt-6'/><h1 className='ml-20 -mt-5 text-white font-bold'>Private</h1>
             <p className='ml-[5rem] mt-1'>You choose who can see and commit to this repository</p><br />
             <button className='bg-green-600 ml-5 px-3 py-2 rounded-md'>Create a new repository</button>
            </div>
     </div>
    </div>
  )
}

export default Home
