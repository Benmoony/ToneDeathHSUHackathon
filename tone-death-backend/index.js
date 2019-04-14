/*
  This is the entry point for the whole web-app
*/

// Bring in our dependencies
const app = require('express')();

const port = process.env.PORT || 5000;
// Turn on that server!
app.listen(port, () => {
  console.log('App listening on port 5000');
});
