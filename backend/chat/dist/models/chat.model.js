import mongoose from "mongoose";
const chatSchema = new mongoose.Schema({
    users: [{ type: String, required: true }],
    latestMessage: {
        text: String,
        sender: String
    }
}, { timestamps: true });
export const Chat = mongoose.model("Chat", chatSchema);
//# sourceMappingURL=chat.model.js.map