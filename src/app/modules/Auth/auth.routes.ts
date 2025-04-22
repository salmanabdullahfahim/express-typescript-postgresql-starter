import express from "express";
import { AuthControllers } from "./auth.controllers";
import limiter from "../../middleware/rateLimiter";
import auth from "../../middleware/auth";

const router = express.Router();

router.post("/login", AuthControllers.login);

export const AuthRoutes = router;
