import express from "express";
import {
  accountActivationByOTP,
  login,
  profile,
  registerUser,
} from "../controllers/authController.js";
import tokenVerify from "../middlewares/tokenVerify.js";

// init router form express
const router = express.Router();

// routing
router.post("/register", registerUser);
router.post("/account-activate-by-otp/:token", accountActivationByOTP);
router.post("/login", login);
router.get("/profile", tokenVerify, profile)

// export default
export default router;
