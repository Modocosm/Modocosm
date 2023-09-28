import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import { createDirectus, rest, graphql } from '@directus/sdk';
const client = createDirectus('http://directus.example.com');

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), vue(), partytown()]
});