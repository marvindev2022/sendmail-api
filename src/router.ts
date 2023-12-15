import express from "express";
import sendMailController from "./controller/mailsend/sendMailControler";
const router = express();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send("Online");
});
router.post("/sendmail", sendMailController);

export default router;
