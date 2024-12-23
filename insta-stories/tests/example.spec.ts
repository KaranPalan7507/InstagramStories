import { test, expect } from "@playwright/test";

test("loading indicator is visible until data is fetched", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const loadingIndicator = await page.locator(".loading-indicator");
  await expect(loadingIndicator).toBeVisible();
});

test("count of user UI elements matches data fetched", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.waitForSelector(".user-list");

  const userListItems = await page.locator(".user-item");
  await expect(userListItems).toHaveCount(8);
});

test("story view interactions", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.waitForSelector(".user-item");

  const firstUserItem = await page.locator(".user-item").first();
  await firstUserItem.click();

  const storyView = await page.locator(".viewer-img-wrapper");
  await expect(storyView).toBeVisible();

  const closeButton = await page.locator(".close");
  await closeButton.click();
  await expect(storyView).not.toBeVisible();
});
