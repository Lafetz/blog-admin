import { useState } from "react";
import { Nav } from "./nav";

export const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleChange = () => {};
  return (
    <div className="min-h-screen bg-slate-800  text-white ">
      <Nav />
      <div className="max-w-screen-lg h-full m-auto p-10">
        <form className="h-full flex flex-col gap-6">
          <input
            className="w-1/1 p-1   text-black placeholder:text-slate-700 bg-slate-300"
            aria-label="text"
            placeholder="Title"
          />
          <textarea
            aria-label="blog content"
            className="w-1/1 p-2 resize-none h-96 text-black bg-slate-300 placeholder:text-black"
          ></textarea>

          <label className="m-auto text-xl">
            <input type="checkbox" /> Publish now
          </label>
          <button className=" uppercase shadow bg-slate-600 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white  py-3 px-8 rounded">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};
