import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

export function WorldTable({data}) {


  return (
    <div>
        {data.map((item, id)=>(
            <div key={id} 
              className='border-b-[1px] border-gray-600'>
              <div className='flex gap-10 m-5'>
                <div className='text-[11px] text-red-600'>
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
                <div className=''>
                  <LazyLoadImage src={item.urlToImage} className='w-[350px] h-[150px]' effect="blur"/>
                </div>
              </div>
            </div>
          ))}
    </div>
  )
}