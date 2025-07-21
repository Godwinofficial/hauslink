import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Shield, 
  HeartHandshake, 
  TrendingUp,
  ArrowRight,
  Star,
  Quote
} from "lucide-react";
import ServiceDetails from "@/components/ServiceDetails";
import { useState, useEffect } from "react";
import { getCookie, setCookie } from "../lib/utils";

const Index = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookie_consent");
    if (!consent) setShowCookieBanner(true);
  }, []);

  const handleConsent = (accepted: boolean) => {
    setCookie("cookie_consent", accepted ? "accepted" : "rejected", 365);
    setShowCookieBanner(false);
  };

  const features = [
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Our experienced agents provide professional guidance throughout your real estate journey."
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description: "Built on trust and integrity, we've helped thousands of clients achieve their property goals."
    },
    {
      icon: HeartHandshake,
      title: "Personalized Care",
      description: "Every client receives personalized attention and tailored solutions for their unique needs."
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Stay ahead with our deep market knowledge and data-driven property insights."
    }
  ];

  const testimonials = [
    {
      name: "Mwangi & Grace Banda",
      text: "HausLink made our home buying experience smooth and stress-free. Their team was professional, knowledgeable, and always available to answer our questions.",
      rating: 5,
      location: "Kabulonga Apartment Buyers"
    },
    {
      name: "Chisomo Mulenga",
      text: "Sold our family home in Roma in just 2 weeks! The marketing strategy was excellent and the communication throughout the process was outstanding.",
      rating: 5,
      location: "Roma Home Seller"
    },
    {
      name: "Pumulo Tembo",
      text: "As a first-time buyer, I was nervous about the process. The team at HausLink guided me every step of the way and helped me find the perfect starter home in Chelston.",
      rating: 5,
      location: "First-Time Buyer"
    }
  ];

  const services = [
    {
      title: "Buy Properties",
      description: "Find your dream home with our extensive property listings and expert guidance.",
      shortDescription: "Find your dream home with our extensive property listings and expert guidance.",
      features: [
        "Access to exclusive property listings",
        "Personalized property search",
        "Virtual property tours",
        "Professional property evaluation",
        "Negotiation support",
        "Legal documentation assistance",
        "Mortgage consultation",
        "Property inspection coordination"
      ],
      benefits: [
        {
          title: "Market Expertise",
          description: "Get insights into local market trends and property valuations to make informed decisions."
        },
        {
          title: "Time Savings",
          description: "We handle property viewings, negotiations, and paperwork, saving you valuable time."
        },
        {
          title: "Better Deals",
          description: "Our negotiation expertise helps you get the best possible price for your dream home."
        },
        {
          title: "Peace of Mind",
          description: "We ensure all legal and regulatory requirements are met during the buying process."
        }
      ],
      process: [
        {
          step: 1,
          title: "Initial Consultation",
          description: "We discuss your requirements, budget, and preferred locations to understand your needs."
        },
        {
          step: 2,
          title: "Property Search",
          description: "We shortlist properties matching your criteria and arrange viewings."
        },
        {
          step: 3,
          title: "Property Evaluation",
          description: "Our experts assess the property value and condition to ensure a fair deal."
        },
        {
          step: 4,
          title: "Negotiation & Offer",
          description: "We negotiate the best price and terms on your behalf."
        },
        {
          step: 5,
          title: "Closing Support",
          description: "We assist with documentation and guide you through the closing process."
        }
      ]
    },
    {
      title: "Sell Properties",
      description: "Get the best value for your property with our proven marketing strategies and expert team.",
      shortDescription: "Get the best value for your property with our proven marketing strategies.",
      features: [
        "Professional property valuation",
        "High-quality photography and staging",
        "Virtual tours and 3D walkthroughs",
        "Multi-channel marketing",
        "Qualified buyer screening",
        "Negotiation handling",
        "Transaction management",
        "Post-sale support"
      ],
      benefits: [
        {
          title: "Maximum Exposure",
          description: "Your property gets featured across multiple marketing channels for maximum visibility."
        },
        {
          title: "Professional Presentation",
          description: "We showcase your property with professional photos and virtual tours."
        },
        {
          title: "Optimal Pricing",
          description: "Our market analysis ensures your property is priced competitively."
        },
        {
          title: "Hassle-free Process",
          description: "We manage all aspects of the sale, from marketing to closing."
        }
      ],
      process: [
        {
          step: 1,
          title: "Property Evaluation",
          description: "We assess your property's value and suggest improvements for maximum returns."
        },
        {
          step: 2,
          title: "Marketing Preparation",
          description: "Professional photography, staging, and marketing material creation."
        },
        {
          step: 3,
          title: "Active Marketing",
          description: "Multi-channel promotion to reach qualified potential buyers."
        },
        {
          step: 4,
          title: "Buyer Management",
          description: "We handle inquiries, showings, and negotiate with potential buyers."
        },
        {
          step: 5,
          title: "Sale Closing",
          description: "Complete documentation and transaction management until closing."
        }
      ]
    },
    {
      title: "Property Management",
      description: "Let us handle your investment properties with professional management services.",
      shortDescription: "Let us handle your investment properties with professional management services.",
      features: [
        "Tenant screening and selection",
        "Rent collection and accounting",
        "Property maintenance",
        "24/7 emergency response",
        "Regular property inspections",
        "Financial reporting",
        "Legal compliance management",
        "Vendor relationship management"
      ],
      benefits: [
        {
          title: "Passive Income",
          description: "We handle everything while you enjoy steady rental income."
        },
        {
          title: "Property Protection",
          description: "Regular maintenance and inspections protect your investment."
        },
        {
          title: "Quality Tenants",
          description: "Our thorough screening process ensures reliable tenants."
        },
        {
          title: "Legal Compliance",
          description: "We ensure all operations comply with local regulations."
        }
      ],
      process: [
        {
          step: 1,
          title: "Property Assessment",
          description: "We evaluate your property and recommend improvements if needed."
        },
        {
          step: 2,
          title: "Marketing & Tenant Search",
          description: "We market your property and screen potential tenants."
        },
        {
          step: 3,
          title: "Tenant Move-in",
          description: "Handle lease signing, deposits, and move-in documentation."
        },
        {
          step: 4,
          title: "Ongoing Management",
          description: "Regular maintenance, rent collection, and tenant communication."
        },
        {
          step: 5,
          title: "Financial Reporting",
          description: "Monthly statements and annual financial reports."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose HausLink?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine local expertise with modern technology to deliver 
              exceptional results for our Zambian clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-[var(--shadow-card)] transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From buying and selling to property management and investment consulting, 
              we offer comprehensive real estate solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 group">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => setSelectedService(index)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Dialog */}
      {selectedService !== null && (
        <ServiceDetails
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          service={services[selectedService]}
        />
      )}

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients 
              about their experiences with HausLink.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-[var(--shadow-card)] transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary/30 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found their perfect properties with HausLink.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg">
              Browse Properties
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col sm:flex-row items-center justify-between z-50 shadow-lg">
          <span className="mb-2 sm:mb-0">We use cookies to enhance your experience. By continuing, you agree to our use of cookies.</span>
          <div className="flex gap-2">
            <button className="bg-green-600 px-4 py-2 rounded" onClick={() => handleConsent(true)}>Accept</button>
            <button className="bg-red-600 px-4 py-2 rounded" onClick={() => handleConsent(false)}>Reject</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
