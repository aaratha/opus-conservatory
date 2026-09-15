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
            provider: fontProviders.local(),
            name: 'Atkinson',
            cssVariable: '--font-atkinson',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/atkinson-regular.woff'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/atkinson-bold.woff'],
                        weight: 700,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
    ],
});