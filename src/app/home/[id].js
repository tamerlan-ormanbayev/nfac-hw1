import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const response = await fetch(`/data.json`);
        const data = await response.json();
        const foundPost = data.find((post) => post.id === parseInt(id));
        setPost(foundPost);
      };

      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div>
        <span>{post.author}</span> - <span>{post.date}</span>
      </div>
    </div>
  );
}