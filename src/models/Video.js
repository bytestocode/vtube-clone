// 몽구스에게 데이터 구조를 알려줘야 함
import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    ratings: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
