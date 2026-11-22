// 22.11.2026: карта сайта для поисковиков — главная и страницы проектов (/<проект>/)
import { getCollection } from "astro:content";

export async function GET() {
  const site = "https://inastudio.eu";
  const projects = await getCollection("projects");
  const urls = ["/", ...projects.map((p) => `/${p.id}/`)];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${site}${u}</loc></url>`).join("\n") +
    `\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
