export type NewsItemModel = {
    id: number;
    title: string;
    by: string;
    time: number;
    score: number;
    descendants: number;
    url: string;
}

export const fetchNewsFeed = async (pageNumber: number): Promise<NewsItemModel[]> => {
    try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        const storyIds: number[] = await response.json()

        const pageStories = storyIds.slice((pageNumber-1)*30, pageNumber*30)
        const details = pageStories.map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
        )

        const stories = await Promise.all(details)
        
        return stories.map(story => ({
            id: story.id,
            title: story.title,
            by: story.by,
            time: story.time,
            score: story.score,
            descendants: story.descendants || 0,
            url: story.url
        }))

    } catch (error) {
        console.error("error in fetching: ", error)
        return []
    }
}