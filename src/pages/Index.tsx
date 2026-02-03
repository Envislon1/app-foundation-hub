import PageLayout from "@/components/PageLayout";
import { Phone, MapPin, Users, BookOpen, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Girls learning together" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
              Empowering Girls to <span className="text-accent">Bloom & Grow</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We are dedicated to transforming lives through education, skill development, 
              and community empowerment. Together, we nurture the potential in every girl 
              to create a brighter future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              About Our Initiative
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Girls Bloom & Growth Initiative for Development is a registered non-profit 
              organization committed to empowering girls and women across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Education",
                description: "Providing access to quality education and learning resources for girls."
              },
              {
                icon: Users,
                title: "Community",
                description: "Building strong support networks and mentorship programs."
              },
              {
                icon: Target,
                title: "Skills",
                description: "Equipping girls with practical skills for economic independence."
              },
              {
                icon: Heart,
                title: "Empowerment",
                description: "Fostering confidence, leadership, and personal growth."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-elevated transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To create a world where every girl has the opportunity to reach her full potential. 
              We believe in the transformative power of education, community support, and 
              sustainable development to break cycles of poverty and inequality.
            </p>
            <div className="inline-block bg-primary/5 border border-primary/20 rounded-lg px-6 py-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Registered with CAC Nigeria</span>
                <br />
                Registration Number: 7103923 | August 21, 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have questions or want to support our mission? We'd love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-elevated">
              <div className="space-y-6">
                <a 
                  href="tel:+2348180286858"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      +234 818 028 6858
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">
                      Chief Udoeden Palace Opp. Etim Ekpo Sport Stadium
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Utu Etim Ekpo L.G.A, Akwa Ibom State, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
