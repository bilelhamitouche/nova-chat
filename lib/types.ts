import { ReactNode } from "react";

export type Feature = {
  icon: ReactNode;
  title: string;
  text: string;
};

export type Message = {
  id: string;
  content: string;
  createdAt: Date;
  senderId: string;
  chatId: string;
};

export type Chat = {
  id: string;
  name: string;
  createdAt: Date;
};
