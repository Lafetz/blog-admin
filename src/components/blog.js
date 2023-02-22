import { Nav } from "./nav";
import { Comments } from "./comments";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Blog = () => {
  const [comments, setComments] = useState();
  const location = useLocation();
  const { id } = location.state;
  const [blog, setBlog] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/user", {
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
  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`, {
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
        setBlog(res);
      });
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}/comments`, {
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
        setComments(res.comments);
      });
  }, [id]);
  return (
    <div className="min-h-screen bg-slate-800  text-white ">
      <Nav setUser={setUser} />
      <div className="bg-slate-800 h-full text-white">
        <div className="max-w-screen-lg m-auto p-5">
          {blog && (
            <div className="flex flex-col gap-4 border-b-2 border-white py-8">
              <h1 className="w-fit m-auto text-2xl font-bold">{blog.title}</h1>
              <p className="text-center">{blog.content}</p>
            </div>
          )}
          {blog && <Comments id={id} comments={comments} user={user} />}
        </div>
      </div>
    </div>
  );
};
