// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { loadEnv } from 'vite';

import sanity from '@sanity/astro';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
    process.env.NODE_ENV ?? 'development',
    process.cwd(),
    ''
);

// https://astro.build/config
export default defineConfig({
    site: 'https://opusconservatory.aaratha.com',
    integrations: [
        mdx(),
        sitemap(),
        sanity({
            projectId: PUBLIC_SANITY_PROJECT_ID,
            dataset: PUBLIC_SANITY_DATASET,
            useCdn: false,
        }),
    ],
    fonts: [
        {
            provider: fontProviders.google(),
            name: 'EB Garamond',
            cssVariable: '--font-garamond',
            fallbacks: ['serif'],
            weights: [400, 500, 600, 700],
            styles: ['normal', 'italic'],
        },
        {
            provider: fontProviders.google(),
            name: 'Manrope',
            cssVariable: '--font-manrope',
            fallbacks: ['sans-serif'],
            weights: [400, 500, 600, 700, 800],
            styles: ['normal'],
        },
    ],
});