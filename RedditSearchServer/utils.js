const axios = require('axios');
const  sanitizeHtml = require('sanitize-html');

async function fetchRedditData(q) {
    const response = await axios.get(`https://www.reddit.com/search.json?q=${q}&sort=new`);
    return response.data.data.children.map((post) => {
        const id = post.data.id;
        const author = post.data.author;
        const url = post.data.url;
        const title = post.data.title;
        const selftext =  post.data.selftext;
        const imageUrl = extractValidImageUrl(post);
        //Filter out feeds with missing essential properties
        if (!title || !selftext) {
            return null;
        }
        const sanitizedText = sanitizeHtml(selftext, { allowedTags: [] });
        return {id, author, url, title, selftext: sanitizedText, imageUrl};
    }).filter(Boolean);
}

function extractValidImageUrl(post) {
    if (post.data.thumbnail && isValidImageUrl(post.data.thumbnail)) {
        return post.data.thumbnail;
    }
    if (post.data.preview?.images?.[0]?.source?.url &&
        isValidImageUrl(post.data.preview.images[0].source.url)) {
        return post.data.preview.images[0].source.url;
    }
    return null;
}

function isValidImageUrl(urlString) {
    const imageExtensions = new RegExp('^(.*\.(?:png|jpg|jpeg|gif))$', 'i');
    return imageExtensions.test(urlString);
}

module.exports = { fetchRedditData, extractValidImageUrl, isValidImageUrl };
