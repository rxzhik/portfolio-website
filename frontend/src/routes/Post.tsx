import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react"; // Import PortableText
import { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../sanity/client"; // Make sure the client is correctly set up
import { Link, useParams } from "react-router-dom"; // Use react-router-dom's Link in React
import "../styles/Post.css";
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
            } catch (err) {
                setError("Error fetching post");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!post) return <div>Post not found</div>;

    const postImageUrl = post.image
        ? urlFor(post.image)?.width(550).height(310).url()
        : null;

    return (
        <main className="post-container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <Link to="/blog" className="hover:underline">
                ← Back to posts
            </Link>
            {postImageUrl && (
                <img
                    src={postImageUrl}
                    alt={post.title}
                    className="aspect-video rounded-xl"
                    width="550"
                    height="310"
                />
            )}
            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
            <div className="prose">
                <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
                {Array.isArray(post.body) && <PortableText value={post.body} />}
            </div>
        </main>
    );
}
