import Markdown from "react-markdown";
import type { Components } from "react-markdown";
import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useChat, type Message } from "@ai-sdk/react";

const EMPTY_STATE_MESSAGE = `
# Welcome!

This is a chat application powered by:

- **[Vercel AI SDK](https://sdk.vercel.ai)** for managing the chat interface.
- **[Cloudflare Workers](https://workers.cloudflare.com)** for running the AI model.
- **[Google Gemini AI](https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai)** as the underlying language model.

Feel free to ask me anything!  I can answer questions, provide summaries, translate text, and more.
`;

const MarkdownComponents: Components = {
  a: (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
    <a
      className="underline"
      {...props}
      target="_blank"
    />
  ),
  ul: (props: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => <ul className="list-disc pl-6" {...props} />,
};

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const hasMessages = messages.length > 0;

  return (
    <>
      <CardContent className="h-[400px] space-y-4">
        <ScrollArea className="h-full w-full">
          <div className="flex flex-col space-y-4">
            {hasMessages ? (
              messages.map((message: Message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-4 rounded-md p-2",
                    message.role === "user"
                      ? "bg-blue-50 text-blue-900"
                      : "bg-gray-50 text-gray-900"
                  )}
                >
                  <Avatar className="h-8 w-8">
                    {message.role === "user" ? (
                      <>
                        <AvatarImage src="https://github.com/kristianfreeman.png" />
                        <AvatarFallback>KF</AvatarFallback>
                      </>
                    ) : (
                      <Bot className="h-8 w-8" />
                    )}
                  </Avatar>
                  <div>
                    <p className="font-semibold mb-2">
                      {message.role === "user" ? "You" : "Gemini AI"}
                    </p>
                    <div className="space-y-2">
                      <Markdown components={MarkdownComponents}>
                        {message.content}
                      </Markdown>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500 h-full space-y-4">
                <Markdown components={MarkdownComponents}>
                  {EMPTY_STATE_MESSAGE}
                </Markdown>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            name="prompt"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </>
  )
}
