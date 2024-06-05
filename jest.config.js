module.exports = {
  bail: true, 
  coverageProvider: "v8",

  testMatch: [
    "<rootDir>/src/**/*.spec.js" // rootDir makes the test ignore the node_modules file, making the test faster and testing just where it actually needs.
  ],
}