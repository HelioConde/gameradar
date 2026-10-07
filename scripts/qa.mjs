import fs from "node:fs";
import assert from "node:assert/strict";

const html=fs.readFileSync("index.html","utf8");
const css=fs.readFileSync("style.css","utf8");
const app=fs.readFileSync("app.js","utf8");

assert.match(html,/id="search-form"/);
assert.match(html,/id="deals-grid"/);
assert.match(html,/id="watch-dialog"/);
assert.match(html,/id="target-dialog"/);
assert.match(css,/@media\(max-width:720px\)/);
assert.match(css,/focus-visible/);
assert.match(app,/cheapshark\.com\/api\/1\.0/i);
assert.match(app,/WATCH_KEY/);
assert.match(app,/loadDeals/);
assert.match(app,/saveTarget/);
assert.match(app,/demoDeals/);
assert.ok(fs.existsSync("sobre.html"));
assert.ok(fs.existsSync("privacidade.html"));
assert.ok(fs.existsSync("termos.html"));

console.log("GameRadar static QA passed");