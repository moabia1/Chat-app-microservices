"use client";
import ChatSidebar from "@/components/ChatSidebar";
import Loading from "@/components/Loading";
import { chatService, useAppData, User } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import axios from "axios";

export interface Message {
  _id: string;
  chatId: string;
  sender: string;
  text?: string;
  image?: {
    url: string;
    publicId: string;
  };
  messageType: "text" | "image";
  seen: boolean;
  seenAt?: string;
  createdAt: string;
}

const ChatApp = () => {
  const {
    loading,
    isAuth,
    logoutUser,
    chats,
    user: loggedinUser,
    users,
    fetchChats,
    setChats,
  } = useAppData();

  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const router = useRouter();

  useEffect(() => {
    if (!isAuth && !loading) {
      router.push("/login");
    }
  }, [isAuth, router, loading]);

  const handleLogout = () => logoutUser();

  async function fetchChat() {
    const token = Cookies.get("token");
    try {
      const { data } = await axios.get(`${chatService}/api/v1/message/${selectedUser}`, {
        headers: {
        Authorization:`Bearer ${token}`
        }
      })
      setMessages(data.messages)
      setUser(data.user)
      await fetchChats()
    } catch (error) {
      console.log(error)
      toast.error("Failed to load messages")
    }
  }
  
  async function createChat(u: User) {
    const token = Cookies.get("token")
    try {
      const { data } = await axios.post(`${chatService}/api/v1/chat/new`, { otherUserId: u._id }, {
        headers: {
        Authorization:`Bearer ${token}`
        }
      })
      
      setSelectedUser(data.chatId)
      setShowAllUsers(false)
      await fetchChats()
    } catch (error) {
      toast.error("Failed to start chat")
    }
  }

  useEffect(() => {
    if (selectedUser) {
      fetchChat()
    }
  },[selectedUser])

  if (loading) return <Loading />;
  return (
    <div className="min-h-screen flex bg-gray-900 text-white relative overflow-hidden">
      <ChatSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setShowAllUsers={setShowAllUsers}
        showAllUsers={showAllUsers}
        users={users}
        loggedinUser={loggedinUser}
        chats={chats}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        handleLogout={handleLogout}
        createChat={createChat}
      />

      <div className="flex flex-1 flex-col justify-between p-4 backdrop-blur-xl bg-white/5 border border-white/10">
        
      </div>
    </div>
  );
};

export default ChatApp;
