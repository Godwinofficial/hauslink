import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  status: "for-sale" | "for-rent" | "sold";
  yearBuilt: number;
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Downtown Condo",
    price: 850000,
    location: "Downtown, Metro City",
    image: property1,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "Condo",
    status: "for-sale",
    yearBuilt: 2020,
    description: "Stunning modern condo with floor-to-ceiling windows and city views. Premium finishes throughout including hardwood floors, quartz countertops, and stainless steel appliances.",
    features: [
      "Floor-to-ceiling windows",
      "City skyline views",
      "Hardwood floors",
      "Quartz countertops",
      "Stainless steel appliances",
      "In-unit laundry",
      "Balcony",
      "Parking space",
      "Gym access",
      "Concierge service"
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "(555) 123-4567",
      email: "sarah@estateverse.com"
    }
  },
  {
    id: "2",
    title: "Charming Family Home",
    price: 625000,
    location: "Riverside, Suburban Heights",
    image: property2,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    type: "House",
    status: "for-sale",
    yearBuilt: 2015,
    description: "Beautiful family home in a quiet neighborhood. Features a spacious backyard, modern kitchen, and plenty of room for the whole family to enjoy.",
    features: [
      "Spacious backyard",
      "Modern kitchen",
      "Master suite",
      "Walk-in closets",
      "Two-car garage",
      "Fireplace",
      "Dining room",
      "Home office",
      "Landscaped garden",
      "Near schools"
    ],
    agent: {
      name: "Michael Chen",
      phone: "(555) 234-5678",
      email: "michael@estateverse.com"
    }
  },
  {
    id: "3",
    title: "Waterfront Townhouse",
    price: 3200,
    location: "Harbor District, Seaside",
    image: property3,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: "Townhouse",
    status: "for-rent",
    yearBuilt: 2018,
    description: "Modern waterfront townhouse with private dock access. Enjoy stunning water views and outdoor living spaces perfect for entertaining.",
    features: [
      "Waterfront location",
      "Private dock access",
      "Water views",
      "Large deck",
      "Modern design",
      "Open floor plan",
      "High ceilings",
      "Waterfront terrace",
      "Boat slip included",
      "Walking distance to marina"
    ],
    agent: {
      name: "Emily Rodriguez",
      phone: "(555) 345-6789",
      email: "emily@estateverse.com"
    }
  },
  {
    id: "4",
    title: "Modern Loft Apartment",
    price: 2800,
    location: "Arts District, Metro City",
    image: property1,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 900,
    type: "Loft",
    status: "for-rent",
    yearBuilt: 2019,
    description: "Industrial-chic loft in the trendy Arts District. High ceilings, exposed brick, and modern amenities in a vibrant neighborhood.",
    features: [
      "High ceilings",
      "Exposed brick walls",
      "Industrial design",
      "Modern kitchen",
      "Large windows",
      "Hardwood floors",
      "In-unit laundry",
      "Rooftop access",
      "Near galleries",
      "Trendy neighborhood"
    ],
    agent: {
      name: "David Wilson",
      phone: "(555) 456-7890",
      email: "david@estateverse.com"
    }
  },
  {
    id: "5",
    title: "Luxury Estate",
    price: 1250000,
    location: "Hillcrest Estates, Premium Valley",
    image: property2,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    type: "House",
    status: "for-sale",
    yearBuilt: 2017,
    description: "Magnificent luxury estate with panoramic views. Custom-built with premium finishes and extensive outdoor entertaining areas.",
    features: [
      "Panoramic views",
      "Custom-built",
      "Premium finishes",
      "Chef's kitchen",
      "Wine cellar",
      "Home theater",
      "Pool and spa",
      "Outdoor kitchen",
      "Three-car garage",
      "Gated community"
    ],
    agent: {
      name: "Jennifer Adams",
      phone: "(555) 567-8901",
      email: "jennifer@estateverse.com"
    }
  },
  {
    id: "6",
    title: "Cozy Cottage",
    price: 425000,
    location: "Maple Street, Old Town",
    image: property3,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1100,
    type: "House",
    status: "for-sale",
    yearBuilt: 1995,
    description: "Charming cottage with original character and modern updates. Perfect starter home in a historic neighborhood.",
    features: [
      "Historic character",
      "Modern updates",
      "Hardwood floors",
      "Original moldings",
      "Updated kitchen",
      "Private garden",
      "Front porch",
      "Basement storage",
      "Walk to downtown",
      "Quiet street"
    ],
    agent: {
      name: "Robert Taylor",
      phone: "(555) 678-9012",
      email: "robert@estateverse.com"
    }
  }
];

export const featuredProperties = properties.slice(0, 3);