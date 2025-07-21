import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import { featuredProperties, type Property } from "@/data/properties";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProperties = () => {
  const handleViewDetails = (property: Property) => {
    window.location.href = `/properties/${property.id}`;
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties that offer 
            exceptional value and unmatched quality
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <div key={property.id} className="reveal-animation">
              <PropertyCard
                property={property}
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild variant="premium" size="lg">
            <Link to="/properties">
              View All Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;