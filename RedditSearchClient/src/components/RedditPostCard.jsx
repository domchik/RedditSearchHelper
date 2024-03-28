import  {  useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const RedditPostCard = ({ id, author, originalPostUrl, title, selftext, imageUrl }) => {
    const selftextRef = useRef(null);

    useEffect(() => {
        tippy('.tooltip-active', {
            content: (reference) => reference.querySelector('.tooltip').textContent,
            allowHTML: true,
            placement: 'right',
        });
    }, [selftext]);

    return (
        <div key={id} className="max-w-lg rounded-lg overflow-hidden shadow-xl p-4 border border-gray-200 hover:shadow-2xl">
            {imageUrl && (
                <img className="w-full h-48 object-cover mb-3"
                     src={imageUrl}
                     alt={title} />
            )}

            <h2 className="font-bold text-xl mb-2 cursor-pointer">
                <a href={originalPostUrl} target="_blank" rel="noopener noreferrer"
                   className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
                    {title}
                </a>
            </h2>
            {author && (
                <p className="text-gray-700 text-base mb-2">By: {author}</p>
            )}
            <div className="relative tooltip-active" ref={selftextRef}>
                <p className="text-gray-700 mb-1 overflow-hidden text-ellipsis line-clamp-3">
                    {selftext}
                </p>
                <div className="absolute top-full left-0 bg-gray-900 text-white rounded p-2 text-sm opacity-0 transition-opacity tooltip">
                    {selftext}
                </div>
            </div>
        </div>
    );
};
RedditPostCard.propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string,
    originalPostUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    selftext: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
};

export default RedditPostCard;

