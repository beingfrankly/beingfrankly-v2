import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
// import rehypeSlug from 'rehype-slug'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export async function markdownToHtml(body: string): Promise<any> {
    // const post = await fetch(`${import.meta.env.API_URL}/${slug}`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${import.meta.env.API_TOKEN}`,
    //     },
    // }).then((response) => response.json());

    const html = await unified()
    .use(remarkParse)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeRaw)
    // .use(rehypeSlug)
    // .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .process(body);

    return String(html);
}
