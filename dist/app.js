"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const book_route_1 = __importDefault(require("./modules/book/book.route"));
const borrow_route_1 = __importDefault(require("./modules/borrow/borrow.route"));
const errorHandler_1 = require("./modules/middleware/errorHandler");
const app = (0, express_1.default)();
// Middleware setup
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Root endpoint.
app.get("/", (req, res) => {
    res.send("Library Management API is running!");
});
// Route registration
app.use("/api/books", book_route_1.default);
app.use("/api/borrow", borrow_route_1.default);
//404 Not Found Handler
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "API not found",
        error: {
            path: req.originalUrl,
            method: req.method,
        },
    });
});
// Global error handler.
app.use(errorHandler_1.globalErrorHandler);
exports.default = app;
