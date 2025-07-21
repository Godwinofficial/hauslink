import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TrendingUp,
  TrendingDown,
  Eye,
  MessageSquare,
  Heart,
  Share2,
  Calendar,
} from "lucide-react";

const Analytics = () => {
  // Mock data - replace with actual data from your backend
  const stats = [
    {
      label: "Total Views",
      value: "2.4K",
      change: "+15%",
      trend: "up",
      icon: Eye,
    },
    {
      label: "Total Inquiries",
      value: "48",
      change: "+23%",
      trend: "up",
      icon: MessageSquare,
    },
    {
      label: "Saved Listings",
      value: "156",
      change: "+8%",
      trend: "up",
      icon: Heart,
    },
    {
      label: "Shares",
      value: "32",
      change: "-5%",
      trend: "down",
      icon: Share2,
    },
  ];

  const topProperties = [
    {
      id: 1,
      title: "Modern Villa with Pool",
      views: 845,
      inquiries: 24,
      trend: "up",
      percentage: "+12%",
    },
    {
      id: 2,
      title: "Luxury Apartment",
      views: 654,
      inquiries: 18,
      trend: "up",
      percentage: "+8%",
    },
    {
      id: 3,
      title: "Family Home",
      views: 432,
      inquiries: 15,
      trend: "down",
      percentage: "-3%",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">
            Track your property performance and insights
          </p>
        </div>
        <Select defaultValue="7d">
          <SelectTrigger className="w-[180px]">
            <Calendar className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Last 24 hours</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center text-sm">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span
                    className={
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Chart */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-6">Views & Inquiries Trend</h2>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Chart will be implemented here
          </div>
        </CardContent>
      </Card>

      {/* Top Performing Properties */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-6">Top Performing Properties</h2>
          <div className="space-y-6">
            {topProperties.map((property) => (
              <div
                key={property.id}
                className="flex items-center justify-between pb-6 last:pb-0 last:border-0 border-b border-border"
              >
                <div className="space-y-1">
                  <h3 className="font-medium">{property.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {property.views}
                    </span>
                    <span className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {property.inquiries}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  {property.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span
                    className={
                      property.trend === "up"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {property.percentage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics; 