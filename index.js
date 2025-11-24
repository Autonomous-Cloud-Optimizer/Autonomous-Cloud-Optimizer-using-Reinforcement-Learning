// index.js - Cloud Demo Backend with CPU + Memory Metrics
const express = require("express");
const os = require("os");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

// Track CPU usage between calls
let lastCpu = process.cpuUsage();
let lastTime = Date.now();

function getCpuPercent() {
  const now = Date.now();
  const diff = process.cpuUsage(lastCpu);

  const elapsedMs = now - lastTime;
  const cpuTimeMs = (diff.user + diff.system) / 1000;

  lastCpu = process.cpuUsage();
  lastTime = now;

  if (elapsedMs === 0) return 0;

  let cpuPercent = (cpuTimeMs / elapsedMs) * 100;
  return Math.max(0, Math.min(100, cpuPercent));
}

// ------------------------- STATUS ENDPOINT -------------------------
app.get("/status", (req, res) => {
  const mem = process.memoryUsage();

  res.json({
    timestamp: Date.now(),
    uptime_s: parseFloat(process.uptime().toFixed(1)),
    cpus: os.cpus().length,
    cpu_percent: parseFloat(getCpuPercent().toFixed(1)),
    memory_rss_mb: parseFloat((mem.rss / 1024 / 1024).toFixed(2)),
    memory_heap_used_mb: parseFloat((mem.heapUsed / 1024 / 1024).toFixed(2))
  });
});

// -------------------------- CPU BURN ---------------------------
app.get("/burn", (req, res) => {
  const ms = parseInt(req.query.ms) || 800;
  const start = Date.now();

  while (Date.now() - start < ms) {
    Math.sqrt(Math.random() * Date.now());
  }

  res.json({ burned_ms: ms, at: new Date().toISOString() });
});

// --------------------------- START -----------------------------
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
