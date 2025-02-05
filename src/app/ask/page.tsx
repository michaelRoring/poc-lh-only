"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: number;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [scrollAreaRef]); // Updated dependency

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        content:
          "This is a simulated response from the chatbot. I can provide information on a wide range of topics. Feel free to ask me anything!",
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-blue-500" />
          <h1 className="text-xl font-bold text-gray-800">Ask Alfred</h1>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="text-blue-500 border-blue-500 hover:bg-blue-50"
          onClick={() => setMessages([])}
        >
          New Chat
        </Button>
      </header>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 space-y-4" ref={scrollAreaRef}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex flex-col ${
                msg.role === "user" ? "items-end" : "items-start"
              }`}
            >
              <div className="text-xs text-gray-500 mb-1">{`#${
                msg.id
              } • ${formatTimestamp(msg.timestamp)}`}</div>
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${
                  msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User className="h-5 w-5" />
                  ) : (
                    <Bot className="h-5 w-5" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex space-x-2"
        >
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
