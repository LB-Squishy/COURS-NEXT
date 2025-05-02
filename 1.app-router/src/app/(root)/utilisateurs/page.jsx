import React from "react";

export default async function page() {
    // const users = await new Promise((resolve) => {
    //     setTimeout(() => resolve(["Victor", "Sarah", "Jean", "Jean"]), 4000);
    // });
    const users = await new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Erreur")), 4000);
    });

    return (
        <main className="mt-12">
            <p className="mb-4 text-2xl font-semibold text-gray-800">Utilisateurs</p>
            <ul className="bg-white shadow-md rounded-lg w-1/2 p-4 space-y-2">
                {users.map((user, index) => (
                    <li
                        key={index}
                        className="text-lg text-gray-500 border-b border-gray-300 last:border-none pb-2"
                    >
                        {user}
                    </li>
                ))}
            </ul>
        </main>
    );
}
