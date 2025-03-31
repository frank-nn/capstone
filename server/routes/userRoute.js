import express from "express";

const router = express.Router();

router.get("/test", getUser);

export default router;
