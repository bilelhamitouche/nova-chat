"use client";

import { SetStateAction, useActionState, useEffect, useState } from "react";
import { createMessageAction } from "../actions/pusher";
import Pusher from "pusher-js";
import { Message } from "@/lib/types";

const initialState = {
  err: "",
};

function ChatForm({ chatId }: { chatId: string; messages: Message[] }) {
  const [error, action, isPending] = useActionState(
    createMessageAction,
    initialState,
  );
  return (
    <form action={action} className="flex items-center p-2 join">
      <input
        type="text"
        name="message"
        placeholder="Enter message"
        className="w-full rounded-l-md input"
      />
      <input
        type="text"
        name="chatId"
        className="hidden"
        value={chatId}
        readOnly
      />
      <button
        type="submit"
        className="rounded-r-md btn btn-primary"
        disabled={isPending}
      >
        Send
      </button>
    </form>
  );
}

export default ChatForm;
