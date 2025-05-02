import Link from "next/link";
import React from "react";

export default async function page({ params }) {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const post = await res.json();

    return (
        <main className="mt-12">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 mb-8">{post.body}</p>
            <Link href="/blog" className="text-blue-500 hover:underline">
                ← Retour à la liste des posts
            </Link>
        </main>
    );
}
