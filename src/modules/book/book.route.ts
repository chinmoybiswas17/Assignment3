import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "./book.controller";

const router = express.Router();

// Helper to catch async errors
const asyncHandler =
  (fn: any) =>
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.post("/", asyncHandler(createBook));
router.get("/", asyncHandler(getAllBooks));
router.get("/:bookId", asyncHandler(getBookById));
router.put("/:bookId", asyncHandler(updateBook));
router.delete("/:bookId", asyncHandler(deleteBook));

export default router;
