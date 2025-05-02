import { NextResponse } from "next/server";

export async function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/form")) {
        return NextResponse.rewrite(new URL("/form", request.url));
    }

    if (pathname.startsWith("/private")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}
