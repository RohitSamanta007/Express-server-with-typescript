"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Hello from server with  Typescript"
    });
});
app.listen(port, () => console.log("Server is running on port no : ", port));
//# sourceMappingURL=server.js.map