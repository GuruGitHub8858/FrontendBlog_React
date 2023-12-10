// PostBlogAdmin.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CSS/PostBlog.css';

const PostBlogAdmin = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [sector, setSector] = useState('');
    const [date, setDate] = useState('');

    const handleCreateBlogPost = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/blog-posts/create', {
                imageUrl,
                description,
                sector,
                date,
            });

            if (response.status === 201) {
                alert('Blog post created successfully');
            } else {
                console.error('Blog post creation failed');
            }
            setDate('');
            setDescription('');
            setImageUrl('');
            setSector('');
        } catch (error) {
            console.error('Error during blog post creation:', error);
        }
    };

    return (
        <div className="container">
            <div>
                <nav className="navbar">
                    <Link to="/getblog">Blog</Link>
                </nav>
            </div>
            <div className="post-blog-container">
                <h2 className="post-blog-heading">Create a New Blog Post</h2>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        className="post-blog-input"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        placeholder="Write your blog post here..."
                        className="post-blog-textarea"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sector">Sector:</label>
                    <input
                        type="text"
                        id="sector"
                        className="post-blog-input"
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        className="post-blog-date-input"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <button className="post-blog-button" onClick={handleCreateBlogPost}>
                    Create Blog Post
                </button>
            </div>
        </div>
    );
};

export default PostBlogAdmin;
