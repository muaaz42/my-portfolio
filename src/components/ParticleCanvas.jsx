import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId = 0;
    let running = true;
    let width = 0;
    let height = 0;
    let particles = [];
    const mouse = { x: null, y: null, radius: 120 };

    const countForSize = () =>
      Math.min(Math.floor((width * height) / 28000), width < 768 ? 24 : 42);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: countForSize() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.7,
        speedY: (Math.random() - 0.5) * 0.7,
        color: Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.16)' : 'rgba(200, 205, 215, 0.1)'
      }));
    };

    const animate = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      const connect = width >= 768;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        if (mouse.x !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius && dist > 0.001) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 2.4;
            p.y -= (dy / dist) * force * 2.4;
          }
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (connect) {
        const maxDistance = 100;
        for (let a = 0; a < particles.length; a++) {
          for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = dx * dx + dy * dy;
            if (distance < maxDistance * maxDistance) {
              const opacity = (1 - Math.sqrt(distance) / maxDistance) * 0.07;
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const onResize = () => resize();
    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    const onVisibility = () => {
      running = document.visibilityState === 'visible';
      if (running) animate();
      else cancelAnimationFrame(animationFrameId);
    };

    resize();
    animate();
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
      aria-hidden="true"
    />
  );
}
