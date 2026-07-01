import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target)

        axios.post('http://localhost:3000/create-post', formData)
        .then((res)=>{
            navigate('/feed')
        })
    }


  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Post
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              className="block w-full text-sm text-gray-700
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:bg-blue-600 file:text-white
              file:font-medium
              hover:file:bg-blue-700
              cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Caption
            </label>

            <input
              type="text"
              name="caption"
              placeholder="Enter caption..."
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;