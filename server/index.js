const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});