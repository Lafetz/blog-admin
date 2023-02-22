import { Home } from "./components/home";
import { Blog } from "./components/blog";
import { Login } from "./components/Login";
import { Post } from "./components/Post";
import { HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
