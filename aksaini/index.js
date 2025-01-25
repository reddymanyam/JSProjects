// Long-running task
setTimeout(() => {
    console.log("This is a long-running task.");
  }, 0);
  
  // Another task that might get starved
  setTimeout(() => {
    console.log("This task could be starved!");
  }, 0);
  
  // Simulate a long-running synchronous operation
  for (let i = 0; i < 1e6; i++) {
    // Simulating a heavy task
    console.log("hello lengthy task...")
  }
  
  console.log("Event loop is blocked");
  