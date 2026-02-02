import React from 'react';
import PostCard from '../../entities/post/ui/PostCard';

interface Post {
  id: number;
  title: string;
  body: string;
}

const dummyPosts: Post[] = [
  { id: 1, title: 'Первый пост', body: 'Это первый пост.' },
  { id: 2, title: 'Второй пост', body: 'Это второй пост.' },
  { id: 3, title: 'Третий пост', body: 'Это третий пост.' },
];

function PostList() {
  return (
    <div>
      {dummyPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;