import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/vtube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 몽고db 서버와의 연결상태 확인
const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB")
const handleError = (error) => console.log("❌ DB Error", error);

// 연결 중 에러 발생시 handleError 함수 콜백
db.on("error", handleError);
// 연결 될 때 handleOpen 함수 콜백
db.once("open", handleOpen);