// GetBlogPost.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/GetBlogPost.css'; // Import your CSS file

const GetBlogPost = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [selectedSector, setSelectedSector] = useState(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/blog-posts/all');
                setBlogPosts(response.data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchBlogPosts();
    }, []);

    const handleSectorChange = (sector) => {
        setSelectedSector(sector);
    };

    const filteredBlogPosts = selectedSector
        ? blogPosts.filter((blogPost) => blogPost.sector.toLowerCase() === selectedSector.toLowerCase())
        : blogPosts;

    return (
        <div className="blog-container">
            <h2>Blog Posts</h2>
            <div>
                <label htmlFor="sectorFilter">Filter by Sector:</label>
                <select
                    id="sectorFilter"
                    onChange={(e) => handleSectorChange(e.target.value)}
                    value={selectedSector || ''}
                >
                    <option value="">All Sectors</option>
                    {Array.from(new Set(blogPosts.map((blogPost) => blogPost.sector))).map((sector) => (
                        <option key={sector} value={sector}>
                            {sector}
                        </option>
                    ))}
                </select>
            </div>
            {filteredBlogPosts.length === 0 ? (
                <p>No blog posts available</p>
            ) : (
                filteredBlogPosts.map((blogPost) => (
                    <div key={blogPost.id} className={`blog-post ${blogPost.sector.toLowerCase()} ${selectedSector === blogPost.sector ? 'selected-sector' : ''}`}>
                        <img src={blogPost.imageUrl} alt={`blogimg for ${blogPost.description}`} />
                        <div className="blog-details">
                            <p className="description">Description: {blogPost.description}</p>
                            <p className="sector">Sector: {blogPost.sector}</p>
                            <p className="date">Date: {blogPost.date.split('T')[0]}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default GetBlogPost;
