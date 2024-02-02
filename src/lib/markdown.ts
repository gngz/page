import hljs from 'highlight.js';
import markdownit from 'markdown-it/lib';

export function renderMarkdown(markdown: string) {
    const md = markdownit({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return (
                        `<pre><div class="codelang">${hljs.getLanguage(lang)?.name}</div><code class="hljs">${hljs.highlight(str, { language: lang }).value}</code></pre>`
                    );
                } catch (__) { }
            }
            return '';
        },
    });
    return md.render(markdown);
}
