import { features } from "@/lib/data";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <div className="py-16 space-y-16">
      <h2 className="text-3xl font-bold text-center">Why Choose NovaChat?</h2>
      <div className="grid grid-cols-1 gap-8 place-content-center px-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
