const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};
  
app.use(cors(corsOptions));
app.use(bodyParser.json())

app.get('/', (_, res)=> res.send('Hello API'))

app.use('/user', require('./controllers/user'))

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});