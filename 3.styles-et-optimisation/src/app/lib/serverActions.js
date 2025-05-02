"use server";

// GESTION DES IMAGES///////////////////////////////////////////////////////////////////////////

// Importation de la fonction getImage pour récupérer les images
export async function getImage() {
    const res = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
    if (!res.ok) throw new Error("Erreur de chargement des données");
    const imgData = await res.json();

    return imgData;
}

// GESTION DES POSTS////////////////////////////////////////////////////////////////////////////

// Importation de la fonction getPosts pour récupérer les posts
export async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Erreur de chargement des données");
    const posts = await res.json();

    return posts;
}

// Importation de la fonction getPost pour récupérer un post spécifique
export async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const post = await res.json();

    return post;
}

///////////////////////////////////////////////////////////////////////////////////////////////
