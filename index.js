// index.js - Express demo with static frontend, status, and burn endpoint
const express = require("express");
const os = require("os");
const process = require("process");

const app = express();
const port = process.env.PORT || 3000;

// Serve static frontend from /public
app.use(express.static("public"));

// status endpoint - shows memory, uptime, cpus, timestamp
app.get("/status", (req, res) => {
  const mem = process.memoryUsage();
  res.json({
    timestamp: Date.now(),
    uptime_s: Number(process.uptime().toFixed(1)),
    cpus: os.cpus().length,
    memory_rss_mb: Number((mem.rss / 1024 / 1024).toFixed(2)),
    memory_heap_total_mb: Number((mem.heapTotal / 1024 / 1024).toFixed(2)),
    memory_heap_used_mb: Number((mem.heapUsed / 1024 / 1024).toFixed(2))
  });
});

// burn CPU for a number of milliseconds (simulate heavy work)
app.get("/burn", (req, res) => {
  const ms = Math.max(0, parseInt(req.query.ms) || 1000);
  const start = Date.now();
  // busy loop for ms milliseconds (simple simulation)
  while (Date.now() - start < ms) {
    Math.sqrt(Math.random() * Date.now());
  }
  res.json({ burned_ms: ms, at: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Demo app listening on port ${port}`);
});
