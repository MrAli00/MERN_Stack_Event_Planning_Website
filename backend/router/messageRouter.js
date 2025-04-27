import express from 'express';
import { sendMessage } from '../controller/messageController.js';

const router = express.Router();

router.post("/api/v1/message/send", sendMessage)

export default router;