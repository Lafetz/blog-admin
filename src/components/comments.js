import { useState } from "react";

export const Comments = () => {
  const comments = [
    { username: "hero", content: "nice tshag aghdg" },
    { username: "hero", content: "nice tshag aghdg" },
    { username: "hero", content: "nice tshag aghdg" },
  ];
  const [comment, setComment] = useState("");
  const commentChange = (e) => {
    setComment(e.target.value);
  };
  const submitComment = (e) => {
    e.preventDefault();
    comments.push({
      username: "me",
      content: comment,
    });
    setComment("");
  };
  return (
    <div className="py-6">
      <h1 className="w-fit m-auto text-xl text-bold">Comments</h1>
      <div className="flex flex-col gap-6 pt-6 justify-center items-center">
        <form className="flex gap-1" onSubmit={submitComment}>
          <input
            className="py-2 text-black"
            value={comment}
            onChange={commentChange}
          />
          <button className=" uppercase shadow bg-slate-600 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white  py-2 px-8 rounded">
            Add
          </button>
        </form>
        {comments.map((comment, id) => {
          return (
            <div
              key={id}
              className="border-2 border-white p-4 flex flex-col w-10/12"
            >
              <div className="flex justify-between">
                <span>@{comment.username}</span>
                <span>2hrs ago</span>
              </div>
              <span>{comment.content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
