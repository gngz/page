import markdownit from "markdown-it/lib";
import hljs from 'highlight.js'

export function renderMarkdown(markdown: string) {
    const md = markdownit({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang }).value;
                } catch (__) { }
            }
            return '';
        }
    });
    return md.render(markdown);
}
