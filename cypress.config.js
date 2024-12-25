const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.bootcampshub.ai/branch-landing-page",
    video: true,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      // charts: true,
      // reportPageTitle: "custom-title",
      // embeddedScreenshots: true,
      // inlineAssets: true,
      // saveAllAttempts: false,
      reportDir: "cypress/report",
      html: true,
      json: false,
      overwrite: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
