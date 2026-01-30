/**
 * Build-time script to generate a static JSON manifest from MDX project files.
 * This allows the projects to be bundled at build time instead of reading from
 * the filesystem at runtime (which doesn't work on Cloudflare Workers).
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECTS_DIR = path.join(__dirname, "../src/content/projects");
const OUTPUT_FILE = path.join(__dirname, "../src/data/projects.json");

function generateProjectsManifest() {
  console.log("📦 Generating projects manifest...");

  if (!fs.existsSync(PROJECTS_DIR)) {
    console.warn("⚠️  Projects directory not found, creating empty manifest");
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2));
    return;
  }

  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const projects = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(PROJECTS_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      ...data,
      slug,
      content,
    };
  });

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });

  // Write manifest
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(projects, null, 2));

  console.log(`✅ Generated manifest with ${projects.length} projects`);
  console.log(`   Output: ${OUTPUT_FILE}`);
}

generateProjectsManifest();
