import { useState } from "react";
import { Link } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameChange = (e) => {
    setUsername(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };
  };
  return (
    <div className="h-screen bg-slate-800 flex justify-center items-center">
      <div className="border-2 border-white text-white p-8 flex flex-col gap-5 ">
        <h1 className="bold text-2xl font-bold w-fit m-auto">Log in</h1>
        <form onSubmit={submitForm} className="flex flex-col gap-5">
          <div>
            <label className="block w-max" htmlFor="username">
              UserName:
            </label>
            <input
              id="username"
              className="h-7 rounded-sd"
              onChange={usernameChange}
              value={username}
            />
          </div>
          <div>
            <label className="block" htmlFor="password">
              Password:
            </label>
            <input
              className="h-7 rounded-sd"
              id="password"
              onChange={passwordChange}
              value={password}
              type="password"
              autoComplete="on"
            />
          </div>

          <button className=" uppercase shadow bg-slate-600 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white  py-3 px-8 rounded">
            Log in{" "}
          </button>
        </form>
      </div>
    </div>
  );
};
