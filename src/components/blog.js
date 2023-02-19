import { Nav } from "./nav";
import { Comments } from "./comments";
export const Blog = () => {
  const blog = {
    title: "TypeScript",
    content:
      "TypeScript is a free and open source high-level programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.[5] As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). Multiple options are available for transpilation. The default TypeScript Compiler can be used,[6] or the Babel compiler can be invoked to convert TypeScript to JavaScript.TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js library modules are also available, allowing development of Node.js programs within TypeScript.[7]",
    comments: 4,
  };
  return (
    <div className="min-h-screen bg-slate-800  text-white ">
      <Nav />
      <div className="bg-slate-800 h-full text-white">
        <div className="max-w-screen-lg m-auto p-5">
          <div className="flex flex-col gap-4 border-b-2 border-white py-8">
            <h1 className="w-fit m-auto text-2xl font-bold">{blog.title}</h1>
            <p className="text-center">{blog.content}</p>
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
};
