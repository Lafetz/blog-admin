export const Nav = () => {
  return (
    <div className="m-auto py-3 text-white bg-slate-700">
      <div className=" max-w-screen-lg m-auto flex justify-around items-center h-16">
        <h1 className="text-4xl w-12  font-bold">Blog</h1>
        <button className="bold hover:bg-green-600 py-3 px-8 border-white border-2">
          New Blog
        </button>

        <button className="block uppercase shadow bg-red-800 hover:bg-red-900 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
          logout
        </button>
      </div>
    </div>
  );
};
