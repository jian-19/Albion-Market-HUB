var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_axios = __toESM(require("axios"), 1);
var cheerio = __toESM(require("cheerio"), 1);
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.get("/api/builds", async (req, res) => {
    const { q = "", p = 1 } = req.query;
    try {
      const url = `https://albiononline.com/en/characterbuilder/search?q=${encodeURIComponent(q)}&p=${p}`;
      const response = await import_axios.default.get(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
      });
      const $ = cheerio.load(response.data);
      const builds = [];
      $(".character-builder-search-result").each((_, el) => {
        const $el = $(el);
        const title = $el.find(".character-builder-search-result__title").text().trim();
        const author = $el.find(".character-builder-search-result__author").text().trim();
        const link = $el.find("a").attr("href");
        const votes = $el.find(".character-builder-search-result__votes-count").text().trim();
        const items = [];
        $el.find(".character-builder-search-result__item img").each((_2, img) => {
          items.push($(img).attr("src") || "");
        });
        if (title && link) {
          builds.push({
            title,
            author,
            url: link.startsWith("http") ? link : `https://albiononline.com${link}`,
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
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
