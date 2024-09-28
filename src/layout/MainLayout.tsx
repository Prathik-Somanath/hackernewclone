import React from 'react'

type LayoutProps = {
    children: React.ReactNode
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className='w-full bg-white py-2 px-2'>
        <div className='w-[85%] mx-auto grid bg-[#f6f6ef]'>
            {children}
        </div>
    </div>
  )
}
