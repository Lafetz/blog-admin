export const Nav = () => {
  return (
    <div className="m-auto py-3 text-white bg-slate-700">
      <div className=" max-w-screen-lg m-auto flex justify-around items-center h-16">
        <h1 className="text-4xl font-bold">Blog</h1>
        <button className="bold hover:bg-green-600 py-2 px-3  border-white-600 border-2">
          New Blog
        </button>

        <button className=" uppercase shadow bg-red-800 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white  py-3 px-4 rounded">
          logout
        </button>
      </div>
    </div>
  );
};
