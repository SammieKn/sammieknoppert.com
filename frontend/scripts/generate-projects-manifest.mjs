/**
 * Build-time validation script to ensure projects.json and MDX files are in sync.
 * Validates that:
 * 1. Every slug in projects.json has a corresponding MDX file
 * 2. Every MDX file has a corresponding entry in projects.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECTS_DIR = path.join(__dirname, "../src/content/projects");
const MANIFEST_FILE = path.join(__dirname, "../src/data/projects.json");

function validateProjectsManifest() {
  console.log("✓ Validating projects manifest...");

  // Check if manifest exists
  if (!fs.existsSync(MANIFEST_FILE)) {
    console.error("❌ projects.json not found at", MANIFEST_FILE);
    process.exit(1);
  }

  // Check if projects directory exists
  if (!fs.existsSync(PROJECTS_DIR)) {
    console.error("❌ Projects directory not found at", PROJECTS_DIR);
    process.exit(1);
  }

  // Read manifest
  const manifestContent = fs.readFileSync(MANIFEST_FILE, "utf-8");
  const projects = JSON.parse(manifestContent);

  // Get MDX files
  const mdxFiles = fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  // Get slugs from manifest
  const manifestSlugs = projects.map((p) => p.slug);

  // Check for missing MDX files
  const missingMdxFiles = manifestSlugs.filter(
    (slug) => !mdxFiles.includes(slug)
  );
  if (missingMdxFiles.length > 0) {
    console.error(
      `❌ Missing MDX files for slugs: ${missingMdxFiles.join(", ")}`
    );
    process.exit(1);
  }

  // Check for orphaned MDX files
  const orphanedMdxFiles = mdxFiles.filter(
    (slug) => !manifestSlugs.includes(slug)
  );
  if (orphanedMdxFiles.length > 0) {
    console.error(
      `❌ MDX files without manifest entries: ${orphanedMdxFiles.join(", ")}`
    );
    process.exit(1);
  }

  // Validate required fields in manifest
  const requiredFields = ["slug", "title", "date", "summary", "cover", "tags"];
  projects.forEach((project, index) => {
    const missingFields = requiredFields.filter((field) => !project[field]);
    if (missingFields.length > 0) {
      console.error(
        `❌ Project at index ${index} (${project.slug || "unknown"}) is missing: ${missingFields.join(", ")}`
      );
      process.exit(1);
    }
  });

  console.log(`✓ Validated ${projects.length} projects successfully`);
}

validateProjectsManifest();
