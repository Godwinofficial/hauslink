import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BarChart2,
  Home,
  MessageSquare,
  Eye,
  TrendingUp,
  Plus,
  ListFilter,
} from "lucide-react";

const Dashboard = () => {
  // Mock data - replace with actual data from your backend
  const stats = [
    {
      label: "Total Properties",
      value: "12",
      change: "+2",
      trend: "up",
      icon: Home,
    },
    {
      label: "Total Views",
      value: "2.4K",
      change: "+15%",
      trend: "up",
      icon: Eye,
    },
    {
      label: "New Inquiries",
      value: "8",
      change: "+3",
      trend: "up",
      icon: MessageSquare,
    },
    {
      label: "Conversion Rate",
      value: "2.8%",
      change: "+0.3%",
      trend: "up",
      icon: TrendingUp,
    },
  ];

  const recentProperties = [
    {
      id: 1,
      title: "Modern Villa with Pool",
      location: "Lusaka, Zambia",
      price: "$450,000",
      views: 245,
      inquiries: 12,
    },
    {
      id: 2,
      title: "Luxury Apartment",
      location: "Kitwe, Zambia",
      price: "$280,000",
      views: 189,
      inquiries: 8,
    },
    {
      id: 3,
      title: "Family Home",
      location: "Ndola, Zambia",
      price: "$320,000",
      views: 156,
      inquiries: 5,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your properties.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <Button asChild>
          <Link to="/lister/add-property">
            <Plus className="mr-2 h-4 w-4" />
            Add New Property
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/lister/listings">
            <ListFilter className="mr-2 h-4 w-4" />
            View All Listings
          </Link>
        </Button>
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
                  <span
                    className={
                      stat.trend === "up"
                        ? "text-green-500"
                        : "text-red-500"
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

      {/* Recent Properties */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Properties</h2>
          <Button variant="ghost" asChild>
            <Link to="/lister/listings">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProperties.map((property) => (
            <Card key={property.id}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold truncate">{property.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {property.location}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">
                      {property.price}
                    </span>
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

                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/lister/listings/${property.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Performance Overview</h2>
            <Button variant="outline" size="sm">
              <BarChart2 className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </div>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Chart will be implemented here
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard; 