const express = require('express');
const app = express();

app.use(express.static('build'));

app.listen(8080, function () {
  console.log('hi');
});
