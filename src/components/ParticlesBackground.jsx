import Particles from "react-tsparticles";

function ParticlesBackground() {

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        options={{
          background: {
            color: "#0f172a",
          },
          particles: {
            number: {
              value: 60
            },
            size: {
              value: 3
            },
            move: {
              enable: true,
              speed: 1
            },
            links: {
              enable: true,
              color: "#ffffff"
            }
          }
        }}
      />
    </div>
  );

}

export default ParticlesBackground;