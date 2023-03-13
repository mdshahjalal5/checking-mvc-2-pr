const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
// const DBConnect = require("./utils/dbConnect");

const app = require("./app");

// database connection
// DBConnect();

main().catch(err => console.log(err));

async function main() {
  const goosRes = await mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
console.log(goosRes, 'gooes');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});

