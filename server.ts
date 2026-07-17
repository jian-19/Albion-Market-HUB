import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import axios from "axios";

import * as cheerio from 'cheerio';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route for Builds Proxy
  app.get("/api/builds", async (req, res) => {
    const { q = "", p = 1 } = req.query;
    try {
      const url = `https://albiononline.com/en/characterbuilder/search?q=${encodeURIComponent(q as string)}&p=${p}`;
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      
      const $ = cheerio.load(response.data);
      const builds: any[] = [];

      $('.character-builder-search-result').each((_, el) => {
        const $el = $(el);
        const title = $el.find('.character-builder-search-result__title').text().trim();
        const author = $el.find('.character-builder-search-result__author').text().trim();
        const link = $el.find('a').attr('href');
        const votes = $el.find('.character-builder-search-result__votes-count').text().trim();
        
        // Items in the build
        const items: string[] = [];
        $el.find('.character-builder-search-result__item img').each((_, img) => {
          items.push($(img).attr('src') || '');
        });

        if (title && link) {
          builds.push({
            title,
            author,
            url: link.startsWith('http') ? link : `https://albiononline.com${link}`,
            votes,
            items
          });
        }
      });

      res.json({ builds });
    } catch (error) {
      console.error("Error fetching builds:", error);
      res.status(500).json({ error: "Failed to fetch builds" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
