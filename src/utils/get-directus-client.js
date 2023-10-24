import { createDirectus, authentication, rest, } from "@directus/sdk";
const email = 'info@modocosm.io';
const password = '3G@&Lx3r#GKLen4q';
export const client = createDirectus('https://modocosm.up.railway.app/').with(authentication()).with(rest());
await client.login(email, password);