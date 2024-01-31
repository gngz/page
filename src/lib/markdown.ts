import markdownit from "markdown-it/lib";

export function renderMarkdown(markdown: string) {
    const md = markdownit();
    return md.render(markdown);
}
