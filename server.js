/* Require */
const express = require('express');
const app = express();
const Port = 3000;

/* Tcp:Http */
/* Arguments & Properties */
/* Export Functions */
/* Local Functions */
/* Execution & Test Data */
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
/* Exports */