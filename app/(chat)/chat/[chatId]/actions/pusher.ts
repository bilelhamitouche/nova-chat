"use server";

import { db, message } from "@/lib/drizzle";
import { getSession } from "@/lib/utils";
import Pusher from "pusher";

export type State = {
  err: "";
};

export async function createMessageAction(_state: State, formData: FormData) {
  const session = await getSession();
  const messageField = formData.get("message") as string;
  const chatId = formData.get("chatId") as string;
  try {
    console.log("chatId: " + chatId);
    const currentMessage = await db
      .insert(message)
      .values({
        content: messageField,
        senderId: session?.user.id as string,
        chatId: chatId,
        createdAt: new Date(),
      })
      .returning();
    console.log(currentMessage);
    console.log("here right now");
    const pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID!,
      key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
      secret: process.env.PUSHER_APP_SECRET!,
      cluster: "eu",
      useTLS: true,
    });
    await pusher.trigger(chatId, "chat", currentMessage[0]);
  } catch (err) {
    console.log(err);
    return {
      err: "Failed to create message",
    };
  }
}
