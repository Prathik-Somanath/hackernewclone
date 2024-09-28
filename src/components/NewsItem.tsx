import React from 'react'
import triangle from '../assets/triangle.svg'
import { ConvertTime } from '../services/convertTime';
import { convertURL } from '../services/convertURL';

export type NewsItemProps = {
    id: number;
    title: string;
    by: string;
    time: number;
    score: number;
    descendants: number;
    url: string;
    rank: number;
}

export default function NewsItem({
    id, title, by, time, url, score, descendants, rank
}: NewsItemProps) {
  return (
    <div className='grid grid-cols-[30px_20px_1fr] gap-0 items-start text-xs'>
        
        <div className='text-right title text-[#828282]'>{rank}.</div>
        <div className='text-center'>
            <img
                src={triangle}
                className='w-3 h-3'
            />
        </div>
        <div>
            <div>
                <a href={url || `item?${id}`} className='title'>
                    {title}
                </a>
                <span className='comtext links ml-2'>
                    <a href=''>({convertURL(url)})</a>
                </span>
            </div>
            <div className='subtext'>
                {score} points by <span className='links subtext'>{by}</span>
                {" "}<span className='links subtext'>{ConvertTime(time)}</span>
                {" | "}<span className='links subtext'>hide</span>
                {" | "}<span className='links subtext'>
                    {
                        descendants === 0 ? 'discuss' : descendants === 1 ? '1 comment' : `${descendants} comments`
                    }
                </span>
            </div>
        </div>
    </div>
  )
}
