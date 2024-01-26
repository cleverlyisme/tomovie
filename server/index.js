const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { connectDB } = require("./configs/db");
const routes = require("./routes/auth.route");
const environments = require("./utils/environments");

const { PORT } = environments;

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Tomovie app listening on port ${PORT}`);
});
