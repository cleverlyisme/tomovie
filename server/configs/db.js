const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGO_URI, {
      autoIndex: true,
      autoCreate: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = { connectDB };
