import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Nav = () => {
  const navigate = useNavigate();
  const logout = () => {
    fetch("https://blog-api-production-9f47.up.railway.app/logout", {
      method: "POST",
      mode: "cors",
      credentials: "include",
    }).then((res) => {
      if (res.status === 200) {
        navigate("/login");
      }
    });
  };
  return (
    <div className="m-auto py-3 text-white bg-slate-700">
      <div className=" max-w-screen-lg m-auto flex justify-around items-center h-16">
        <Link to="/">
          <h1 className="text-4xl font-bold">Blog</h1>
        </Link>
        <Link to="/post">
          <button className="bold hover:bg-green-600 py-2 px-3  border-white-600 border-2">
            New Blog
          </button>
        </Link>

        <button
          onClick={logout}
          className=" uppercase shadow bg-red-800 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white  py-3 px-4 rounded"
        >
          logout
        </button>
      </div>
    </div>
  );
};
