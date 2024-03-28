import {useState} from "react";
import SkeletonCard from "./components/SkeletonCard.jsx";
import RedditPostCard from "./components/RedditPostCard.jsx";
import redditService from './services/redditService';
import PostsNotFound from "./components/PostsNotFound.jsx";

export default function App() {
    const [redditQuery, setRedditQuery] = useState("");
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [queryError, setQueryError] = useState(null);


    async function fetchData(query) {
        if (!query) {
            setQueryError("Please enter the query");
            return;
        }
        setQueryError(null);
        setIsLoading(true);
        try {
            const feedItems = await redditService.fetchRedditPosts(query);
            setItems(feedItems);
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage("Error fetching Reddit posts. Please try again.");
            setItems([]);
            console.error('Error fetching RSS', error);

        } finally {
            setIsLoading(false);
        }
    }

    const getRedditPosts = async (e) => {
        e.preventDefault();
        await fetchData(redditQuery);
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-4">Reddit query helper</h1>
            {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                    <p>{errorMessage}</p>
                </div>
            )}

            <form onSubmit={getRedditPosts} className="flex flex-col gap-4 mb-8">
                <div>
                    <input
                        id="reddit-query"
                        type="text"
                        onChange={(e) => setRedditQuery(e.target.value)}
                        value={redditQuery}
                        maxLength={100}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Enter your Reddit search query"
                    />
                    {queryError && (
                        <p className="text-red-600 mt-2">{queryError}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Fetch Reddit Feed
                </button>
            </form>

            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                </div>
            ) : items.length > 0 ? (  // Check if items array is not empty
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item) => (
                        <RedditPostCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            selftext={item.selftext}
                            originalPostUrl={item.originalPostUrl}
                            author={item?.author}
                            imageUrl={item?.imageUrl}
                        />
                    ))}
                </div>
            ) : (
                <PostsNotFound />
            )}
        </div>
    );
}

// const id = post.data.id;
// const author = post.data.author;
// const url = post.data.url;
// const title = post.data.title;
// const selftext =  post.data.selftext;
// const imageUrl = extractValidImageUrl(post);