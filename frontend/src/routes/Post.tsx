import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react"; // Import PortableText
import { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../sanity/client"; // Make sure the client is correctly set up
import { Link, useParams } from "react-router-dom"; // Use react-router-dom's Link in React
import "../styles/Post.css";
import '@fortawesome/fontawesome-free/css/all.min.css';



const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;

export default function Post() {
    const { slug } = useParams < { slug: string }>();
    const [post, setPost] = useState<SanityDocument | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const fetchedPost = await client.fetch<SanityDocument>(POST_QUERY, {
                    slug,
                });
                setPost(fetchedPost);
                console.log(fetchedPost.body);
            } catch (err) {
                setError("Error fetching post");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) return <div className="post-loading">
        <i className="fas fa-spinner fa-spin fa-3x"></i>
    </div>;
    if (error) return <div>{error}</div>;
    if (!post) return <div>Post not found</div>;

    const postImageUrl = post.image
        ? urlFor(post.image)?.width(550).height(310).url()
        : null;
    return (
        <main className="post-container">
            <div className="post-middle-container">
                <Link to="/blog" className="post-link">
                <i className="fas fa-arrow-left fa-3x"></i>
                </Link>
                {postImageUrl && (
                    <img
                        src={postImageUrl}
                        alt={post.title}
                        className="post-content-img"
                        width="550"
                        height="310"
                    />
                )}
                <div>
                    <div className="post-content-title">{post.title}</div>
                    <div className="post-content-date">Published: {new Date(post.publishedAt).toLocaleDateString()}</div>
                </div>
                <div className="post-content">
                    {Array.isArray(post.body) && <PortableText value={post.body} />}
                </div>
            </div>
        </main>
    );
}
