import { Router } from "express";
import { getTweetController, createTweetController, updateTweetController, deleteTweetController, getAllTweetsController } from "../controllers/tweet.controller";

const tweetRouter = Router();


// Define route paths

tweetRouter.get("/:tweetId", getTweetController)
tweetRouter.get("/get/all", getAllTweetsController)
tweetRouter.post("/", createTweetController)
tweetRouter.delete("/:tweetId", deleteTweetController)
tweetRouter.put("/", updateTweetController)

export default tweetRouter