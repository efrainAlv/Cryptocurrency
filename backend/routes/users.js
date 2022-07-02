import { Router } from "express";
import { registerUser, login } from "../services/users.js";

const router = Router();

router.post("/registerUser", registerUser);

router.post("/login", login);

export default router;