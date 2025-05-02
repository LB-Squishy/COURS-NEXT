"use client";

import { getPost } from "@/app/lib/serverActions";
import Link from "next/link";
import { useState } from "react";

function page() {
    const [inputValue, setInputValue] = useState("");
    const [post, setPost] = useState(null);

    async function handleGetArticle() {
        const post = await getPost(inputValue);
        setPost(post);
    }
    return (
        <div>
            <input
                className="p-2 mb-4 border border-gray-400"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Tapez l'id d'un post..."
            />
            <p>Tu as écrit : {inputValue}</p>
            <button className="p-4 bg-green-300" onClick={handleGetArticle}>
                Récupérer un article
            </button>
            {post && (
                <Link
                    href={`/contact/${post.id}`}
                    key={post.id}
                    className="block p-4 mt-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition duration-300"
                >
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-500">{post.body.slice(0, 100)}</p>
                </Link>
            )}
        </div>
    );
}

export default page;
