exports.config = {
  // ====================
  // Appium Configuration
  // ====================
  services: [
    [
      "appium",
      {
        command: "appium",
      },
    ],
  ],
  port: 4720,
  // ====================
  // Test Configurations
  // ====================
  specs: ["./test/specs/**.js"],
  capabilities: [
    {
      "appium:deviceName": "emulator-5554",
      platformName: "android",
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": "com.wdiodemoapp",
      "appium:appActivity": "com.wdiodemoapp.MainActivity",
    },
  ],
  // ====================
  // Framework Configuration
  // ====================
  framework: "mocha",
  mochaOpts: {
    timeout: 60000,
  },
};
