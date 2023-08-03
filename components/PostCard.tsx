import React from "react";

interface Props {
  title: string;
  description: string;
}

const PostCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="postCard">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default PostCard;
