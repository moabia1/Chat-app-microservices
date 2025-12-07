"use client"
import React, { createContext, useContext, useEffect, useState } from "react"
import { io, Socket } from "socket.io-client"
import { chatService, useAppData } from "./AppContext"

interface socketContextType{
  socket: Socket | null
  onlineUsers : string[]
}

const SocketContext = createContext<socketContextType>({
  socket: null,
  onlineUsers:[]
})

interface ProviderProps{
  children:React.ReactNode;
}

export const SocketProvider = ({ children }: ProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [onlineUsers, setOnlineUsers] = useState<string[]>([])
  const { user } = useAppData();
  
  useEffect(() => {
    if (!user?._id) return
    
    const newSocket = io(chatService, {
      query: {
        userId: user._id
      }
    })
    setSocket(newSocket)

    newSocket.on("getOnlineUser", (users: string[]) => {
      setOnlineUsers(users)
    });
    return () => {
      newSocket.disconnect()
    }
  }, [user?._id])
  
  return <SocketContext.Provider value={{socket,onlineUsers}}>
    {children}
  </SocketContext.Provider>
}

export const socketData = () => useContext(SocketContext)
