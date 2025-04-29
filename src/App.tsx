import Chat from "@/components/chat";
import { Card, CardHeader, CardTitle, } from "@/components/ui/card";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-[80%] max-w-2xl rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Workers Vercel AI Starter
          </CardTitle>
          <p className="text-sm text-muted-foreground">Powered by Vercel AI SDK, Cloudflare Workers, and Google Gemini AI</p>
        </CardHeader>
        <Chat />
      </Card>
    </div>
  );
}
