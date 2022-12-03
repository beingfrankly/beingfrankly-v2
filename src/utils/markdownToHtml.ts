import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkUnwrapImages from 'remark-unwrap-images';
import { unified } from 'unified';
import * as shiki from 'shiki'
import withShiki from '@stefanprobst/remark-shiki';

export async function markdownToHtml(body: string): Promise<any> {
   const highlighter = await shiki.getHighlighter({ theme: 'github-dark' })

  const output = await unified()
    .use(remarkParse)
    .use(remarkUnwrapImages)
    .use(withShiki, { highlighter })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(body);

  return String(output);
}
