const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Uncommon error:  If you run this server and make a request that takes a long time to process (maybe a large database query or slow external API call) and the client disconnects before the server can respond, the server will not handle that gracefully.
//This is not a typical error which may result in application crash or failure, but rather a performance issue and a possible memory leak.