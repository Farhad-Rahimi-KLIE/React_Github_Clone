import React from 'react'
import Navbar from '../Components/Navbar'
import hello from '../images/public.png'
import qatar from '../images/private.png'
const NewRepo = () => {
  return (
    <div>
       <Navbar name="New Repository"/>
      <div className='w-[86rem] h-[656px] bg-black shadow-lg mt-[4rem] fixed hhh'>
        <h1 className='font-bold text-white text-lg ml-36 mt-6'>Create a new repository</h1>
        <span className='ml-36 text-gray-400'>A repository contains all project files, including the revision history. Already have a project repository <br /> <span className='ml-36 text-gray-400'>elsewhere? <a href="/" className='text-blue-700'>Import a repository</a></span>
        </span><br />
        <span className='ml-36 font-bold absolute top-28 text-gray-400'>Required fields are marked with an asterisk (*).</span> <br /><br />
        <span className='ml-36 font-bold text-lg text-white'>Owner*</span>               <span className='ml-[10.7rem] font-bold text-lg text-white'>Repository name *</span><br />
        <span className='bg-slate-600 px-7 py-2 rounded-lg ml-[9rem] absolute top-[11.4rem] text-white'>Farhad-Rahimi-KLIE</span> <input type="text" className='px-10 border py-2 rounded-md bg-black ml-[24rem] text-white'/>
        <h2 className='ml-36 font-bold text-lg text-white absolute top-[15rem]'>Description  (optional)</h2><br />
        <input type="text" className='px-[30rem] rounded-md bg-black border py-3 ml-[9rem] mt-16 text-white'/><br />
        <input type="radio" className='bg-black ml-36 mt-5 cursor-pointer text-white'/>
             <img src={hello} alt="" className='w-4 ml-44 -mt-6'/><h1 className='ml-52 -mt-5 text-white font-bold'>Public</h1>
             <p className='ml-[13rem] mt-1'>Anyone on the internet can see this repository</p><br />
             <input type="radio" className='bg-black ml-36 cursor-pointer'/>
             <img src={qatar} alt="" className='w-4 ml-44 -mt-6'/><h1 className='ml-52 -mt-5 text-white font-bold'>Private</h1>
             <p className='ml-[13rem] mt-1'>You choose who can see and commit to this repository</p><br />
             <button className='bg-green-600 ml-[65rem]   px-10 py-2 rounded-md'>Create repository</button>
      </div>
    </div>
  )
}

export default NewRepo
