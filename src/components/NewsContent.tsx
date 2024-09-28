import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import { useSearchParams } from 'react-router-dom'
import { fetchNewsFeed, NewsItemModel } from '../services/hackerNewsService'

export default function NewsContent() {


    const [newsItems, setNewsItems] = useState<NewsItemModel[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [searchParams, setSearchParams] = useSearchParams()
    // initially 1st page
    const pageNumber = Number(searchParams.get('page')) || 1

    const handleMoreClick = () => {
        const currentPage = pageNumber
        const newPage = currentPage + 1
        setSearchParams({ page: newPage.toString() })
    }

    useEffect(() => {
        const loadingNews = async () => {
            setLoading(true)
            const data = await fetchNewsFeed(pageNumber)
            setNewsItems(data)
            setLoading(false)
        }
        loadingNews()
    }, [pageNumber])

    return (
        <div className='w-full py-3'>
            {loading ? (
                <div className='text-center py-4'>Loading...</div>
            ) : (
                <div className='grid'>
                    {
                        newsItems.map((newsItem, index) => (
                            <NewsItem
                                key={`${newsItem.id}`}
                                rank={(pageNumber - 1) * 30 + 1 + index}
                                {...newsItem}
                            />
                        ))
                    }
                </div>
            )}
        <div className='py-2 ml-4'>
            <button
                className='links text-[#828282] text-[12px]'
                onClick={handleMoreClick}
            >
                More
            </button>
        </div>
        </div>
    )
}
