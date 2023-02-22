import { useState, useEffect } from "react";
import { Nav } from "./nav";
import { useNavigate } from "react-router-dom";
export const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://blog-api-production-9f47.up.railway.app/user", {
      mode: "cors",
      credentials: "include",
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((user) => {
          setUser(user);
        });
      } else {
        console.log(1212);
        navigate("/login");
      }
    });
  }, [navigate]);
  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const contentChange = (e) => {
    setContent(e.target.value);
  };
  const postBlog = (e) => {
    e.preventDefault();
    const blogData = {
      title: title,
      content: content,
    };
    fetch(`https://blog-api-production-9f47.up.railway.app/blogs`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    }).then((res) => {
      if (res.status === 200) {
        setTitle("");
        setContent("");
      }
    });
  }; //
  return (
    <div className="min-h-screen bg-slate-800  text-white ">
      <Nav />
      <div className="max-w-screen-lg h-full m-auto p-10">
        <form onSubmit={postBlog} className="h-full flex flex-col gap-6">
          <input
            value={title}
            onChange={titleChange}
            className="w-1/1 p-1   text-black placeholder:text-slate-700 bg-slate-300"
            aria-label="text"
            placeholder="Title"
          />
          <textarea
            onChange={contentChange}
            value={content}
            aria-label="blog content"
            className="w-1/1 p-2 resize-none h-96 text-black bg-slate-300 placeholder:text-black"
          ></textarea>

          <button className=" uppercase shadow bg-slate-600 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white  py-3 px-8 rounded">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};
