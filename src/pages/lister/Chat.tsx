import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Filter,
  Mail,
  Phone,
  Calendar,
  Home,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  XCircle,
  Send,
  Loader2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const initialChats = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+260 97 1234567",
    property: "Modern Villa with Pool",
    message:
      "I'm interested in viewing this property. When would be a good time to schedule a visit?",
    status: "new",
    date: "2024-02-20T10:30:00",
    conversation: [
      { sender: "inquirer", text: "I'm interested in viewing this property. When would be a good time to schedule a visit?", timestamp: "2024-02-20T10:30:00" },
    ],
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    phone: "+260 96 7654321",
    property: "Luxury Apartment",
    message:
      "Hello, I'd like to know if the price is negotiable and what's included in the maintenance fees.",
    status: "responded",
    date: "2024-02-19T15:45:00",
    conversation: [
      { sender: "inquirer", text: "Hello, I'd like to know if the price is negotiable and what's included in the maintenance fees.", timestamp: "2024-02-19T15:45:00" },
      { sender: "lister", text: "Hi Sarah, the price is negotiable. Maintenance covers water and security.", timestamp: "2024-02-19T16:00:00" },
    ],
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "+260 95 1122334",
    property: "Family Home",
    message:
      "Is this property still available? I'm looking to move in within the next month.",
    status: "closed",
    date: "2024-02-18T09:15:00",
    conversation: [
      { sender: "inquirer", text: "Is this property still available? I'm looking to move in within the next month.", timestamp: "2024-02-18T09:15:00" },
      { sender: "lister", text: "Hi Michael, yes, it's available. When would you like to view it?", timestamp: "2024-02-18T09:30:00" },
      { sender: "inquirer", text: "This weekend would be great!", timestamp: "2024-02-18T09:45:00" },
    ],
  },
];

const Chat = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [chats, setChats] = useState(initialChats);
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [showConversation, setShowConversation] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
      case "responded":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "closed":
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new":
        return Clock;
      case "responded":
        return CheckCircle2;
      case "closed":
        return XCircle;
      default:
        return Clock;
    }
  };

  const filteredChats = chats.filter((chat) => {
    const matchesSearch =
      chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || chat.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Chat</h1>
        <p className="text-muted-foreground">All your client conversations</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search chats..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="responded">Responded</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        {filteredChats.map((chat) => (
          <Card key={chat.id} className="flex items-center justify-between p-4">
            <div>
              <div className="font-semibold">{chat.name}</div>
              <div className="text-sm text-muted-foreground">{chat.property}</div>
              <div className="text-xs text-muted-foreground truncate max-w-xs">{chat.conversation[chat.conversation.length-1]?.text}</div>
            </div>
            <Button asChild>
              <Link to={`/lister/chat/${chat.id}`}>View Conversation</Link>
            </Button>
          </Card>
        ))}
        {filteredChats.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No chats found</h3>
            <p className="text-muted-foreground">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filters"
                : "You haven't received any chats yet"}
            </p>
          </div>
        )}
      </div>
      {/* Conversation Details Modal (to be implemented in a new file) */}
    </div>
  );
};

export { initialChats };
export default Chat; 