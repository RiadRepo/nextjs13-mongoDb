import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Use a connection object
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      
    }
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
