const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
        'mongodb+srv://tejasvinis5904_db_user:TlqkcnH1thEKSJrv@cluster0.zk9ghip.mongodb.net/?appName=Cluster0'
    );
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ MongoDB Error:", error);
  }
};
 module.exports = connectDB;