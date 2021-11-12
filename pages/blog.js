import { DataStore } from "aws-amplify";
import { Blogpost } from "../models";
import { useState, useEffect } from "react";
import Link from "next/link";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        fetchBlogs()
        async function fetchBlogs() {
            const blogs = await DataStore.query(Blogpost);
            setBlogs(blogs);
        }
        const subscription = DataStore.observe(Blogpost).subscribe(() => fetchBlogs())
    }, []);
    
    return (
        <div>
        <h1>Blog</h1>
        <ul>
            {blogs.map(blog => (
            <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
                </Link>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default BlogPage;