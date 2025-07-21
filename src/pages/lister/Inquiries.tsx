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

const Inquiries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [replyDialogOpen, setReplyDialogOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Mock data - replace with actual data from your backend
  const inquiries = [
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
    },
  ];

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

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleReply = (inquiry: any) => {
    setSelectedInquiry(inquiry);
    setReplyDialogOpen(true);
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleSendReply = async () => {
    if (!replyMessage.trim()) return;
    
    setIsSending(true);
    try {
      // TODO: Implement send reply logic
      console.log("Sending reply to:", selectedInquiry?.email);
      console.log("Message:", replyMessage);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      // Close dialog and reset form
      setReplyDialogOpen(false);
      setReplyMessage("");
      setSelectedInquiry(null);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Inquiries</h1>
        <p className="text-muted-foreground">
          Manage and respond to property inquiries
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search inquiries..."
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

      {/* Inquiries List */}
      <div className="grid gap-4">
        {filteredInquiries.map((inquiry) => {
          const StatusIcon = getStatusIcon(inquiry.status);
          return (
            <Card key={inquiry.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Contact Info */}
                  <div className="md:w-1/3 space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">{inquiry.name}</h3>
                      <div className="space-y-3 mt-3">
                        <a
                          href={`mailto:${inquiry.email}`}
                          className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          {inquiry.email}
                        </a>
                        <a
                          href={`tel:${inquiry.phone}`}
                          className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          {inquiry.phone}
                        </a>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {formatDate(inquiry.date)}
                        </div>
                      </div>
                    </div>

                    <div>
                      <Link
                        to={`/properties/${inquiry.id}`}
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <Home className="h-4 w-4 mr-2" />
                        {inquiry.property}
                        <ArrowUpRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Message and Actions */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <Badge
                        variant="secondary"
                        className={`${getStatusColor(inquiry.status)} capitalize mb-3`}
                      >
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {inquiry.status}
                      </Badge>
                      <p className="text-muted-foreground leading-relaxed">
                        {inquiry.message}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-3">
                      <Button 
                        className="flex-1 sm:flex-none"
                        onClick={() => handleReply(inquiry)}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Reply
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 sm:flex-none"
                        onClick={() => handleCall(inquiry.phone)}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Empty State */}
        {filteredInquiries.length === 0 && (
          <div className="text-center py-12 bg-muted/10 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">No inquiries found</h3>
            <p className="text-muted-foreground">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filters"
                : "You haven't received any inquiries yet"}
            </p>
          </div>
        )}
      </div>

      {/* Reply Dialog */}
      <Dialog open={replyDialogOpen} onOpenChange={setReplyDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reply to {selectedInquiry?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Original Message</Label>
              <p className="text-sm text-muted-foreground border rounded-md p-3">
                {selectedInquiry?.message}
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reply">Your Reply</Label>
              <Textarea
                id="reply"
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="Type your reply here..."
                className="min-h-[100px]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setReplyDialogOpen(false);
                setReplyMessage("");
                setSelectedInquiry(null);
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSendReply}
              disabled={!replyMessage.trim() || isSending}
            >
              {isSending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Reply
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Inquiries; 