import { Nav } from "./nav";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/user", {
      mode: "cors",
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((user) => {
            setUser(user);
          });
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        navigate("/login");
      });
  }, [navigate]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs", {
      mode: "cors",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
        } else {
          return res.json();
        }
      })
      .then((res) => {
        setBlogs(res.blogs);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="h-screen">
      <Nav setUser={setUser} />
      <div className="bg-slate-800 h-full px-10">
        <div className="max-w-screen-lg  m-auto flex flex-col gap-4 py-8">
          {blogs &&
            blogs.map((blog) => {
              return (
                <Link
                  key={blog._id}
                  to={"/blogs/" + blog.id}
                  state={{
                    id: blog._id,
                  }}
                >
                  <div className="p-4 hover:bg-slate-600 justify-between items-center rounded-md text-white flex h-20  bg-slate-700 ">
                    <span>{blog.title}</span>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
