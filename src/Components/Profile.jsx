import React from 'react'
import jan from '../images/profile.png'
import your from '../images/yourProfile.png'
import pub from '../images/public.png'
import projets from '../images/projects.png'
import orginazition from '../images/organization.png'
import interprize from '../images/interprize.png'
import stars from '../images/stars.png'
import sponsers from '../images/sponsers.png'
import gists from '../images/gists.png'
import './style.css'
const Profile = () => {
    const HandleClose = ()=>{
        console.log('dd')
       let hhhhh =  document.querySelector(".hhh");
       hhhhh.style.display = "none";
      }
  return (
    <div className='w-[20rem] h-[36rem] fixed rounded-md ml-[64rem] mt-[4rem] bg-black hhh z-10'>
            <span className=' text-white absolute left-[19rem] mt-[0.9rem] cursor-pointer' onClick={()=> HandleClose()}>x</span>
        <a href="/overview">
        <h1 className='text-white mt-4 ml-[3rem] text-lg font-bold'>Farhad-Rahimi-KLIE</h1>
        </a>
        <img src={jan} alt="" className='w-10 -mt-8'/>
        <img src={your} alt="" className='w-7 ml-2 mt-3'/>
        <a href="/overview">
        <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>Your Profile</h1><br /><br />
        </a>
        <img src={pub} alt="" className='w-6 ml-2 mt-3'/>
        <a href="/newrepo">
        <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>Your repositories</h1>
        </a>
        <img src={projets} alt="" className='w-7 ml-2 mt-3'/>
        <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>Your Projects</h1>
        <img src={orginazition} alt="" className='w-7 ml-2 mt-3'/>
        <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>Your Organizations</h1>
        <img src={interprize} alt="" className='w-7 ml-2 mt-3'/>
        <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>Your enterprises</h1>
        <img src={stars} alt="" className='w-7 ml-2 mt-3'/>
        <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>Your Stars</h1>
        <img src={sponsers} alt="" className='w-7 ml-2 mt-3'/>
        <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>Your Sponsers</h1>
        <img src={gists} alt="" className='w-7 ml-2 mt-3'/>
        <h1 className='ml-12 -mt-[1.7rem] text-lg font-bold text-white'>Your gists</h1><br /><br /><br />
        <a href="/">
        <h1 className='ml-3 -mt-[rem] text-lg font-bold text-white cursor-pointer'>Sign out</h1>
        </a>
    </div>
  )
}

export default Profile
