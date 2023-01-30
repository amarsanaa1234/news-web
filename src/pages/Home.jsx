import React from 'react'
import { HeaderNews } from '../components/HeaderNews'

export function Home({data}) {

  return (
    <div className='mr-20 ml-20 mt-12 gap-16'>
        <HeaderNews data={data}/>
        <div className='flex mr-20 ml-20 mt-12 gap-16'>
      <div className='w-[75%] flex flex-wrap gap-[1.5rem]'>
        {data.map((item, id)=>(
          <a key={id} href={item.url} target="_blank">
          <div className='border-b-[1px] border-black'>
            <div className='flex mb-8'>
              <div className=' mx-4 font-[700] text-[1.375rem] leading-[1.15em]'>
                <p>{item.title}</p>
                <span className='text-gray-600 text-[0.875rem] leading-[1.1875rem] space-x-[0.1px]'>{item.content}</span>
              </div>
              <div>
                <img src={item.urlToImage} />
                <div className='flex justify-end text-[0.76rem] text-[#727272]  leading-[1.2em] mt-2'>
                  <span>{item.publishedAt}</span>
                </div>
              </div>
            </div>
          </div>
          </a>
        ))}
      </div>
      <div className='w-[25%] h-full'>
        {data.map((item, id)=>(
          <div key={id} className='border-b-[1px] border-gray-300'>
            <div className='my-6'>
              <a href={item.url} target="_blank" className='text-[1.375rem] font-[700] hover:text-slate-600 leading-[1.2em]'>{item.title}</a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

