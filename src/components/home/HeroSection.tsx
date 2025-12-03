import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Learn to Code,<br />Sign by Sign
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-lg">
              Unlock the world of programming with accessible video tutorials led by native sign language instructors. Start your coding journey today.
            </p>
            <Link to="/courses">
              <Button 
                size="lg" 
                variant="secondary"
                className="group"
              >
                Start Learning
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="animate-slide-in-right">
            <img
              src={heroImage}
              alt="Sign language instructor teaching coding"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
