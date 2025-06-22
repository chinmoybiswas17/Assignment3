import express from "express";
import { createBorrow, getBorrowSummary } from "./borrow.controller";

const router = express.Router();

const asyncHandler =
  (fn: any) =>
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.post("/", asyncHandler(createBorrow));
router.get("/", asyncHandler(getBorrowSummary));

export default router;
