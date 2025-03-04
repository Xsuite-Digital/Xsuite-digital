import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../components/main/Helpers/Data';


const BlogsDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog) return <h2 className="text-white text-center mt-10">Blog Not Found</h2>;

  return (
    <div className="bg-black text-white min-h-screen pt-56 p-8">
      <h1 className="text-4xl font-bold text-orange-500">{blog.title}</h1>
      <div className="mt-4">
        {blog.images.map((img, index) => (
          <img key={index} src={img} alt={`Blog ${index}`} className="w-full rounded-md my-4" />
        ))}
      </div>
      <p className="text-gray-400">{blog.description}</p>
    </div>
  );
};

export default BlogsDetail;
