import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);   
  
  useEffect(()=>{
    axios.get('http://localhost:3000/posts')
    .then((res)=>{
        console.log(res.data);
        setPosts(res.data)
    })
    
  },[])

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-80 object-cover"
              />

              {/* Caption */}
              <div className="p-4">
                <p className="text-gray-800 text-base">{post.caption}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-80 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-semibold text-gray-500">
              No posts available
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Feed;