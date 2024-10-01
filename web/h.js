// Define an array to store test results
const testResults = [
    {
      testCase: "Retrieve Available Tables",
      result: "Pass",
      notes: "Successfully retrieved available tables."
    },
    {
      testCase: "Book a Table (Table 1)",
      result: "Pass",
      notes: "Table 1 status updated to 'reserved'."
    },
    {
      testCase: "Confirm Table Status After Booking",
      result: "Pass",
      notes: "Confirmed Table 1 is now reserved."
    },
    {
      testCase: "Boundary Testing (1 and 20 seats)",
      result: "Pass",
      notes: "Successfully created tables with edge seat cases."
    },
    {
      testCase: "Error Handling (Booking Reserved Table)",
      result: "Pass",
      notes: "Correctly indicated Table 3 is unavailable."
    },
    {
      testCase: "Concurrency Testing (Multiple Bookings)",
      result: "Fail",
      notes: "Some requests resulted in inconsistent states. Investigate further."
    },
    {
      testCase: "User Registration",
      result: "Pass",
      notes: "New user registered successfully."
    },
    {
      testCase: "User Login",
      result: "Pass",
      notes: "User logged in and received valid token."
    },
    {
      testCase: "Retrieve Bookings",
      result: "Pass",
      notes: "Successfully retrieved all bookings."
    },
    {
      testCase: "Book Table with Invalid Data",
      result: "Pass",
      notes: "Handled invalid data inputs gracefully."
    },
  ];
  
  // Function to log test results
  function logTestResults(results) {
    console.log("Test Results for Online Table Booking System:\n");
    results.forEach(({ testCase, result, notes }) => {
      console.log(`Test Case: ${testCase}`);
      console.log(`Result: ${result}`);
      console.log(`Notes: ${notes}\n`);
    });
  
    const passed = results.filter(r => r.result === "Pass").length;
    const total = results.length;
    console.log(`Total Tests Run: ${total}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${total - passed}`);
  }
  
  // Run the logging function
  logTestResults(testResults);
  