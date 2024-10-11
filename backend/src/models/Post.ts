//data model for the blog
import mongoose, { Schema, Document } from "mongoose";

export interface Ipost extends Document {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

const postSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model<Ipost>("Post", postSchema);

export default Post;
