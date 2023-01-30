import React, { useState } from 'react'
import { Link, Outlet} from 'react-router-dom'
import { HeaderNews } from '../components/HeaderNews'


export function World({data , FetchData}) {

  const [check, setCheck] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const Timer = () =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  }

  return (
    <div className='mr-20 ml-20 mt-12 w-[90%] h-full'>
      <h1 className='text-[60px] font-bold'>world news</h1>
      <ul className='flex border-t-[1px] border-gray-300 mb-20'>
        <li className='px-2 border-r-[1px] border-gray-300'>
          <Link to="/world/australia" onClick={()=>{FetchData('top-headlines?country=au'); Timer()}}>Australia</Link>
          </li>
        <li className='px-2 border-r-[1px] border-gray-300'>
          <Link to="/world/canada" onClick={()=>{FetchData('top-headlines?country=ca'); Timer()}}>Canada</Link>
          </li>
        <li className='px-2 border-r-[1px] border-gray-300'>
          <Link to="/world/japan" onClick={()=>{FetchData('top-headlines?country=jp'); Timer()}}>Japan</Link>
          </li>
        <li className='px-2 border-r-[1px] border-gray-300'>
          <Link to="/world/switzerland" onClick={()=>{FetchData('top-headlines?country=ch'); Timer()}}>Switzerland</Link>
          </li>
        <li className='px-2'>
          <Link to="/world/us" onClick={()=>{FetchData('top-headlines?country=us'); Timer()}}>United States</Link>
        </li>
      </ul>
      
      {
        isLoading 
        ? <div>
          <h1>Loading ...</h1>
        </div>  
        :  
        <>
          <HeaderNews data={data}/>

          <div className=''>
            <div className='flex'>
              <Link to="/world/worldNews" onClick={()=>{setCheck(false)}} className={check ? 'world_btn' : 'border-x-[1px] border-t-[1px] border-black world_btn'}>
                <p className='font-bold text-[18px]'>Latest</p>
              </Link>
              <Link to="/world/search" onClick={()=>{setCheck(true)}} className={check ? 'border-x-[1px] border-t-[1px] border-black world_btn' : 'world_btn'}>
                <p className='font-bold text-[18px]'>Search</p>
              </Link>
            </div>
            <div className='border-t-[1px] border-black flex flex-col'>
              <Outlet/>
            </div>
          </div>
        </>
      }
    </div>
  )
}

