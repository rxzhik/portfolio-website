import { useEffect, useState } from "react";
import { SanityDocument } from "@sanity/client";
import { Link } from "react-router-dom"; // Use react-router-dom's Link in React
import { client } from "../sanity/client"; // Assuming your sanity client setup is here
import "../styles/IndexPage.css";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export default function IndexPage() {
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from Sanity when component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
        setPosts(fetchedPosts); // Set the fetched posts into state
      } catch (err) {
        setError("Error fetching posts");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main className="index-container">
      <div className="index-middle-container">
        <h1 className="post-header">Posts</h1>
        <ul className="post-list">
          {posts.map((post) => (
            <li className="post-id" key={post._id}>
              <Link className="post-row" to={`/blog/${post.slug.current}`}>
                <div className="post-date">{new Date(post.publishedAt).toLocaleDateString()}</div>
                <div className="post-title">{post.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}