import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Bed, Bath, Square, Calendar } from "lucide-react";
import { useState } from "react";

interface Property {
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
}

interface PropertyCardProps {
  property: Property;
  onViewDetails?: (property: Property) => void;
}

const PropertyCard = ({ property, onViewDetails }: PropertyCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "for-sale":
        return "bg-green-500";
      case "for-rent":
        return "bg-blue-500";
      case "sold":
        return "bg-gray-500";
      default:
        return "bg-primary";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "for-sale":
        return "For Sale";
      case "for-rent":
        return "For Rent";
      case "sold":
        return "Sold";
      default:
        return status;
    }
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] property-card group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Status Badge */}
        <Badge 
          className={`absolute top-4 left-4 ${getStatusColor(property.status)} text-white border-0`}
        >
          {getStatusText(property.status)}
        </Badge>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 right-4 bg-white/90 hover:bg-white transition-colors duration-200 ${
            isFavorited ? "text-red-500" : "text-muted-foreground hover:text-red-500"
          }`}
          onClick={() => setIsFavorited(!isFavorited)}
        >
          <Heart className={`h-5 w-5 ${isFavorited ? "fill-current" : ""}`} />
        </Button>

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price and Type */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-2xl font-bold text-primary">
            {formatPrice(property.price)}
            {property.status === "for-rent" && <span className="text-sm text-muted-foreground">/month</span>}
          </div>
          <Badge variant="outline" className="text-xs">
            {property.type}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Year Built */}
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Built in {property.yearBuilt}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Action Button */}
        <Button
          onClick={() => onViewDetails?.(property)}
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;