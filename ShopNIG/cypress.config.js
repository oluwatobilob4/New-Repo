const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://shopnig.netlify.app/',
    "defaultCommandTimeout": 20000,
    "pageLoadTimeout": 60000,
    "viewportHeight": 800,
    "viewportWidth": 1500,
    watchForFileChanges: false,
    experimentalSessionAndOrigin:true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
