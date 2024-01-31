export function imageFallback(title: string, author: string) {
    const url = new URL("/api/gen", process.env.WEB_URL)
    url.searchParams.set("title", title)
    url.searchParams.set("author", author)
    return url.toString()
}