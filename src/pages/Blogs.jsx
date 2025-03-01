import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Clock, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import blogData from '../components/main/Helpers/Data';

const BlogCard = ({ blog }) => {
    const [copied, setCopied] = useState(false);
    const blogUrl = `${window.location.origin}/blogs/${blog.id}`; 
  
    const handleShare = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: blog.title,
            url: blogUrl,
          });
        } catch (error) {
          console.error("Error sharing:", error);
        }
      } else {
        navigator.clipboard.writeText(blogUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };

    return (
      <div className="group relative overflow-hidden rounded-xl bg-gray-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70"></div>

        <img 
          src={blog.images[0]} 
          alt={blog.title} 
          className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="mb-2 text-xl font-bold text-white transition-all duration-300 group-hover:text-orange-500 md:text-2xl">
            {blog.title}
          </h3>
          
          <p className="mb-4 text-sm text-gray-300 line-clamp-2">
            {blog.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center text-xs text-gray-400">
                <User size={14} className="mr-1" />
                {blog.author}
              </div>
              <div className="flex items-center text-xs text-gray-400">
                <Clock size={14} className="mr-1" />
                {blog.readTime}
              </div>
              <div className="flex items-center text-xs text-gray-400">
                <MessageCircle size={14} className="mr-1" />
                {blog.comments}
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="rounded-full bg-gray-800 p-1.5 text-gray-400 transition-colors duration-300 hover:bg-orange-500 hover:text-white">
                <Bookmark size={16} />
              </button>
              <button
                onClick={handleShare}
                className="relative rounded-full bg-gray-800 p-1.5 text-gray-400 transition-colors duration-300 hover:bg-orange-500 hover:text-white"
              >
                <Share2 size={16} />
                {copied && (
                  <span className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white">
                    Link Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};


const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-black text-white min-h-screen p-8 lg:pt-56">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-6">Blogs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentBlogs.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
      
      <div className="mt-10 flex items-center justify-center space-x-2">
        {[...Array(Math.ceil(blogData.length / blogsPerPage))].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
              currentPage === index + 1
                ? 'bg-orange-500 text-white'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
