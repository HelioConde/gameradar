const { test, expect } = require("@playwright/test");

test("filters, watchlist and language stay usable", async ({ page }) => {
  await page.route("**cheapshark.com/**", async route => {
    await route.fulfill({ status: 200, contentType: "application/json", body: "[]" });
  });

  await page.goto("/");
  await expect(page.locator("#deals-grid")).toBeVisible();

  await page.locator("#price-filter").selectOption("20");
  await expect(page.locator("#price-filter")).toHaveValue("20");
  await page.locator("#saving-filter").selectOption("50");
  await expect(page.locator("#saving-filter")).toHaveValue("50");

  await page.locator("#watchlist-toggle").click();
  await expect(page.locator("#watch-dialog")).toBeVisible();
  await page.locator("#watch-close").click();

  await page.locator("#language-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});
