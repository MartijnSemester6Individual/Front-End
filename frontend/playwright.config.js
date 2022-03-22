const config = {
  testDir: '__tests__/e2e',

   // Forbid test.only on CI
   forbidOnly: !!process.env.CI,

  use: {
    browserName: 'chromium',
    baseURL: "http://localhost:3000",
    actionTimeout:10000,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
};

module.exports = config;