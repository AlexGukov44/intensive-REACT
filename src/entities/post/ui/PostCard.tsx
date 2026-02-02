import React from 'react';

interface PostCardProps {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

function PostCard({ post }: PostCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostCard;