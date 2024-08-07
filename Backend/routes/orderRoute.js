import express from "express"
import authMiddleware from "../middleware/auth.js"
import { listOrders, placeOrder, updateStatus, userOrder, verifyOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

//multiple endpoints using this router
orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userOrder",authMiddleware,userOrder);
orderRouter.get('/list',listOrders);
orderRouter.post('/status',updateStatus);


export default orderRouter;