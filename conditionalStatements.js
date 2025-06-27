// Function to launch the browser using if-else
function launchBrowser(browserName) {
    //let browserName="Chrome"
  if (browserName.toLowerCase() === "chrome") {
    console.log("Launching Chrome browser...");
  } else {
    console.log("Launching a non-Chrome browser...");
  }
}

// Function to run tests using switch-case
function runTests(testType) {
    //let testType="sanity"
  switch (testType.toLowerCase()) {
    case "smoke":
      console.log("Running smoke tests...");
      break;
    case "sanity":
      console.log("Running sanity tests...");
      break;
    case "regression":
      console.log("Running regression tests...");
      break;
    default:
      console.log("Unknown test type. Running smoke tests by default...");
  }
}

// Calling the functions
launchBrowser("Chrome");
runTests("regression");
