"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
// Helper to catch async errors
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
router.post("/", asyncHandler(book_controller_1.createBook));
router.get("/", asyncHandler(book_controller_1.getAllBooks));
router.get("/:bookId", asyncHandler(book_controller_1.getBookById));
router.put("/:bookId", asyncHandler(book_controller_1.updateBook));
router.delete("/:bookId", asyncHandler(book_controller_1.deleteBook));
exports.default = router;
