import jwt, {} from "jsonwebtoken";
export const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                message: "Please Login - No auth header"
            });
            return;
        }
        const token = authHeader.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (!decode || !decode.user) {
            res.status(401).json({ message: "unauthorized user" });
            return;
        }
        req.user = decode.user;
        next();
    }
    catch (error) {
        console.log("middleware error: ", error);
    }
};
//# sourceMappingURL=isAuth.js.map