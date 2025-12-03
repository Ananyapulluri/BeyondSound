import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MissionSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Bridging the Gap: Accessible Programming for Everyone
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Beyond Sound Academy is dedicated to providing an inclusive learning experience for the deaf and hard-of-hearing community. Our platform combines high-quality video instruction with interactive coding exercises, ensuring a comprehensive and engaging educational path for aspiring developers.
        </p>
        
        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Coding Journey?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join Beyond Sound Academy and gain the skills you need to thrive in the tech industry, with a learning experience designed just for you.
          </p>
          <Link to="/courses">
            <Button size="lg">
              Explore Our Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
