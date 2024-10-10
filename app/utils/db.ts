import mongoose from 'mongoose';

const connectToDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

export default connectToDB;
