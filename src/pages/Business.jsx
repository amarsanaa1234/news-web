
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { HeaderNews } from '../components/HeaderNews';

export function Business({data}) {
    
  const [check, setCheck] = useState(false);

  return (
    <div className='mr-20 ml-20 mt-12 w-[90%] h-full'>
      
      <HeaderNews data={data}/>

      <div className=''>
        <div className='flex'>
          <Link to="/business/worldNews" onClick={()=>{setCheck(false)}} className={check ? 'world_btn' : 'border-x-[1px] border-t-[1px] border-black world_btn'}>
            <p className='font-bold text-[18px]'>Latest</p>
          </Link>
          <Link to="/business/search" onClick={()=>{setCheck(true)}} className={check ? 'border-x-[1px] border-t-[1px] border-black world_btn' : 'world_btn'}>
            <p className='font-bold text-[18px]'>Search</p>
          </Link>
        </div>
        <div className='border-t-[1px] border-black flex flex-col'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}