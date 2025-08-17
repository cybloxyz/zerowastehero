// HoverBacklight.jsx
import React from 'react';
import { animated, useSpring } from '@react-spring/web';

const useAngledBoop = (index, count = 5, distance = 20) => {
  const angle = (index * 360) / count - 90;
  const rad = (angle * Math.PI) / 180;
  const x = distance * Math.cos(rad);
  const y = distance * Math.sin(rad);

  const [style, api] = useSpring(() => ({
    from: { x: 0, y: 0, scale: 0, opacity: 0 },
    to: { x: 0, y: 0, scale: 0, opacity: 0 },
    config: { tension: 200, friction: 12 },
  }));

  const trigger = () => {
    api.start([
      { x, y, scale: 1.2, opacity: 1 },
      { x, y, scale: 0, opacity: 0, delay: 150 },
    ]);
  };

  return [style, trigger];
};

export default function HoverBacklight({ children, count = 5, distance = 20 }) {
  const boops = Array.from({ length: count }, (_, i) => useAngledBoop(i, count, distance));
  const [mainStyle, mainApi] = useSpring(() => ({ scale: 1 }));

  const handleEnter = () => {
    mainApi.start({ scale: 1.05 });
    boops.forEach(([_, trigger]) => trigger());
  };

  const handleLeave = () => {
    mainApi.start({ scale: 1 });
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {boops.map(([style], i) => (
        <animated.span
          key={i}
          style={style}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      ))}
      <animated.div style={mainStyle}>{children}</animated.div>
    </div>
  );
}
