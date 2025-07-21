import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar,
  Phone,
  Mail,
  User,
  CheckCircle,
  Car,
  Wifi,
  Shield,
  Zap,
  Play
} from "lucide-react";
import { properties } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const [isFavorited, setIsFavorited] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const property = properties.find(p => p.id === id);

  // Mock additional images for the property
  const propertyImages = [
    property?.image || "",
    "/src/assets/property-2.jpg",
    "/src/assets/property-3.jpg",
    "/src/assets/property-1.jpg",
    "/src/assets/property-2.jpg",
  ].filter(Boolean);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setDirection(1);
      setCurrentImageIndex((prev) => 
        prev === propertyImages.length - 1 ? 0 : prev + 1
      );
    }

    if (isRightSwipe) {
      setDirection(-1);
      setCurrentImageIndex((prev) => 
        prev === 0 ? propertyImages.length - 1 : prev - 1
      );
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Property Not Found</h1>
          <Link to="/properties">
            <Button>Back to Properties</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return `ZMW ${price.toLocaleString()}`;
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

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.9
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      <main className="pt-16">
        {/* Hero Image Section */}
        <div 
          className="relative h-96 md:h-[500px] overflow-hidden bg-background"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image Slider */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                }}
                className="absolute inset-0"
              >
                <motion.img
                  src={propertyImages[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  layoutId={`property-image-${currentImageIndex}`}
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* UI Layer */}
          <div className="relative z-10">
            {/* Back Button */}
            <Link 
              to="/properties"
              className="absolute top-6 left-6 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>

            {/* Action Buttons */}
            <div className="absolute top-6 right-6 flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/90 hover:bg-white text-muted-foreground hover:text-red-500 transition-colors"
                onClick={() => setIsFavorited(!isFavorited)}
              >
                <Heart className={`h-5 w-5 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/90 hover:bg-white text-muted-foreground hover:text-primary transition-colors"
              >
                <Play className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/90 hover:bg-white text-muted-foreground hover:text-primary transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Image Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {propertyImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentImageIndex ? 1 : -1);
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? "bg-white scale-100" 
                      : "bg-white/50 scale-90 hover:scale-100"
                  }`}
                />
              ))}
            </div>

            {/* Status Badge */}
            <Badge 
              className={`absolute bottom-6 left-6 ${getStatusColor(property.status)} text-white border-0 text-sm px-3 py-1`}
            >
              {getStatusText(property.status)}
            </Badge>
          </div>
        </div>

        {/* Property Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Property Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-bold text-primary">
                      {formatPrice(property.price)}
                      {property.status === "for-rent" && <span className="text-sm text-muted-foreground">/month</span>}
                    </div>
                    <Badge variant="outline" className="text-sm px-3 py-1">
                      {property.type}
                    </Badge>
                  </div>
                  
                  <h1 className="text-2xl font-bold text-foreground mb-3">
                    {property.title}
                  </h1>
                  
                  <div className="flex items-center text-muted-foreground mb-6">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-base">{property.location}</span>
                  </div>

                  {/* Property Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center p-3 bg-muted/30 rounded-lg">
                      <Bed className="h-5 w-5 text-primary mr-2" />
                      <div>
                        <div className="font-semibold">{property.bedrooms}</div>
                        <div className="text-sm text-muted-foreground">Bedrooms</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-muted/30 rounded-lg">
                      <Bath className="h-5 w-5 text-primary mr-2" />
                      <div>
                        <div className="font-semibold">{property.bathrooms}</div>
                        <div className="text-sm text-muted-foreground">Bathrooms</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-muted/30 rounded-lg">
                      <Square className="h-5 w-5 text-primary mr-2" />
                      <div>
                        <div className="font-semibold">{property.sqft.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Sqft</div>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-muted/30 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <div>
                        <div className="font-semibold">{property.yearBuilt}</div>
                        <div className="text-sm text-muted-foreground">Built</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">About This Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {property.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Features & Amenities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar - Agent Info */}
              <div className="space-y-6">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{property.agent.name}</h3>
                      <p className="text-sm text-muted-foreground">Licensed Real Estate Agent</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary mr-3" />
                        <span className="text-muted-foreground">{property.agent.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-primary mr-3" />
                        <span className="text-muted-foreground">{property.agent.email}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mt-6">
                      <Button className="w-full" size="lg">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Agent
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        Schedule Viewing
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PropertyDetail;