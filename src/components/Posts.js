import React, { useEffect, useState } from 'react';
import Post from './Post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchPosts();
    // fetch(API_URL)
    //   .then((response) => response.json())
    //   .then((data) => setPosts(data))
    //   .catch((error) => setError(error.message))
    //   .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <hr />
      {isLoading ? <h1>Loading...</h1> : posts.map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
}
