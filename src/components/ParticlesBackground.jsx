import { useEffect, useState } from "react";
import Particles from "react-tsparticles";

function ParticlesBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        options={{
          fpsLimit: 60,

          background: {
            color: "#0f172a",
          },

          detectRetina: true,

          particles: {
            number: {
              value: isMobile ? 25 : 60, // 👈 mobile optimization
            },

            size: {
              value: 2,
            },

            move: {
              enable: true,
              speed: isMobile ? 0.5 : 1, // 👈 slower on mobile
            },

            links: {
              enable: true,
              color: "#ffffff",
              distance: 120,
              opacity: 0.3,
              width: 1,
            },

            opacity: {
              value: 0.5,
            },
          },

          interactivity: {
            events: {
              onHover: {
                enable: !isMobile, // 👈 disable on mobile
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default ParticlesBackground;