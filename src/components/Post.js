import React from 'react';
import './Post.css';

export default function Post({ id, title, body }) {
  return (
    <div className="post">
      <p>{id}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
