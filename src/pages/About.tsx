import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Building, 
  Target, 
  Heart, 
  Shield,
  Star,
  CheckCircle
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Properties Sold", icon: Building },
    { number: "1000+", label: "Happy Clients", icon: Users },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Cities Covered", icon: Target },
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-Focused",
      description: "We put our clients' needs first, ensuring personalized service and exceptional experiences."
    },
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "Our team brings years of market knowledge and professional expertise to every transaction."
    },
    {
      icon: Star,
      title: "Quality Service",
      description: "We maintain the highest standards in everything we do, from property selection to customer care."
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Our track record speaks for itself with thousands of successful property transactions."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Senior Real Estate Agent",
      experience: "8 years",
      specialization: "Luxury Properties",
      description: "Sarah specializes in luxury downtown properties and has helped over 200 clients find their dream homes."
    },
    {
      name: "Michael Chen",
      role: "Family Home Specialist",
      experience: "6 years", 
      specialization: "Suburban Properties",
      description: "Michael focuses on family homes and suburban properties, with expertise in school districts and community amenities."
    },
    {
      name: "Emily Rodriguez",
      role: "Waterfront Specialist",
      experience: "5 years",
      specialization: "Waterfront Properties", 
      description: "Emily is our go-to expert for waterfront and vacation properties, with extensive knowledge of coastal markets."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About HausLink
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're passionate about connecting people with their perfect homes 
            and creating lasting relationships built on trust and excellence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2024, HausLink began with a simple mission: to revolutionize 
                the real estate experience by combining cutting-edge technology with 
                personalized service.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                What started as a small team of passionate real estate professionals has grown 
                into a trusted name in the industry. We've helped thousands of families find 
                their dream homes and assisted countless investors in building their portfolios.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our approach is different. We believe that buying or selling a home should be 
                an exciting journey, not a stressful ordeal. That's why we've invested heavily 
                in technology and training to ensure our clients receive the most comprehensive 
                and efficient service possible.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, we continue to set new standards in the real estate industry, 
                always putting our clients' needs first and maintaining the highest 
                levels of integrity and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape the way 
              we serve our clients and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-[var(--shadow-card)] transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing you with 
              exceptional service and expert guidance throughout your real estate journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    
                    <div className="flex justify-center gap-2 mb-3">
                      <Badge variant="outline">{member.experience}</Badge>
                      <Badge variant="outline">{member.specialization}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing, our team is here to help 
            you achieve your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Contact Our Team
            </Button>
            <Button variant="outline" size="lg">
              View Properties
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;