const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { connectDB } = require("./configs/db");
const authRoute = require("./routes/auth.route");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use(authRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Tomovie app listening on port ${PORT}`);
});
