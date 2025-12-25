import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define paths
const sourceDir = path.join(__dirname, "..",  "..", "lagunite", "docs", "asJson");
const destDir = path.join(__dirname, "..", "src", "docs", "json");

// 1. Delete existing files in destDir
if (fs.existsSync(destDir)) {
  fs.rmSync(destDir, { recursive: true, force: true });
  console.log("Deleted existing files in", destDir);
}

// 2. Copy all content from sourceDir to destDir
if (fs.existsSync(sourceDir)) {
  fs.cpSync(sourceDir, destDir, { recursive: true });
  console.log("Copied files from", sourceDir, "to", destDir);
} else {
  console.log("Source directory does not exist:", sourceDir);
}
