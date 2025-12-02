import React, { useState, useEffect } from 'react';
import './BlogPage.css';

const BlogPage = () => {
    const initialPosts = [
        {
            id: 1,
            title: "The Future of AI in Business",
            excerpt: "How artificial intelligence is transforming the corporate landscape and what you need to know to stay ahead.",
            date: "Nov 28, 2025",
            author: "John Doe",
            category: "Technology"
        },
        {
            id: 2,
            title: "Web Development Trends 2025",
            excerpt: "Explore the latest frameworks, tools, and design patterns defining the web this year.",
            date: "Nov 25, 2025",
            author: "Jane Smith",
            category: "Development"
        },
        {
            id: 3,
            title: "Cloud Computing Security Best Practices",
            excerpt: "Essential strategies to secure your cloud infrastructure against modern cyber threats.",
            date: "Nov 20, 2025",
            author: "Mike Johnson",
            category: "Security"
        },
        {
            id: 4,
            title: "Maximizing ROI with Digital Marketing",
            excerpt: "Proven strategies to increase your return on investment through targeted digital marketing campaigns.",
            date: "Nov 15, 2025",
            author: "Sarah Williams",
            category: "Marketing"
        },
        {
            id: 5,
            title: "The Rise of Mobile-First Design",
            excerpt: "Why designing for mobile first is no longer optional and how to implement it effectively.",
            date: "Nov 10, 2025",
            author: "David Chen",
            category: "Design"
        },
        {
            id: 6,
            title: "Sustainable Tech: Green Computing",
            excerpt: "How the tech industry is moving towards sustainability and what it means for your business.",
            date: "Nov 05, 2025",
            author: "Emily Davis",
            category: "Sustainability"
        }
    ];

    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem('blogPosts');
        return savedPosts ? JSON.parse(savedPosts) : initialPosts;
    });

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newPost, setNewPost] = useState({
        title: '',
        excerpt: '',
        author: '',
        category: ''
    });

    useEffect(() => {
        localStorage.setItem('blogPosts', JSON.stringify(posts));
    }, [posts]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            id: posts.length + 1,
            ...newPost,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
        setPosts([post, ...posts]);
        setNewPost({ title: '', excerpt: '', author: '', category: '' });
        setIsFormVisible(false);
    };

    return (
        <div className="blog-page">
            <section className="blog-hero">
                <div className="container">
                    <div className="hero-badge">Our Blog</div>
                    <h1>Insights & <span className="text-gradient">Updates</span></h1>
                    <p className="hero-description">
                        Stay informed with the latest trends, tips, and news from the world of technology and innovation.
                    </p>
                    <button
                        className="btn btn-primary write-blog-btn"
                        onClick={() => setIsFormVisible(!isFormVisible)}
                    >
                        {isFormVisible ? 'Cancel Writing' : 'Write a Blog'}
                    </button>
                </div>
            </section>

            {isFormVisible && (
                <section className="section write-blog-section">
                    <div className="container">
                        <div className="write-blog-form glass">
                            <h2>Share Your Knowledge</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={newPost.title}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter blog title"
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Author</label>
                                        <input
                                            type="text"
                                            name="author"
                                            value={newPost.author}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <select
                                            name="category"
                                            value={newPost.category}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            <option value="Technology">Technology</option>
                                            <option value="Development">Development</option>
                                            <option value="Design">Design</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Security">Security</option>
                                            <option value="Business">Business</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Excerpt / Content</label>
                                    <textarea
                                        name="excerpt"
                                        value={newPost.excerpt}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Write a short summary or the content of your blog..."
                                        rows="4"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Publish Blog</button>
                            </form>
                        </div>
                    </div>
                </section>
            )}

            <section className="section blog-posts">
                <div className="container">
                    <div className="posts-grid">
                        {posts.map(post => (
                            <article key={post.id} className="post-card glass">
                                <div className="post-content">
                                    <div className="post-meta">
                                        <span className="post-category">{post.category}</span>
                                        <span className="post-date">{post.date}</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className="post-footer">
                                        <span className="post-author">By {post.author}</span>
                                        <button className="read-more">Read More →</button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
