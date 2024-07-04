import React from 'react'
import pub from '../images/public.png'
import klie from '../images/import.png'
import code from '../images/Codespaces.png'
import newgist from '../images/newgist.png'
import orginazition from '../images/organization.png'
import project from '../images/projects.png'
const Newjan = () => {
  return (
    <div className='w-[15rem] h-[18rem] fixed rounded-md ml-[57.2rem] mt-[4rem] bg-black hhh z-10'>
    <img src={pub} alt="" className='w-6 ml-2 mt-3'/>
    <a href="/newrepo">
    <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>New Repository</h1>
    </a>
    <img src={klie} alt="" className='w-7 ml-2 mt-3'/>
    <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>Import repository</h1>
    <img src={code} alt="" className='w-7 ml-2 mt-3'/>
    <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>New codespace</h1>
    <img src={newgist} alt="" className='w-7 ml-2 mt-3'/>
    <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>New Gist</h1>
    <img src={orginazition} alt="" className='w-7 ml-2 mt-3'/>
    <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>New Organization</h1>
    <img src={project} alt="" className='w-7 ml-2 mt-3'/>
    <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>New Project</h1>
    </div>
  )
}

export default Newjan
