import "server-only";

import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  fetch: (url, init) =>
    fetch(url, {
      ...init,
      next: { revalidate: 1800 },
    }),
});

export const DATABASE_ID = process.env.NOTION_DATABASE_ID?.trim();
