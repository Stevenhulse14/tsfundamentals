import React from "react";
import PostCard from "./PostCard";
interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const PostList = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postsJson = await posts.json();
  //console.log(postsJson);
  return (
    <div className="postList">
      {postsJson.map(({ userId, id, title, body }: IPost) => (
        <PostCard key={id} title={title} description={body} />
      ))}
    </div>
  );
};

export default PostList;
