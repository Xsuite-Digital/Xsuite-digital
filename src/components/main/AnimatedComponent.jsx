import { useEffect, useRef } from "react";

const PARTICLE_SIZE = 2;
const PARTICLE_SPACING = 20;
const WAVE_SPEED = 0.2;
const MAX_DISTANCE = 150;

export default function ParticleComponent() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let x = 0; x < canvas.width; x += PARTICLE_SPACING) {
        for (let y = 0; y < canvas.height; y += PARTICLE_SPACING) {
          particlesRef.current.push({
            x,
            y,
            baseY: y,
            baseX: x,
            speed: Math.random() * 2 + 1,
            angle: Math.random() * Math.PI * 2, // Random rotation angle for particles
            opacity: Math.random() * 0.2 + 0.5, // Random opacity
            color:
              Math.random() < 0.2
                ? "rgba(249, 115, 22, 1)"
                : "rgba(255, 255, 255, 1)", // 20% chance for orange particles
            pulseSize: Math.random() * 1.2 + 1, // Random pulse size factor
          });
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Slight fading to smooth transitions
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { x: mouseX, y: mouseY } = mouseRef.current;

      particlesRef.current.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Particle explosion effect when near mouse
        if (distance < MAX_DISTANCE) {
          const angle = Math.atan2(dy, dx);
          const force = (1 - distance / MAX_DISTANCE) * 40;
          particle.x += Math.cos(angle) * force; // Particle moves outward in X direction
          particle.y += Math.sin(angle) * force; // Particle moves outward in Y direction
          particle.opacity = 1; // Full opacity on interaction
          particle.color = "rgba(249, 115, 22, 1)"; // Orange color for proximity effect
        } else {
          // Faint orange color when far from mouse
          if (Math.random() < 0.01) {
            particle.color = "rgba(249, 115, 22, 0.3)";
          }

          // Fade out effect when far from mouse
          particle.opacity = Math.max(0.1, particle.opacity - 0.01);
          // Smooth return to the base position with some random jitter
          particle.x +=
            (particle.baseX - particle.x) * WAVE_SPEED +
            Math.random() * 0.2 -
            0.1;
          particle.y +=
            (particle.baseY - particle.y) * WAVE_SPEED +
            Math.random() * 0.2 -
            0.1;
        }

        // Pulse effect
        const pulse = Math.sin(particle.speed * Math.PI * 2) * 0.5 + 1; // Pulsing effect
        const pulseFactor = particle.pulseSize * pulse;

        // Rotate particle
        particle.angle += 0.05;

        // Draw particle with varying opacity and size
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);
        ctx.fillStyle = particle.color; // Color changes based on distance
        ctx.globalAlpha = particle.opacity; // Apply opacity
        // ctx.fillRect(
        //   -pulseFactor / 2,
        //   -pulseFactor / 2,
        //   pulseFactor,
        //   pulseFactor
        // );
        ctx.fillRect(
          -PARTICLE_SIZE / 2,
          -PARTICLE_SIZE / 2,
          PARTICLE_SIZE,
          PARTICLE_SIZE
        );
        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative lg:w-full lg:h-screen h-[60vh] bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
