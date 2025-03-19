import { FaArrowRight } from "react-icons/fa6";

function Hero() {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-primary">
            Connect Instantly with NovaChat
          </h1>
          <p className="py-6 text-lg text-gray-500">
            Experience lightning-fast messaging and seamless group
            collaboration. Connect with colleagues and friends in real-time.
          </p>
          <div className="flex gap-4 justify-center items-center">
            <button className="flex gap-2 items-center btn btn-primary group">
              <span>Get Started</span>
              <FaArrowRight
                size="12"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
