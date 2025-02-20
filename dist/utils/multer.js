"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterHelper = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
class MulterHelper {
    static destinationPath(req, file, cb) {
        const folderName = req.url.indexOf('customer') != -1
            ? 'customers'
            : req.url.indexOf('advertise') != -1
                ? 'advertises'
                : '';
        const path = `uploads/${folderName}/`;
        (0, fs_1.mkdirSync)(path, { recursive: true });
        cb(null, path);
    }
    static customFileName(req, file, cb) {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const originalName = file.originalname.split('.')[0];
        const extension = (0, path_1.extname)(file.originalname);
        const fileName = `${originalName}-${uniqueSuffix}${extension}`;
        cb(null, fileName);
    }
}
exports.MulterHelper = MulterHelper;
//# sourceMappingURL=multer.js.map