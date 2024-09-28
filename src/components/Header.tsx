import React from 'react'
import y18 from '../assets/y18.svg'

export default function Header() {
  return (
    <div className='bg-[#ff6600]'>
        <div className='flex items-center w-full px-2 pl-0.5'>
            
            <div className='pr-1'>
                <a href='/'>
                    <img
                        src={y18}
                        className='border border-white h-5 w-5'
                    />
                </a>
            </div>
            <div className='flex-grow'>
                <span className='header'>
                    <b>
                        <a href='/'>Hacker News</a>
                    </b>
                    {" new | past | comments | ask | show | jobs | submit"}
                </span>
            </div>
            <div className='text-right pr-1'>
                <span>
                    <a className='header' href='#'>login</a>
                </span>
            </div>

        </div>
    </div>
  )
}
