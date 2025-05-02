"use client";

import React from "react";
import Link from "next/link";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
            <h1 className="text-4xl font-bold mb-4">Oups ! Une erreur est survenue 😢</h1>
            <p className="text-lg text-center mb-6">
                Il semble que quelque chose ne se soit pas passé comme prévu.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
                Retour à l'accueil
            </Link>
        </div>
    );
}
