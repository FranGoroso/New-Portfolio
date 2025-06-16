import { useEffect, useState } from 'react';

const ParticlesDebugger = () => {
  const [particlesElement, setParticlesElement] = useState<HTMLElement | null>(null);
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Buscar el elemento de partículas
    const particles = document.getElementById('tsparticles');
    setParticlesElement(particles);

    // Buscar el canvas dentro
    if (particles) {
      const canvas = particles.querySelector('canvas');
      setCanvasElement(canvas);
    }
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>Particles Debug Info</h3>
      <div>Particles Container: {particlesElement ? 'Found' : 'Not Found'}</div>
      <div>Canvas Element: {canvasElement ? 'Found' : 'Not Found'}</div>
      {particlesElement && (
        <>
          <div>Container Style:</div>
          <div style={{ fontSize: '10px', marginLeft: '10px' }}>
            <div>position: {getComputedStyle(particlesElement).position}</div>
            <div>z-index: {getComputedStyle(particlesElement).zIndex}</div>
            <div>width: {getComputedStyle(particlesElement).width}</div>
            <div>height: {getComputedStyle(particlesElement).height}</div>
            <div>display: {getComputedStyle(particlesElement).display}</div>
          </div>
        </>
      )}
      {canvasElement && (
        <>
          <div style={{ marginTop: '10px' }}>Canvas Style:</div>
          <div style={{ fontSize: '10px', marginLeft: '10px' }}>
            <div>width: {canvasElement.width}px</div>
            <div>height: {canvasElement.height}px</div>
            <div>display: {getComputedStyle(canvasElement).display}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ParticlesDebugger;
