import { test, expect } from "@playwright/test";

test("user can log in to Sauce Demo", async ({ page }) => {
  const username = process.env.TEST_USERNAME;
  const password = process.env.TEST_PASSWORD;

  if (!username || !password) {
    throw new Error(
      "TEST_USERNAME and TEST_PASSWORD environment variables must be set",
    );
  }

  await page.goto("/");
  await page.getByPlaceholder("Username").fill(username);
  await page.getByPlaceholder("Password").fill(password);
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText("tjghj")).toBeVisible();
});
