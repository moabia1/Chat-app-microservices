import axios from "axios";
import tryCatch from "../config/try-catch.js";
import { Chat } from "../models/chat.model.js";
import { Messages } from "../models/messages.model.js";
export const createNewChat = tryCatch(async (req, res) => {
    const userId = req.user?._id;
    const { otherUserId } = req.body;
    if (!otherUserId) {
        res.status(400).json({ message: "Other user is required" });
        return;
    }
    const existingChat = await Chat.findOne({
        users: { $all: [userId, otherUserId], $size: 2 }
    });
    if (existingChat) {
        res.json({ message: "chat already exists", chatId: existingChat._id });
        return;
    }
    const newChat = await Chat.create({
        users: [userId, otherUserId],
    });
    res.status(201).json({ message: "New chat created", chatId: newChat._id });
});
export const getAllChats = tryCatch(async (req, res) => {
    const userId = req.user?._id;
    if (!userId) {
        res.status(400).json({ message: "UserId missing" });
        return;
    }
    const chats = await Chat.find({ users: userId }).sort({ updatedAt: -1 });
    const chatWithUserData = await Promise.all(chats.map(async (chat) => {
        const otherUserId = chat.users.find(id => id !== userId);
        const unseenCount = await Messages.countDocuments({
            chatId: chat._id,
            sender: { $ne: userId },
            seen: false
        });
        try {
            const { data } = await axios.get(`${process.env.USER_SERVICE}/api/v1/user/${otherUserId}`);
            return {
                user: data,
                chat: {
                    ...chat.toObject(),
                    latestMessage: chat.latestMessage || null,
                    unseenCount
                }
            };
        }
        catch (error) {
            console.log(error);
            return {
                user: { _id: otherUserId, name: "Unknown user" },
                chat: {
                    ...chat.toObject(),
                    latestMessage: chat.latestMessage || null,
                    unseenCount
                }
            };
        }
    }));
    res.json({
        chats: chatWithUserData
    });
});
export const sendMessage = tryCatch(async (req, res) => {
    const senderId = req.user?._id;
    const { chatId, text } = req.body;
    // const imageFile = req.file
});
//# sourceMappingURL=chat.js.map