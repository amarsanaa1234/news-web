import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

export function HeaderNews({data}) {
  return (
    <div>
        <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6 border-b-[1px] border-gray-300">
                {data.slice(3, 4).map((item, id)=>(
                    <a href={item.url} key={id} className='flex mb-5'>
                        <div className=''>
                            <p className='font-bold text-[28px]'>{item.title}</p>
                            <span className='text-gray-700 text-[18px]'>{item.content}</span>
                            <p className='text-red-600 text-[10px]'>{item.publishedAt}</p>
                        </div>
                        <div>
                            <LazyLoadImage src={item.urlToImage} className='w-[130rem]' effect="blur"/>
                        </div>
                    </a>
                ))}
            </div>

            <div className="col-start-1 row-span-6 col-end-3">
                {data.slice(12, 14).map((item, id)=>(
                    <a href={item.url} key={id} className=' border-b-[1px] border-gray-500'>
                        <div className='text-[20px] m-5 font-bold'>
                            <p>{item.title}</p>
                            <LazyLoadImage src={item.urlToImage} alt="" effect='blur'/>
                        </div>
                    </a>
                ))}
            </div>

            <div className="col-end-5 col-span-2">
                {data.slice(4, 5).map((item, id)=>(
                    <a href={item.url} key={id}>
                        <div className='text-[20px] m-5 font-bold'>
                        <p>{item.title}
                            <p className='text-[12px] text-gray-600'>
                            {item.publishedAt}
                            </p>
                        </p>
                            <LazyLoadImage src={item.urlToImage} alt="" />
                        </div>
                    </a>
                ))}
            </div>

            <div className="col-end-7 col-span-2">
                {data.slice(18, 19).map((item, id)=>(
                    <a href={item.url} key={id}>
                        <div className='text-[20px] m-5 font-bold'>
                        <p>{item.title}
                            <p className='text-[12px] text-gray-600'>
                            {item.publishedAt}
                            </p>
                        </p>
                            <LazyLoadImage src={item.urlToImage} alt="" />
                        </div>
                    </a>
                    ))}
            </div>

            <div className="col-start-3 col-end-7 border-t-[1px] border-gray-600 flex gap-3 p-4">
                {data.slice(6, 10).map((item, id)=>(
                <a href={item.url} key={id}>
                    <div className='flex flex-col items-center'>
                        <div className='mb-3 text-[18px] font-semibold'>
                        {item.title}
                        </div>
                        <div className='w-3/4'>
                            <LazyLoadImage src={item.urlToImage} alt="" effect="blur"/>
                        </div>
                    </div>
                </a>
                ))}
            </div>
        </div>
    </div>
  )
}
