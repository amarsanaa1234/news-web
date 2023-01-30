import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'

export function Search({data}) {

    const [input, setInput] = useState('')

  return (
    <div>
        <div className='flex w-60 h-10 justify-center items-center gap-4'>
            <FaSearch/>
            <input 
                type="text" 
                placeholder='Search'
                className='shadow-none outline-none' 
                onChange={e => {setInput(e.target.value)}}/>
        </div>
        {data.filter((item)=>item.title.toLowerCase().includes(input)
        ).map((item, id)=>(
          <div key={id} className='border-b-[1px] border-gray-600'>
            <div className='flex gap-10 m-5'>
              <div className='text-[11px] text-gray-500'>
                <p>{item.publishedAt}</p>
              </div>
              <a href={item.url} target='_blank' className='w-[60%]'>
                <div className='text-[23px] leading-[25px]'>
                <h1>{item.title}</h1>
                </div>
                <div className='text-[#363636] text-[14px] leading-[20px] mt-4'>
                  <p>{item.content}</p>
                </div>
                <div className='text-[12px] text-gray-600 mt-3'>
                  <p>{item.author}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
    </div>
  )
}

