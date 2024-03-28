import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import RedditPostCard from './RedditPostCard';

afterEach(cleanup); // Clean up after each test

describe('RedditPostCard Component', () => {
    // Sample post data
    const postData = {
        id: '123',
        author: 'test_user',
        originalPostUrl: 'https://www.reddit.com/r/test',
        title: 'Test Post Title',
        selftext: 'This is some selftext content',
        imageUrl: 'https://via.placeholder.com/300',
    };

    test('renders author if provided', () => {
        render(<RedditPostCard {...postData} />);

        const authorText = screen.getByText(`By: ${postData.author}`);
        expect(authorText).toBeInTheDocument();
    });

    test('does not render author if not provided', () => {
        const noAuthorData = { ...postData, author: '' };
        render(<RedditPostCard {...noAuthorData} />);

        expect(screen.queryByText(/^By:/)).not.toBeInTheDocument();
    });
    test('renders the image if imageUrl is provided', () => {
        render(<RedditPostCard {...postData} />);

        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', postData.imageUrl);
        expect(image).toHaveAttribute('alt', postData.title);
    });

});
