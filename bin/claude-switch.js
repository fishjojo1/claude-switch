#!/usr/bin/env node
const { execFileSync } = require("child_process");
const { join } = require("path");

const script = join(__dirname, "..", "claude-switch");

try {
  execFileSync("bash", [script, ...process.argv.slice(2)], { stdio: "inherit" });
} catch (e) {
  process.exit(e.status || 1);
}
