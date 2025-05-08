import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

interface ParticlesProps {
    className?: string;
}

const ParticlesComponent = ({ className = "absolute inset-0" }: ParticlesProps) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        console.log("Particles container loaded");
    }, []);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className={className}
            options={{
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
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#9333ea",
                    },
                    links: {
                        color: "#9333ea",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
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
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesComponent;
