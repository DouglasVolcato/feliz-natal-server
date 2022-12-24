"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvAdapter = void 0;
class EnvAdapter {
    port() {
        return process.env.PORT || "3000";
    }
    mongoUrl() {
        return process.env.MONGO_URL || "";
    }
}
exports.EnvAdapter = EnvAdapter;
