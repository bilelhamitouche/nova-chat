"use client";

import { Message } from "@/lib/types";
import Image from "next/image";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";

export default function ChatComponent({
  initialMessages,
  chatId,
  session,
}: {
  initialMessages: Message[];
  chatId: string;
  session: any;
}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
      cluster: "eu",
    });
    const channel = pusher.subscribe(chatId);
    channel.bind("chat", (data: Message) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => {
      pusher.unsubscribe(chatId);
    };
  }, []);
  return (
    <ul className="flex flex-col gap-1 p-2 w-full">
      {messages.map((message) => (
        <li
          key={message.id}
          className={`chat ${message.senderId === session?.user.id ? "chat-end" : "chat-start"}`}
        >
          {session?.user.image ? (
            <Image
              src={session?.user.image}
              alt="user avatar"
              className="chat-image size-8"
            />
          ) : (
            <div className="flex justify-center items-center rounded-full avatar chat-image size-8 bg-primary text-primary-content">
              {session?.user.name[0].toUpperCase()}
            </div>
          )}
          <div
            className={`chat-bubble ${message.senderId === session?.user.id ? "chat-bubble-primary" : ""}`}
          >
            {message.content}
          </div>
        </li>
      ))}
    </ul>
  );
}
