import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get('/watch', videoRouter);

export default videoRouter;