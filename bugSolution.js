const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate a long-running task
  const startTime = Date.now();
  setTimeout(() => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    res.send(`Hello World! Request took ${responseTime}ms`);
  }, 5000);
  //Handle client disconnection during long running task
  req.on('close', () => {
    console.log('Client disconnected');
    // Perform cleanup tasks here if necessary (e.g., stop a timer, release resources)
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});