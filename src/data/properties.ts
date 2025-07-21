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
    title: "Luxury Lusaka Apartment",
    price: 2800000,
    location: "Kabulonga, Lusaka",
    image: property1,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1400,
    type: "Apartment",
    status: "for-sale",
    yearBuilt: 2021,
    description: "Modern luxury apartment in prestigious Kabulonga with panoramic city views. Features premium finishes, secure parking, and 24-hour security.",
    features: [
      "City views",
      "Premium finishes", 
      "24-hour security",
      "Secure parking",
      "Modern kitchen",
      "Air conditioning",
      "Swimming pool",
      "Gym facilities",
      "Generator backup",
      "DSTV ready"
    ],
    agent: {
      name: "Chama Mwansa",
      phone: "+260 97 123 4567",
      email: "chama@hauslink .zm"
    }
  },
  {
    id: "2",
    title: "Family Home in Roma",
    price: 1850000,
    location: "Roma, Lusaka",
    image: property2,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    type: "House",
    status: "for-sale",
    yearBuilt: 2018,
    description: "Spacious family home in prestigious Roma suburb. Perfect for families with excellent schools nearby, large garden, and modern amenities.",
    features: [
      "Large garden",
      "Modern kitchen",
      "Master en-suite",
      "Servant quarters",
      "Double garage",
      "Borehole water",
      "Solar geyser", 
      "Electric fence",
      "Near schools",
      "Generator ready"
    ],
    agent: {
      name: "Mutinta Kabwe",
      phone: "+260 96 234 5678",
      email: "mutinta@hauslink.zm"
    }
  },
  {
    id: "3",
    title: "Modern Townhouse",
    price: 18000,
    location: "Ibex Hill, Lusaka",
    image: property3,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: "Townhouse",
    status: "for-rent",
    yearBuilt: 2020,
    description: "Contemporary townhouse in gated community with excellent security. Features modern design, clubhouse access, and family-friendly environment.",
    features: [
      "Gated community",
      "24/7 security",
      "Clubhouse access",
      "Swimming pool",
      "Modern design",
      "Air conditioning",
      "Parking space",
      "Children's play area",
      "DSTV ready",
      "Fiber internet ready"
    ],
    agent: {
      name: "Bwalya Musonda",
      phone: "+260 95 345 6789",
      email: "bwalya@hauslink.zm"
    }
  },
  {
    id: "4",
    title: "Garden City Apartment",
    price: 12000,
    location: "Garden City, Lusaka",
    image: property1,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1000,
    type: "Apartment",
    status: "for-rent",
    yearBuilt: 2019,
    description: "Modern apartment in sought-after Garden City area. Close to shopping centers, restaurants, and entertainment venues with excellent transport links.",
    features: [
      "Shopping center nearby",
      "Transport links",
      "Modern fittings",
      "Security",
      "Parking space",
      "Air conditioning",
      "DSTV ready",
      "Backup water",
      "Generator backup",
      "Fiber ready"
    ],
    agent: {
      name: "Kunda Tembo",
      phone: "+260 94 456 7890",
      email: "kunda@hauslink.zm"
    }
  },
  {
    id: "5",
    title: "Luxury Villa in Avondale",
    price: 4200000,
    location: "Avondale, Lusaka",
    image: property2,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    type: "Villa",
    status: "for-sale",
    yearBuilt: 2020,
    description: "Magnificent luxury villa in exclusive Avondale. Custom-built with premium finishes, swimming pool, and extensive landscaped gardens.",
    features: [
      "Swimming pool",
      "Landscaped gardens",
      "Premium finishes",
      "Staff quarters",
      "Triple garage",
      "Borehole water",
      "Solar system",
      "Electric fence",
      "CCTV security",
      "Entertainment area"
    ],
    agent: {
      name: "Pumulo Banda",
      phone: "+260 93 567 8901",
      email: "pumulo@hauslink.zm"
    }
  },
  {
    id: "6",
    title: "Starter Home in Chelston",
    price: 950000,
    location: "Chelston, Lusaka",
    image: property3,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1200,
    type: "House",
    status: "for-sale",
    yearBuilt: 2016,
    description: "Perfect starter home in popular Chelston area. Well-maintained property with good security and close to amenities.",
    features: [
      "Good security",
      "Close to amenities",
      "Well maintained",
      "Garden space",
      "Carport",
      "Borehole water",
      "Prepaid electricity",
      "Wall fence",
      "Near schools",
      "Public transport"
    ],
    agent: {
      name: "Chisomo Phiri",
      phone: "+260 97 678 9012",
      email: "chisomo@hauslink.zm"
    }
  }
];

export const featuredProperties = properties.slice(0, 3);