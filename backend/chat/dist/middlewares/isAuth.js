import jwt, {} from "jsonwebtoken";
export const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({ message: "Please login - No auth Header" });
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
        console.log("Chat middleware :", error);
    }
};
export default isAuth;
//# sourceMappingURL=isAuth.js.map