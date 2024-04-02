import express from "express";
import {
  accountActivationByOTP,
  getLoggedInUser,
  login,
  registerUser,
  userLogout,
} from "../controllers/authController.js";
import tokenVerify from "../middlewares/tokenVerify.js";

// init router form express
const router = express.Router();

// routing
router.post("/register", registerUser);
router.post("/account-activate-by-otp/:token", accountActivationByOTP);
router.post("/login", login);
router.get("/me", tokenVerify, getLoggedInUser)
router.post("/logout", userLogout);

// export default
export default router;
