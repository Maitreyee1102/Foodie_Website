import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

//multiple endpoints using this router
orderRouter.post("/place",authMiddleware,placeOrder);

export default orderRouter;