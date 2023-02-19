import { Nav } from "./nav";
import { blogs } from "./blogs";
export const Home = () => {
  return (
    <div className="h-screen">
      <Nav />
      <div className="bg-slate-800 h-full">
        <div className="max-w-screen-lg  m-auto flex flex-col gap-4 py-4">
          {blogs.map((blog, i) => {
            return (
              <div
                key={i}
                className="p-4 hover:bg-slate-600 justify-between items-center rounded-md text-white flex h-20  bg-slate-700 "
              >
                <span>{blog.title}</span>
                <span className="flex gap-1">
                  <svg
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span className="flex items-center align-middle">
                    {blog.comments}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
