import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";

// init router form express
const router = express.Router();

// routing
router.route("/").get(getAllUser).post(createUser);
router
  .route("/:id")
  .delete(deleteUser)
  .put(updateUser)
  .patch(updateUser)
  .get(getSingleUser);

// export default
export default router;
