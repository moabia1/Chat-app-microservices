const tryCatch = (handler) => {
    return async (req, res, next) => {
        try {
            return handler(req, res, next);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
};
export default tryCatch;
//# sourceMappingURL=try-catch.js.map