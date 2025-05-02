//http://localhost:3000/api/posts/4

export async function GET(request, { params }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return new Response(JSON.stringify(post), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
