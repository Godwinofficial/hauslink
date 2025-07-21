import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";
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

const Index = () => {
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
      text: "Zellion made our home buying experience smooth and stress-free. Their team was professional, knowledgeable, and always available to answer our questions.",
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
      text: "As a first-time buyer, I was nervous about the process. The team at Zellion guided me every step of the way and helped me find the perfect starter home in Chelston.",
      rating: 5,
      location: "First-Time Buyer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Zellion?
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
            {[
              {
                title: "Buy Properties",
                description: "Find your dream home with our extensive property listings and expert guidance.",
                features: ["Market Analysis", "Property Tours", "Negotiation Support", "Closing Assistance"]
              },
              {
                title: "Sell Properties", 
                description: "Get the best value for your property with our proven marketing strategies.",
                features: ["Property Valuation", "Professional Photography", "Marketing Campaign", "Expert Negotiation"]
              },
              {
                title: "Property Management",
                description: "Let us handle your investment properties with professional management services.",
                features: ["Tenant Screening", "Rent Collection", "Maintenance Coordination", "Financial Reporting"]
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 group">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients 
              about their experiences with Zellion.
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
            Join thousands of satisfied clients who have found their perfect properties with Zellion.
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

      <Footer />
    </div>
  );
};

export default Index;
