import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { useTheme } from "../contexts/ThemeContext";

const ParticlesBackground = () => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing particles...");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded successfully!", container);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10
                }
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: theme === 'dark' ? "#f7a34e" : "#f47e20",
            },
            links: {
              color: theme === 'dark' ? "#facc9a" : "#f7a34e",
              distance: 150,
              enable: true,
              opacity: theme === 'dark' ? 0.5 : 0.4,
              width: 2,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: theme === 'dark' ? 0.8 : 0.6,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.4,
                sync: false
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 3, max: 5 },
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 1,
                sync: false
              }
            },
          },
          detectRetina: true,
          smooth: true,
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          pointerEvents: "auto"
        }}
      />
    </div>
  );
};

export default ParticlesBackground;