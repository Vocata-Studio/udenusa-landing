'use client';

import createGlobe, { COBEOptions } from 'cobe';
import { useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

const MOVEMENT_DAMPING = 1400;

// UdenUSA brand green (#32d74b) for the markers, on a dark globe.
const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 4,
  baseColor: [0.3, 0.3, 0.32],
  markerColor: [50 / 255, 215 / 255, 75 / 255],
  glowColor: [0.16, 0.5, 0.25],
  // Keep the markers flat on the surface instead of raised pins (v2 default is 0.05).
  // Small sizes near the map-dot scale keep the glow halo tight so they read as
  // flat dots painted onto the grid rather than raised, glowing orbs.
  markerElevation: 0,
  markers: [
    { location: [55.6761, 12.5683], size: 0.03 }, // Copenhagen (home)
    { location: [56.1629, 10.2039], size: 0.015 }, // Aarhus
    { location: [59.3293, 18.0686], size: 0.015 }, // Stockholm
    { location: [59.9139, 10.7522], size: 0.015 }, // Oslo
    { location: [60.1699, 24.9384], size: 0.015 }, // Helsinki
    { location: [52.52, 13.405], size: 0.018 }, // Berlin
    { location: [48.8566, 2.3522], size: 0.018 }, // Paris
    { location: [51.5074, -0.1278], size: 0.018 }, // London
    { location: [52.3676, 4.9041], size: 0.015 }, // Amsterdam
    { location: [50.8503, 4.3517], size: 0.013 }, // Brussels
    { location: [40.4168, -3.7038], size: 0.015 }, // Madrid
    { location: [41.9028, 12.4964], size: 0.015 }, // Rome
    { location: [52.2297, 21.0122], size: 0.013 }, // Warsaw
    { location: [47.4979, 19.0402], size: 0.013 }, // Budapest
    { location: [37.9838, 23.7275], size: 0.013 }, // Athens
    { location: [38.7223, -9.1393], size: 0.013 }, // Lisbon
    { location: [53.3498, -6.2603], size: 0.013 }, // Dublin
    { location: [64.1466, -21.9426], size: 0.012 }, // Reykjavik
    { location: [55.7558, 37.6173], size: 0.015 }, // Moscow
    { location: [41.0082, 28.9784], size: 0.015 }, // Istanbul
    { location: [40.7128, -74.006], size: 0.02 }, // New York
    { location: [34.0522, -118.2437], size: 0.018 }, // Los Angeles
    { location: [43.6532, -79.3832], size: 0.015 }, // Toronto
    { location: [19.4326, -99.1332], size: 0.015 }, // Mexico City
    { location: [-23.5505, -46.6333], size: 0.018 }, // São Paulo
    { location: [-34.6037, -58.3816], size: 0.015 }, // Buenos Aires
    { location: [4.711, -74.0721], size: 0.013 }, // Bogotá
    { location: [35.6762, 139.6503], size: 0.018 }, // Tokyo
    { location: [37.5665, 126.978], size: 0.015 }, // Seoul
    { location: [31.2304, 121.4737], size: 0.018 }, // Shanghai
    { location: [1.3521, 103.8198], size: 0.015 }, // Singapore
    { location: [13.7563, 100.5018], size: 0.013 }, // Bangkok
    { location: [28.6139, 77.209], size: 0.018 }, // New Delhi
    { location: [25.2048, 55.2708], size: 0.015 }, // Dubai
    { location: [-33.8688, 151.2093], size: 0.015 }, // Sydney
    { location: [-37.8136, 144.9631], size: 0.013 }, // Melbourne
    { location: [-26.2041, 28.0473], size: 0.013 }, // Johannesburg
    { location: [30.0444, 31.2357], size: 0.013 }, // Cairo
    { location: [6.5244, 3.3792], size: 0.013 }, // Lagos
    { location: [-1.2921, 36.8219], size: 0.012 }, // Nairobi
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? 'grabbing' : 'grab';
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let frame = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
    });

    // cobe v2 has no onRender callback — drive the rotation ourselves.
    const render = () => {
      if (!pointerInteracting.current) phi += 0.005;
      globe.update({
        phi: phi + rs.get(),
        width: width * 2,
        height: width * 2,
      });
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = '1';
    });

    return () => {
      cancelAnimationFrame(frame);
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rs, config]);

  return (
    <div
      className={cn(
        'absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]',
        className,
      )}
    >
      <canvas
        className={cn(
          'size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]',
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
