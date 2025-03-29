import { db, message } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import ChatForm from "./components/ChatForm";
import { getSession } from "@/lib/utils";
import ChatComponent from "./components/ChatComponent";

async function ChatId({ params }: { params: Promise<{ chatId: string }> }) {
  const session = await getSession();
  const param = await params;
  const messages = await db
    .select()
    .from(message)
    .where(eq(message.chatId, param.chatId));
  return (
    <div className="grid w-full h-full grid-rows-[1fr_auto]">
      <ChatComponent
        initialMessages={messages}
        chatId={param.chatId}
        session={session}
      />
      <ChatForm chatId={param.chatId} messages={messages} />
    </div>
  );
}

export default ChatId;
