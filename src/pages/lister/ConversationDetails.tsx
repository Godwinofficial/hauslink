import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { initialChats } from "./Inquiries"; // Or move initialChats to a shared file if needed

const ConversationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chat = initialChats.find((c) => String(c.id) === String(id));
  const [messageInput, setMessageInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [conversation, setConversation] = useState(chat?.conversation || []);

  if (!chat) {
    return <div className="p-8 text-center">Conversation not found.</div>;
  }

  const handleSendMessage = async () => {
    if (!messageInput.trim()) return;
    setIsSending(true);
    try {
      const now = new Date().toISOString();
      setConversation((prev) => [
        ...prev,
        { sender: "lister", text: messageInput, timestamp: now },
      ]);
      setMessageInput("");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8 space-y-4">
      <Button variant="outline" onClick={() => navigate(-1)} className="mb-4">Back to Chat</Button>
      <Card className="p-4">
        <div className="font-bold text-lg mb-2">Chat with {chat.name}</div>
        <div className="text-sm text-muted-foreground mb-4">Property: {chat.property}</div>
        <div className="flex flex-col gap-2 h-80 overflow-y-auto bg-muted rounded p-2 mb-2">
          {conversation.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === "lister" ? "justify-end" : "justify-start"}`}>
              <div className={`rounded-lg px-3 py-2 max-w-xs ${msg.sender === "lister" ? "bg-primary text-white" : "bg-white text-black"}`}>
                <div className="text-xs opacity-70 mb-1">{msg.sender === "lister" ? "You" : chat.name}</div>
                <div>{msg.text}</div>
                <div className="text-[10px] opacity-50 mt-1 text-right">{new Date(msg.timestamp).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 border rounded px-2 py-1"
            value={messageInput}
            onChange={e => setMessageInput(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={e => { if (e.key === 'Enter') handleSendMessage(); }}
            disabled={isSending}
          />
          <Button onClick={handleSendMessage} disabled={isSending || !messageInput.trim()}>
            {isSending ? <Loader2 className="animate-spin h-4 w-4" /> : "Send"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ConversationDetails; 