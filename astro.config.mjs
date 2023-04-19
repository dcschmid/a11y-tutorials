import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';
import MDXCodeBlocks, { mdxCodeBlockAutoImport } from 'astro-mdx-code-blocks';
import compress from "astro-compress";
import critters from "astro-critters";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file'
  },
  integrations: [AutoImport({
    imports: [mdxCodeBlockAutoImport('./src/components/CodeBlock.astro')]
  }), MDXCodeBlocks(), mdx(), pagefind(), compress(), critters(), compressor()]
});