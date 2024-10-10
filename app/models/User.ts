import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  orders: {
    items: string[];
    date: Date;
  }[];
  projects: {
    id: string;
    title: string;
    description: string;
    date: Date;
    tasks: string[];
  }[];
}

const UserSchema: Schema<IUser> = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  orders: [{ items: [String], date: { type: Date, default: Date.now } }],
  projects: [
    {
      id: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      date: { type: Date, default: Date.now },
      tasks: { type: [String], default: [] },
    },
  ],
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
