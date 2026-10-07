const { test, expect } = require("@playwright/test");

test.describe("Live CheapShark smoke", () => {
  test.skip(process.env.LIVE_API_SMOKE !== "1", "Dedicated production API smoke only.");

  test("loads real deals from CheapShark in production", async ({ page }) => {
    await page.goto("./?q=Hades", { waitUntil: "domcontentloaded" });
    await expect(page.locator("#status")).toHaveText("Radar atualizado.", { timeout: 25000 });
    await expect(page.locator("#source-note")).toHaveText("Preços via CheapShark");
    await expect(page.locator(".deal-card").first()).toBeVisible();
    await expect(page.locator(".deal-card a").first()).toHaveAttribute("href", /https:\/\//);
  });
});
