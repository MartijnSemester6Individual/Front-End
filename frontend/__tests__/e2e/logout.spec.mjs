import { test } from '@playwright/test';
import axios from 'axios';

import { expect } from "@playwright/test"
import { matchers } from "expect-playwright"

expect.extend(matchers)

const body = JSON.stringify({
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "username": "test",
  "tag": "testuser",
  "email": "test@hotmail.com",
  "bio": "a software engineer",
  "website": "softwareengineer.com",
  "location": "America",
  "role": "ADMIN",
  "password": "test"
})

const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;

// before we login, we need to register a user
// test.beforeAll(async ({ page }) => {
//   axios.post(url, body, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
// })

test.describe('Run tests', () => {


  test('Post tweet then delete tweet', async ({ page }) => {

    // Go to http://localhost:3000/login
    await page.goto('http://localhost:3000/login');

    // Click [placeholder="Your Email"]
    await page.locator('[placeholder="Your Email"]').click();

    // Fill [placeholder="Your Email"]
    await page.locator('[placeholder="Your Email"]').fill('test@hotmail.com');

    // Press Tab
    await page.locator('[placeholder="Your Email"]').press('Tab');

    // Fill [placeholder="Your Password"]
    await page.locator('[placeholder="Your Password"]').fill('test');

    // Press Enter
    await Promise.all([
      page.waitForNavigation(/*{ url: 'http://localhost:3000/' }*/),
      page.locator('[placeholder="Your Password"]').press('Enter')
    ]);

    // Click text=HomeTweet ago >> textarea
    await page.locator('text=HomeTweet >> textarea').click();

    // Fill text=HomeTweet >> textarea
    await page.locator('text=HomeTweet >> textarea').fill('test');

    // Click text=testTweet >> button
    await page.locator('text=testTweet >> button').click();

    // Click .group.flex >> nth=0
    await page.locator('.group.flex').first().click();

  });


  test('Should navigate to home page and login and then logout', async ({ page }) => {
    // Go to http://localhost:3000/login
    await page.goto('http://localhost:3000/login');

    // Click [placeholder="Your Email"]
    await page.locator('[placeholder="Your Email"]').click();

    // Fill [placeholder="Your Email"]
    await page.locator('[placeholder="Your Email"]').fill('test@hotmail.com');

    // Press Tab
    await page.locator('[placeholder="Your Email"]').press('Tab');

    // Fill [placeholder="Your Password"]
    await page.locator('[placeholder="Your Password"]').fill('test');

    // Press Enter
    await Promise.all([
      page.waitForNavigation(/*{ url: 'http://localhost:3000/' }*/),
      page.locator('[placeholder="Your Password"]').press('Enter')
    ]);

    // Click div:has-text("martijn@string") >> nth=3
    await Promise.all([
      page.waitForNavigation(/*{ url: 'http://localhost:3000/login' }*/),
      page.locator('div:has-text("martijn@string")').nth(3).click()
    ]);

    await expect(page).toMatchText("h1", "Log in to your account")
  })


  test('Should navigate to home page and login', async ({ page }) => {
    // Go to http://localhost:3000/login
    await page.goto('http://localhost:3000/login');

    // Click [placeholder="Your Email"]
    await page.locator('[placeholder="Your Email"]').click();

    // Fill [placeholder="Your Email"]
    await page.locator('[placeholder="Your Email"]').fill('test@hotmail.com');

    // Press Tab
    await page.locator('[placeholder="Your Email"]').press('Tab');

    // Fill [placeholder="Your Password"]
    await page.locator('[placeholder="Your Password"]').fill('test');

    // Press Enter
    await Promise.all([
      page.waitForNavigation(/*{ url: 'http://localhost:3000/' }*/),
      page.locator('[placeholder="Your Password"]').press('Enter')
    ]);

    await expect(page).toMatchText("h2", "Home")

  });

})

