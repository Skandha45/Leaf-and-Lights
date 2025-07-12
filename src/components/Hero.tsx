import leafHero from "@/assets/matcha-bg.jpeg";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img
        src={leafHero}
        alt="Leaf and lights background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Text Content */}
      <div className="relative z-20 text-center px-4">
        <h1
          className="font-[Lobster] text-[#F1EFE6] font-normal leading-none mb-6"
          style={{
            fontSize: "clamp(3rem, 8vw, 9.8rem)", 
            lineHeight: "1.2",
          }}
        >
          Leaf and Lights
        </h1>

        <p
          className="font-[Satoshi] italic font-black text-[#F1EFE6]"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 5.4rem)",
            lineHeight: "1.3",
          }}
        >
          Launching Soon...
        </p>
      </div>
    </div>
  );
};

export default Hero;
