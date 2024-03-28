import axios from 'axios';

const apiBaseUrl = 'http://localhost:5001/api'; // for the sake of simplicity

const fetchRedditPosts = async (query) => {
    try {
        const response = await axios.get(`${apiBaseUrl}/search?q=${query}`);
        const formattedPosts = response.data.response.map((post) => {
            return {
                id: post.id,
                author: post.author,
                originalPostUrl: post.url,
                title: post.title,
                selftext: post.selftext,
                imageUrl: post.imageUrl
            };
        });

        return formattedPosts;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default { fetchRedditPosts };
